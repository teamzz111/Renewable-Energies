import React, {} from 'react';
import {Text, View, StyleSheet, FlatList, BackHandler, Alert, Image, PixelRatio} from 'react-native';

export default class HomeScreen extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
        users: [{
          title: "Tiempo Solar Verdadero ",
          description: "Calculadora que se encarga de calcular el TSM recibiendo múltiples parámetros.",
          route: 0
        },{
          title: "Irradiancia Solar",
          description: "Calculadora que se encarga de hallar la irradiancia solar reflejada, difusa y directa.",
          route: 1
        },{
          title: "Corrección por longitud",
          description: "Calculadora encargada de hallar la corrección por longitud",
          route: 2
        },{
          title: "Ángulo Horario",
          description: "Calculadora encargada de hallar el ángulo horario",
          route: 3
        }, {
          title: "Ángulos Solares Derivados",
          description: "Calculadora encargada de hallar cénit, altitud, y azimut",
          route: 4
        }, {
          title: "Declinación",
          description: "Calculadora encargada de hallar la declinación.",
          route: 5
        }]
    };
}
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  }

  getImage = (id) => {
    switch(id){
      case 0:{
        return require('../resources/energia-solar.png');
      }
      case 1:{
        return require('../resources/panelsolar.png');
      }
      case 2:{
        return require('../resources/calculadora.png');
      }
      case 3:{
        return require('../resources/despertador.png');
      }
      case 4:{
        return require('../resources/mundial.png');
      }
      case 5:{
        return require('../resources/gobernante.png');
      }
      default: break;
    }
  }
  backButtonClick() {

    Alert.alert(
      "Confirme",
      "¿Desea salir de la aplicación?",
      [
        { text: 'No', onPress: () => { return false } },
        { text: 'Si, cerrar', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false },
    )
    return true;

  }

  render() {
    return (
      <View style={styles.container} >
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
              <Image style={styles.img} source={this.getImage(item.route)} />
              <View style = {styles.father}>  
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.email}>{item.description}</Text>
            </View>
          </View>
          }
          keyExtractor={item => item.email}
        />
    </View>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    padding: 8
  },
  flatview: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 6,
    paddingBottom: 19,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: 'black'
  },
  name: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  email: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.4)'
  },
  img: {
    width: 65,
    height: 65,
    marginTop: 8
  },
  father: {
    flex: 1,
    width: '70%',
    marginTop: 8,
    marginLeft: 5
  }
});

