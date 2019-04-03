
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import  HomeScreen  from "./screens/HomeScreen";
import CmpHeader from "./screens/staticComponent/Header";


const AppNavigator = createStackNavigator(
  {
    Inicio: {
      screen: HomeScreen,
      navigationOptions:{
        title: "Seleccione una opción",
        header: <CmpHeader text = "BIENVENIDO, SELECCIONE UNA OPCIÓN" />
      }
    }

  },
  { // Se establece n los parametros para la pila de pantallas
    initialRouteName: "Inicio", // Ruta inicial (pantalla inicio por defecto)
    defaultNavigationOptions: {
      headerStyle: {
       
      }
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


