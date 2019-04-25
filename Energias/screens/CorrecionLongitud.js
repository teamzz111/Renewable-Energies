import React, {} from 'react';
import {
    Text,
    View,
    Picker,
    StyleSheet,
    ScrollView,
    Alert,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';



export default class HomeScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        latitud: "",
        longitud:"",
        result:""
    }
}
  renderResultado = () => {
    if (this.state.result != "") {

      return (
        <View style = {{flex: 1, alignItems: 'center', marginTop: 20}}>
          <View style = {styles.resultados}>
            <Text style = {styles.text}>
              Resultados
            </Text>
            <Text style = {styles.textResultado}>
              Corrección:
              {this.state.result}
            </Text>
        </View>
      </View>
    );
  }
  }

/* IRRADIANCIA */

  calculo = () => {
      return(
        <View style = {styles.datepicker}>
            <Text style = {styles.text}>Ingrese latitud</Text>
            <TextInput
              style={styles.inputLat}
              onChangeText={(text) => this.setState({latitud: text})}
              value={this.state.latitud}
              keyboardType = 'numeric'
              placeholder = "Latitud"
              />
            <Text style = {styles.text}>Ingrese longitud</Text>
            <TextInput
              style={styles.inputLat}
              onChangeText={(text) => this.setState({longitud: text})}
              value={this.state.longitud}
              keyboardType = 'numeric'
              placeholder = "Longitud"
              />

            <TouchableNativeFeedback
              onPress = {
                () => this.correccionL(this.state.latitud, this.state.longitud)
              }
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.calc}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Calcular</Text>
              </View>
            </TouchableNativeFeedback>
            <View style = {{paddingBottom: 20}}></View>
        </View>

    );
  }
  //corrección de longitud con UTC, aplicar.
  correccionL = (lat, lon) => {
      let CL = 4 * (60 - Number(lon));
      this.setState({result: CL});
  }
  
    render() {
        return (
        <ScrollView style={styles.container}>
            {this.calculo()}
            {this.renderResultado()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        padding: 8
    },
    datepicker: {
        flex: 1,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: "black"
    },
    textResultado: {
        fontSize: 16,
        textAlign: 'left',
        marginTop: 20,
        color: "black"
    },
    boton: {
        width: 220,
        height: 46,
        backgroundColor: 'red',
        marginTop: 12,
        padding: 10
    },
    inputCoord: {
        height: 42,
        width: 80,
        padding: 10,
        borderColor: 'black',
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize: 22,
        textAlign: 'center',
        textAlignVertical: 'bottom'
    },
    labelTextInputCoord: {
        fontSize: 30,
        marginTop: -2,
        color: 'black'
    },
    calc: {
        width: '60%',
        backgroundColor: 'red',
        padding: 11,
        marginTop: 29
    },
    inputLat: {
        borderBottomWidth: 1,
        width: 200
    },

    resultados: {
        width: 220,
        borderWidth: 1,
        padding: 10,
        paddingBottom: 20,
        borderColor: "rgba(0,0,0,0.5)"
    }
});