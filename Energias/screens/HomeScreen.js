import React, {} from 'react';
import {Text, View, StyleSheet, FlatList, BackHandler, Alert} from 'react-native';

export default class HomeScreen extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
        users: [{
          name: "Jefa lusa",
          email: "chipala@gmail.com"
        }]
    };
}
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
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});

