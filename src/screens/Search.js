import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default Search = () => {
  const [search, setSearch] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get("https://api.happi.dev/v1/music", {
        params: {
          q: text,
          limit: 30,
          apikey: "f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA",
        },
      });
      setSearch(data.data.result);
    };
    apiCall();
  }, [text]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          borderBottomColor: "lightgray",
          borderBottomWidth: 1,
          width: 300,
          textAlign: "center",
          marginTop: 20,
        }}
        onChangeText={(text) => setText(text)}
        title="find your faviote song"
        placeholder="Search for your faviote song"
      />
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          alignSelf: "flex-start",
          marginLeft: 35,
          marginBottom: 15,
        }}
      >
        Your Results:
      </Text>
      <FlatList
        keyExtractor={(item) => item.index}
        data={search}
        renderItem={({ item }) => {
          return (
            <View
              style={{ marginBottom: 10, flexDirection: "row", width: 300 }}
            >
              <Image
                source={{ uri: item.cover }}
                style={{
                  height: 100,
                  width: 100,
                  margin: 5,
                  borderRadius: 10,
                }}
              />
              <View style={{ alignSelf: "center" }}>
                <Text> {item.artist}</Text>
                <Text> {item.album}</Text>
                <Text> {item.track}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
