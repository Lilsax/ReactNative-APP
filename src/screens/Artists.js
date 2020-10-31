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

export default Artists = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      const artDAta = await axios.get(
        "https://api.happi.dev/v1/music/artists",
        {
          params: {
            page: 5,
            apikey: "f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA",
          },
        }
      );
      setData(artDAta.data.result);
    };

    dataAPI();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ArtAlbums", {
                  artID: data.id_artist,
                })
              }
            >
              <View
                style={{
                  marginBottom: 20,
                  backgroundColor: "lightgray",
                  borderRadius: 5,
                }}
              >
                <Image
                  source={{ uri: item.cover }}
                  style={{ height: 400, resizeMode: "stretch", margin: 5 }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {item.artist}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
