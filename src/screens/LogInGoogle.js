import React, { useState } from "react";
import { View, Text } from "react-native";
import * as Google from "expo-google-app-auth";

const { type, accessToken, user } = await Google.logInAsync({ config });

if (type === "success") {
  // Then you can use the Google REST API
  let userInfoResponse = await fetch(
    "https://www.googleapis.com/userinfo/v2/me",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
}
// logInAsync(config: LogInonfig): Promise<LogInResult>

// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-community/google-signin";

// import * as Google from "expo-google-app-auth";

// GoogleSignin.configure({
//   webClientId:
//     "665454393261-jkoj1149kmmg7l9g5e9p5mkgj2s4qt1s.apps.googleusercontent.com",
//   offlineAccess: true,
// });

// const LogIn = async (props) => {
//   const { type, accessToken, user } = await Google.logInAsync(config);

// if (type === "success") {
//   let userInfoResponse = await fetch(
//     "https://www.googleapis.com/userinfo/v2/me",
//     {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     }
//   );
// }

const [userInfo, setUserInfo] = useState({});
const [loaded, setLoaded] = useState(false);

// signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const user = await GoogleSignin.signIn();
//     setUserInfo(user);
//     setLoaded(True);
//   } catch (err) {
//     console.log(err);
//   }
// };
return (
  <View>
    <GoogleSigninButton
      onPress={signIn}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      style={{ width: 100, height: 100 }}
    />
    {loaded ? (
      <View>
        <text>{useInfo.user.name}</text>
        <text>{useInfo.user.email}</text>
      </View>
    ) : (
      <Text>Not Signed in</Text>
    )}
  </View>
);

export default LogIn;
