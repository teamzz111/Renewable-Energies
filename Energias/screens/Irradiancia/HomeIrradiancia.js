import React, {} from 'react';
import { Text, View, StyleSheet, FlatList, BackHandler, Alert, Image, PixelRatio, TouchableOpacity} from 'react-native';



export default class HomeScreen extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
        users: [{
          title: "Irradiancia Total ",
          description: "Calculadora que se encarga de hallar la irradiancia total.",
          route: 3
        },{
          title: "Irradiancia Directa ",
          description: "Calculadora que se encarga de hallar la irradiancia directa.",
          route: 1
        },{
          title: "Irradiancia Reflejada",
          description: "Calculadora que se encarga de hallar la irradiancia reflejada.",
          route: 2
        },
        {
          title: "Irradiancia Difusa ",
          description: "Calculadora que se encarga de hallar la irradiancia difusa.",
          route: 0
        }]
    };
  }
  _keyExtractor = (item, index) => item.id;

  onClickPut = (id) => {
    switch(id){
      case 3:{
          this.props.navigation.push("IrradianciaTotal");
        break;
      }
    }
    return true;
  
  };
  render() {
    return (
      <View style={styles.container} >
          <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <TouchableOpacity onPress={(id) => this.onClickPut(item.route)}>
              <View style={styles.flatview}>
                  <Image style={styles.img} source={require('../../resources/panelsolar.png')} />
                  <View style = {styles.father}>  
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.email}>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={item => item.title}
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

