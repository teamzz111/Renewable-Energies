
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import  HomeScreen  from "./screens/HomeScreen";
import CmpHeader from "./screens/staticComponent/Header";
import MenuTSM from "./screens/MenuTSM";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Menu:{
      screen: MenuTSM,
    }

  },
  { // Se establece n los parametros para la pila de pantallas
    initialRouteName: "Home", // Ruta inicial (pantalla inicio por defecto)
    defaultNavigationOptions: {
      header: props => <CmpHeader {...props} />,
      title: "SELECCIONE UNA OPCIÓN",
      headerStyle: {
        backgroundColor: 'transparent',
        marginLeft: -15,
        width: '120%'
      },
      headerTitleStyle: {
        fontWeight: "300",
        color: "#fff",
        fontSize: 15
      },
      headerTintColor: "#fff",
      animationEnabled: true
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


