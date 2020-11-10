import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Componet from "./src/screens/Compont";
import Lyrics from "./src/screens/Lyrics";
import ArtAlbums from "./src/screens/ArtAlbums";
import LogIn from "./src/screens/GooogleLogin";

const navigator = createStackNavigator(
  {
    Componet: Componet,
    Lyrics: Lyrics,
    ArtAlbums: ArtAlbums,
    LogIn: LogIn,
  },
  {
    initialRouteName: "LogIn",
    defaultNavigationOptions: {
      title: "Anghamii",
    },
  }
);

export default createAppContainer(navigator);
