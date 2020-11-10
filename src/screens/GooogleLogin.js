import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Componet from "./Compont";
import * as Google from "expo-google-app-auth";

function GooogleLogin() {
  const [load, setload] = useState(false);

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "521016346513-eohmhbp0ba0f62uhv7ls0qi9fe650uuk.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setload(true);
      } else {
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <View style={styles.container}>
      {load ? <Componet /> : <LoginPage signIn={signInWithGoogleAsync} />}
    </View>
  );
}

const LoginPage = (props) => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150,
  },
});

export default GooogleLogin;
