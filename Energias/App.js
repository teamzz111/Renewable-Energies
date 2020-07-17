import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { BackHandler, Alert } from "react-native";
import  HomeScreen  from "./screens/HomeScreen";
import CmpHeader from "./screens/staticComponent/Header";
import MenuTSM from "./screens/MenuTSM";
import MenuIrra from "./screens/Irradiancia/HomeIrradiancia";
import IrraTotal from "./screens/Irradiancia/IrradianciaTotal";
import Declina from "./screens/Declinacion";
import correcion from "./screens/CorrecionLongitud";
import angulo from "./screens/angulohorario";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    TSM:{
      screen: MenuTSM,
          navigationOptions: ({
            navigation
          }) => ({
            title: "TSV",
          }),
    },
    IrradianciaMenu:{
      screen: MenuIrra,
          navigationOptions: ({
            navigation
          }) => ({
            title: "SELECCIONE UNA OPCIÓN",
          }),
    },
    IrradianciaTotal:{
      screen: IrraTotal,
          navigationOptions: ({
            navigation
          }) => ({
            title: "IRRADIANCIA TOTAL",
          }),
    },
      Declinacion:{
      screen: Declina,
          navigationOptions: ({
            navigation
          }) => ({
            title: "DECLINACIÓN",
          }),
    },
      correcion:{
      screen: correcion,
          navigationOptions: ({
            navigation
          }) => ({
            title: "CORRECCIÓN POR LONGITUD",
          }),
    },
    angulo:{
      screen: angulo,
          navigationOptions: ({
            navigation
          }) => ({
            title: "ÁNGULO HORARIO",
          }),
    },
  },
  { // Se establece n los parametros para la pila de pantallas
    initialRouteName: "IrradianciaTotal", // Ruta inicial (pantalla inicio por defecto)
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

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  }
  backButtonClick() {
    Alert.alert(
      "Confirme",
      "¿Desea salir de la aplicación?",
      [{
          text: 'No',
          onPress: () => {
            return false
          }
        },
        {
          text: 'Si, cerrar',
          onPress: () => BackHandler.exitApp()
        },
      ], {
        cancelable: false
      },
    )

    return true;

  }
  render() {
    return <AppContainer />;
  }
}


