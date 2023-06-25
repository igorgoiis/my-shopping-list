import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ForgotPassword } from "@screens/ForgotPassword";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  forgotPassword: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
