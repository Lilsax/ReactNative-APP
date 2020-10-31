import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Componet from "./src/screens/Compont";
import Lyrics from "./src/screens/Lyrics";
import ArtAlbums from "./src/screens/ArtAlbums";
import LogIn from "./src/screens/LogInGoogle";

const navigator = createStackNavigator(
  {
    Componet: Componet,
    Lyrics: Lyrics,
    ArtAlbums: ArtAlbums,
    LogIn: LogIn,
  },
  {
    initialRouteName: "Componet",
    defaultNavigationOptions: {
      title: "Anghamii",
    },
  }
);

export default createAppContainer(navigator);
