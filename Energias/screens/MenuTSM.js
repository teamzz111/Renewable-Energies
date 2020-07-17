import React, {} from 'react';
import { Text, View, Picker, StyleSheet, TouchableNativeFeedback, TextInput, Image,TouchableHighlight, ScrollView, Alert, Dimensions} from 'react-native';
import DatePicker from 'react-native-datepicker';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO    = (width / height) * 50;
const LATITUDE = 4.60971025;
const LONGITUDE = -74.081749;
const LATITUDE_DELTA  = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE           = 0.01;
export default class HomeScreen extends React.Component  {
  
  
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      diasSumados: [0, 31, 59,90,120,151,181,212,242,273,303,334],
      date2: "2019-01-22",
      date3: "12:00",
      languague: "",
      place:  false,
      coord: false,
      latlot: false,
      selected:  false,
      renderOption: true,
      x: "", 
      y: "",
      z: "",
      latitud: "90",
      longitud: "100.18",
      TSV: "",
     region: {
       latitude: LATITUDE,
       longitude: LONGITUDE,
       latitudeDelta: LATITUDE_DELTA,
       longitudeDelta: LONGITUDE_DELTA
     },
     testing:""
    }
  }


  onRegionChange(coordinate, position) {
    console.warn(coordinate);
  }

  renderOptions = () => {
    if(this.state.renderOption){
      return (          
        <View style = {{flex: 1, marginTop: 30, alignItems: 'center'}}>
        <Text style={styles.text}> ¿Cómo te gustaría ingresar este dato? </Text>
            <TouchableNativeFeedback
              onPress = {
                () => this.setState({place: true, renderOption: false})
              }
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.boton}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center'}}>Elegir lugar</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress = {
                () => this.setState({
                  coord: true,
                  renderOption: false
                })
              }
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.boton}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Ingresar coordenadas</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress = {
                () => this.setState({
                  latlot: true,
                  renderOption: false
                })
              }
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.boton}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Ingresar latitud y longitud</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
      );
    }
  }

  renderRefreshButton = () => {
    if(!this.state.renderOption){
      return (<View>
        <TouchableHighlight style = {{width: 30}} onPress={() => this.reset()}>
            <Image source={require('../resources/left-arrow.png')} />
        </TouchableHighlight>
      </View>);
    }
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

  reset = () => {
    this.setState({latlot: false, renderOption: true, coord: false, place: false})
  }

  renderPlace = () => {
    if(this.state.place){
      return(
        <View style = {styles.datepicker}> 
          <Text style={styles.text}> Bien.. Buena decisión, selecciona el lugar </Text>
            <View>
              <Text value = {this.state.testing}></Text>
            </View>
              <MapView
                region = {this.state.region}
                showsUserLocation={true}
                followUserLocation={true}
                style = {styles.map}
                onPress = {
                    value =>
                  this.setState({testing: value})
                }
              />

        </View>);
    } else if(this.state.coord){

      return(
        <View style = {styles.datepicker}> 
          <Text style={styles.text}> Bien.. Buena decisión, ingresa los datos de las coordenadas y latitud, respectivamente </Text>
          <View style = {{flex: 1, flexDirection: "row", marginTop: 20}}>
            <TextInput
              style={styles.inputCoord}
              onChangeText={(text) => this.setState({x: text})}
              value={this.state.x}
              keyboardType = 'numeric'
              />
              <Text style = {styles.labelTextInputCoord}>°</Text>
              <TextInput
              style={styles.inputCoord}
              onChangeText={(text) => this.setState({y: text})}
              value={this.state.y}
              keyboardType = 'numeric'
              />
              <Text style = {styles.labelTextInputCoord}> '</Text>
              <TextInput
              keyboardType = 'numeric'
              style={styles.inputCoord}
              onChangeText={(text) => this.setState({z: text})}
              value={this.state.z}
              />
              <Text style = {styles.labelTextInputCoord}>''</Text>
            
          </View>
          <View style = {{marginTop: 6}}>
            <TextInput
              keyboardType = 'numeric'
              style={styles.inputCoord}
              onChangeText={(text) => this.setState({latitud: text})}
              value={this.state.latitud}
              />
          </View>
          
          <TouchableNativeFeedback
              onPress = {
                () => this.TSV(1)
              }
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.calc}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Calcular</Text>
              </View>
            </TouchableNativeFeedback>
    </View>);
    } else if(this.state.latlot){
      return(
        <View style = {styles.datepicker}> 
          <Text style={styles.text}> Bien.. Buena decisión, ingresa latitud y longitud </Text>
          <View style = {{flex: 1, flexDirection: "column", marginTop: 20}}>
            <TextInput
              style={styles.inputLat}
              onChangeText={(text) => this.setState({latitud: text})}
              value={this.state.latitud}
              keyboardType = 'numeric'
              placeholder = "Latitud"
              />
            
              <TextInput
              style={styles.inputLat}
              onChangeText={(text) => this.setState({longitud: text})}
              value={this.state.longitud}
              keyboardType = 'numeric'
              placeholder = "Longitud"
            
              />
          </View>
          
          <TouchableNativeFeedback
              onPress = {
                () => this.TSV(0)
              }
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.calc}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Calcular</Text>
              </View>
            </TouchableNativeFeedback>
    </View>);
    }
  }

  renderResultado = () => {
    if(this.state.TSV != "" && !this.state.renderOption){

      return (
        <View style = {{flex: 1, alignItems: 'center', marginTop: 20}}>
          <View style = {styles.resultados}>
            <Text style = {styles.text}>
              Resultados
            </Text>
            <Text style = {styles.textResultado}>
              TSV:
              {this.state.TSV}
            </Text>
        </View>
      </View>
    );
  }
  }
  /* Funciones lógicas */

  diaAno = (day, month) => {
    return Number(this.state.diasSumados[month-1]) + Number(day);
  }

  calculo_D = (dia) => {
      return ((dia - 81) * 360) / 365;
  }

  minAHora = (TSV) =>{
    let R, V, S;
    let t;
    R= parseInt(TSV / 60);
    V=60*R;
    S=parseInt(TSV - V);

    if (S<10)
        t=R+":0"+S;
    else
        t=R+":"+S;//Son las R:S
    return t;
  }

  horaAMin = (hora, minuto) =>{
    return hora * 60 + minuto;
  } 
  // Añadir UTC 
  correccionL = (lat, lon) => {
    return  4 * (lat - lon);
  }

  toRadians = (angle) =>{
    return (Math.PI * angle) / 180;
  }

 /* EcuacionTiempo = (D) =>{
    return (9.87 * Math.sin(this.toRadians(2 * D))) - (7.57 * Math.cos(this.toRadians(D))) - (1.5 * Math.sin(this.toRadians(D)));
  }*/

  calcTSV = (CL, Et, Hora) =>{
    return Hora + CL + Et;
  }
  tsv(T, Ls, Le, N) {
    var d = ((N - 81) * 360) / 365
    var et = 9.87 * Math.sin((2 * d) * (Math.PI / 180)) - 7.57 * Math.cos(d * (Math.PI / 180)) - 1.5 * Math.sin(d * (Math.PI / 180))
    return T + 4 * (Ls - Le) + et;

  }

  calcLs = (Ls) =>{
    let t = Math.round(Ls / 15);
    let positive = [0, 15,30,45,60,75,90,105,120,135,150,165,180];
    return positive[Math.abs(t)];
  }
  TSV = (option) =>{
    if(this.state.date2 == "" || this.state.date3 == ""){
        Alert.alert(
          'Atención',
          'Campos de fecha y hora están vacíos',
          [
            {
              text: 'Entendido',
              onPress: () => console.log('OK Pressed')
            },
          ], {
            cancelable: false
          },
        );
    } else {
      //Basic calc 

      let splited = this.state.date2.split("-");
      let dia = this.diaAno(splited[2], splited[1]);
      splited = this.state.date3.split(":");
      let hora = Number(splited[0]);
      let minutos = Number(splited[1]);


      switch (option) {
        case 0:{
          if(this.state.latitud == "" || this.state.longitud == ""){
            Alert.alert(
              'Atención',
              'Campos de latitud y longitud están vacíos',
              [{
                text: 'Entendido',
                onPress: () => console.log('OK Pressed')
              }, ], {
                cancelable: false
              },
              );
            } else{              
              let latitud = Number(this.state.latitud);
              let longitud = Number(this.state.longitud);

               this.setState({
                 TSV: this.minAHora(this.tsv(this.horaAMin(hora, minutos), longitud, this.calcLs(longitud), this.EcuacionTiempo(this.calculo_D(dia))))
               })
              /* this.setState({
                 TSV: this.minAHora(this.calcTSV(this.correccionL(latitud, longitud), this.EcuacionTiempo(this.calculo_D(dia)), this.horaAMin(hora, minutos)))
               });*/
            }
            break;
        }
        case 1:{
          if (this.state.x == "" || this.state.y == "" || this.state.z == "" || this.state.latitud == "") {
            Alert.alert(
              'Atención',
              'Hay campos vacíos en las coordenadas',
              [{
                text: 'Entendido',
                onPress: () => console.log('OK Pressed')
              }, ], {
                cancelable: false
              },
              );
            } else {
              let t1 = Number(this.state.x);
              let t2 = Number(this.state.y);
              let t3 = Number(this.state.z);
              let longitud = (t1 + (t2 / 60) + (t3 / 3600)).toFixed(2);
              let latitud = Number(this.state.latitud);

              this.setState({TSV: this.minAHora(this.calcTSV(this.correccionL(latitud, longitud), this.EcuacionTiempo(this.calculo_D(dia)), this.horaAMin(hora, minutos)))});
            }
            break;
        } 
        default:
        break;
      }
    } 
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {this.calendarComponent()}
        {this.renderRefreshButton()}
        {this.renderOptions()}
        {this.renderPlace()}
        {this.renderResultado()}
        
        <View style = {styles.datepicker}>
          <Text style = {styles.text}></Text>
        </View>


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
  datepicker:{
    flex: 1,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  text:{
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: "black"
  },
  textResultado:{
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    color: "black"
  },
  boton:{
    width: 220, height: 46, backgroundColor: 'red', marginTop: 12, padding: 10
  },
  inputCoord:{
    height: 42, width: 80, padding: 10, borderColor: 'black', borderWidth: 0, borderBottomWidth: 1, fontSize: 22, textAlign: 'center', textAlignVertical: 'bottom'
  },
  labelTextInputCoord:{
    fontSize: 30, marginTop: -2, color: 'black'
  },
  calc:{
    width:'60%',
    backgroundColor: 'red',
    padding: 11,
    marginTop: 29
  },
  inputLat:{
    borderBottomWidth: 1,
    width: 200
  },

  resultados:{
    width: 220,
    borderWidth: 1,
    padding: 10,
    paddingBottom: 20,
    borderColor: "rgba(0,0,0,0.5)"
  },
   container2: {
       height: 400,
       width: 400,
       justifyContent: 'flex-end',
       alignItems: 'center',
     },
     map: {
       width: width,
       height: 300
     },
});