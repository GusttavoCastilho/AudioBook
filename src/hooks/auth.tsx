import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

import { Alert } from "react-native";

import firebase from "firebase/compat";
import { auth } from "@config/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string | undefined;
  email: string;
  name: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  user: User | null;
  isLogging: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

const USER_COLLECTION = "AudioBook@users";

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string, password: string) {
    if (!email || !password) {
      return Alert.alert("Login", "Provide email and password.");
    }

    setIsLogging(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firebase
          .firestore()
          .collection("users")
          .doc(account.user?.uid)
          .get()
          .then(async (profile) => {
            const { email, name } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user?.uid,
                name,
                email,
              };

              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData)
              );

              setUser(userData);
            }
          })
          .catch(() => Alert.alert("Login", "Unable to fetch user data"));
      })
      .catch((error) => {
        const { code } = error;

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Login", "Invalid email and/or password");
        } else {
          return Alert.alert("Login", "Unable to login");
        }
      })
      .finally(() => setIsLogging(false));
  }

  async function forgotPassword(email: string) {
    if (!email) {
      return Alert.alert("Forgot", "Email mandatory");
    }

    await auth.sendPasswordResetEmail(email);
  }

  async function signOut() {
    await auth.signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  useEffect(() => {
    async function loadUserStorageData() {
      setIsLogging(true);
      const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

      if (storedUser) {
        const userData = JSON.parse(storedUser) as User;
        setUser(userData);
      }

      setIsLogging(false);
    }

    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLogging, signIn, signOut, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
