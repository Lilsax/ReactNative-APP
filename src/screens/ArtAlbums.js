import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

function ArtAlbums({ navigation }) {
  const [data, setData] = useState([]);
  const artID = navigation.params("artID");

  useEffect(() => {
    const dataAPI = async () => {
      const dataArt = await axios.get(
        `https://api.happi.dev/v1/music/artists/${artID}/albums`,
        {
          params: {
            apikey: "f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA",
          },
        }
      );
      setData(dataArt.data.result.albums);
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
}
export default ArtAlbums;
