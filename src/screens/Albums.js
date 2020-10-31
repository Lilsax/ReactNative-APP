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

export default Albums = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {
      const albData = await axios.get(
        "https://api.happi.dev/v1/music/artists/1404/albums",
        {
          params: {
            apikey: "f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA",
          },
        }
      );
      setData(albData.data.result.albums);
    };
    dataAPI();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              <View>
                <Image
                  source={{ uri: item.cover }}
                  style={{
                    height: 150,
                    width: 150,
                    resizeMode: "stretch",
                    borderRadius: 5,
                  }}
                />
                <Text> {item.album.slice(0, 10)} </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
