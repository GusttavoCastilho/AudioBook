import Reactotron from "reactotron-react-native";
import sagaPlugin from "reactotron-redux-saga";
import { reactotronRedux } from "reactotron-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

let tron: typeof Reactotron = Reactotron;

if (__DEV__) {
  tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  tron.clear!();

  console.tron = tron;
}
export default tron;
