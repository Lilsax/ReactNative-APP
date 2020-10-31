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

export default NewSongs = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [artist, SetArtiest] = useState("");
  const [pic, setPic] = useState("");
  const [album, setAlbum] = useState("");
  const [NavData, setNavDAta] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const singerData = await axios.get(
        "https://api.happi.dev/v1/music/artists/2272/albums/44872/tracks",
        {
          params: {
            apikey: "f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA",
          },
        }
      );
      setData(singerData.data.result.tracks);
      setAlbum(singerData.data.result.album);
      setPic(singerData.data.result.cover);
      SetArtiest(singerData.data.result.artist);
      setNavDAta(singerData.data.result);
    };
    apiCall();
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.index}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginBottom: 20,
                borderBottomWidth: 5,
                borderBottomColor: "white",
                marginBottom: 10,
                paddingBottom: 10,
                borderRadius: 5,
              }}
              onPress={() =>
                navigation.navigate("Lyrics", {
                  album: NavData,
                  artist: artist,
                  track: data.id_track,
                })
              }
            >
              <Image
                source={{ uri: pic }}
                style={{
                  height: 100,
                  width: 100,
                  flex: 0.4,
                  resizeMode: "stretch",
                  margin: 5,
                }}
              />
              <View style={{ flex: 1, alignSelf: "center" }}>
                <Text> {` Song Name : ${item.track}`} </Text>
                <Text> {` Artist Name : ${artist}`} </Text>
                <Text> {` Artist Name : ${album}`} </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
