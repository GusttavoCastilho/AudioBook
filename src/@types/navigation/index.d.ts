import { Books } from "@store/book/types";

export type ForgetPassword = {
  email: string;
};

export type EmailSent = {
  email: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      OneStep: undefined;
      TwoStep: undefined;
      ThreeStep: undefined;
      SignIn: undefined;
      SignUp: undefined;
      ForgetPassword: ForgetPassword;
      EmailSent: EmailSent;
      Settings: undefined;
      Profile: undefined;
      BookDetails: Books;
      Player: undefined;
      Search: undefined;
    }
  }
}
