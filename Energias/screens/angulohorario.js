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
import DatePicker from 'react-native-datepicker';




export default class HomeScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        latitud: "",
        longitud:"",
        result:"",
        date: new Date(),
        diasSumados: [0, 31, 59,90,120,151,181,212,242,273,303,334],
        date2: "",
        date3: "",
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
              Ángulo horario:
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
                () => this.calc()
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
  diaAno = (day, month) => {
      return Number(this.state.diasSumados[month - 1]) + Number(day);
  }

  calculo_D = (dia) => {
      return ((dia - 81) * 360) / 365;
  }

  minAHora = (TSV) => {
      let R, V, S;
      let t;
      R = parseInt(TSV / 60);
      V = 60 * R;
      S = parseInt(TSV - V);

      if (S < 10)
          t = R + ":0" + S;
      else
          t = R + ":" + S; //Son las R:S
      return t;
  }

  horaAMin = (hora, minuto) => {
      return hora * 60 + minuto;
  }

  correccionL = (lat, lon) => {
      return CL = 4 * (60 - lon);
  }

  toRadians = (angle) => {
      return (Math.PI * angle) / 180;
  }

  toGrad = (radians) => {
      return (radians) * 180 / Math.PI;
  }

  EcuacionTiempo = (D) => {
      return (9.87 * Math.sin(this.toRadians(2 * D))) - (7.57 * Math.cos(this.toRadians(D))) - (1.5 * Math.sin(this.toRadians(D)));
  }

  calcTSV = (CL, Et, Hora) => {
      return Hora + CL + Et;
  }
  calc = () =>{
    let splited = this.state.date2.split("-");
    let dia = this.diaAno(splited[2], splited[1]);
    splited = this.state.date3.split(":");
    let hora = Number(splited[0]);
    let minutos = Number(splited[1]);
    this.setState({result: this.h(Number(this.state.latitud), Number(this.state.longitud), dia, hora, minutos)});
  }
  calendarComponent = () => {
    return (
      <View style = {styles.datepicker}>     
        <DatePicker
          style={{width: 200}}
          date={this.state.date2}
          mode="date" 
          placeholder="Selecciona una fecha"
          format="YYYY-MM-DD"
          minDate="2019-01-01"
          maxDate="2019-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date2: date})}}
        />
        <DatePicker
          style={{width: 200, marginTop: 10}}
          date={this.state.date3}
          mode = "time"
          placeholder="Selecciona la hora"
          format = "HH:mm"
          minDate="2019-05-01"
          maxDate="2019-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date3: date})}}
        />
      </View>);
  }

  //UTC
  correccionL = (lat, lon) => {
      let CL = 4 * (Number(lat) - Number(lon));
      return CL;
  }
    h = (latitud, longitud, dia, hora, minutos) => {
    let t = Number(((this.calcTSV(this.correccionL(latitud, longitud), this.EcuacionTiempo(this.calculo_D(dia)), this.horaAMin(hora, minutos))) - 720) / 4);
     return  t;
  }
    render() {
        return (
        <ScrollView style={styles.container}>
            {this.calendarComponent()}
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