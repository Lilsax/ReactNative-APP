import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

function Lyrics({ navigation }) {
  const artist = navigation.params("artist");
  const albumID = navigation.params("album");
  const track = navigation.params("track");
  const [data , setData] = useState("");


  useEffect(() => {
    const dataAPI = async () => {
      const apiCall = await axios.get(
        GET`https://api.happi.dev/v1/music/artists/${artist}/albums/${albumID}/tracks/${track}/lyrics`,
        {
          params: {
            apikey: "f7b41dV3xOEEkSoW2ZqmCceGDfzpoEVW3zkOGVObzGhChN3puH436htA",
          },
        }
      );
      setData(apiCall.data.results.lyrics);
    };

    dataAPI();

  }, []);

  return <View>
    <text style={{textAlign="center"}}>
    {data}
    </text>

  </View>;
}

export default Lyrics;
