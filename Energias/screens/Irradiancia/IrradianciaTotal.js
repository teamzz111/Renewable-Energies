import React, {} from 'react';
import { Text, View, Picker, StyleSheet, TouchableNativeFeedback, TextInput, Image,TouchableHighlight, ScrollView, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'


export default class HomeScreen extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      diasSumados: [0, 31, 59,90,120,151,181,212,242,273,303,334],
      date2: "21-02-2019",
      date3: "14:00",
      languague: "",
      place:  false,
      coord: false,
      latlot: false,
      selected:  false,
      renderOption: true,
      x: "", 
      y: "",
      z: "",
      latitud: "42.36",
      longitud: "71.06",
      TSV: "",
      elevacion: "0.043",
      inclinacion: "60",
      irraTotal: "",
      material: "0.2",
      IS: "",
      ID: "",
      IR: "",
      data: ""
    }
  }


  /* Tiempo Solar Verdadero*/

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
            <Image source={require('../../resources/left-arrow.png')} />
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
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Bogotá" value="java" />
            <Picker.Item label="Santiago de Chile" value="js" />
          </Picker>
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
          

    </View>);
    }
  }

  renderResultado = () => {
    if(this.state.TSV != ""){

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
            <Text style = {styles.textResultado}>
              Irradiación total:
              {this.state.irraTotal}
            </Text>
            <Text style = {styles.textResultado}>
              Irradiación incidente:
              {this.state.IS}
            </Text>
            <Text style = {styles.textResultado}>
              Irradiación directa:
              {this.state.ID}
            </Text>
            <Text style = {styles.textResultado}>
              Irradiación reflejada:
              {this.state.IR}
            </Text>
            
            <Text style = {styles.textResultado}>
              Material:
              {this.state.material}
            </Text>

            <Text style = {styles.textResultado}>
              Inlclinacion:
              {this.state.inclinacion}
            </Text>
        </View>
      </View>
    );
  }
  }

/* IRRADIANCIA */

  irradiancia = () => {
      return(
        <View style = {styles.datepicker}>{/*
          <Text style = {styles.text}>¿Está enfrentado a?</Text>
            <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
                }>
                <Picker.Item label="Norte" value="1" />
                <Picker.Item label="Sur" value="2" />
              </Picker>*/}
            <Text style = {styles.text}>¿Tiene una elevación de (Kilometros)?</Text>
            <TextInput
              style={styles.inputLat}
              onChangeText={(text) => this.setState({elevacion: text})}
              value={this.state.elevacion}
              keyboardType = 'numeric'
              placeholder = "Ingrese una elevación"
              />
              <Text style = {styles.text}>¿De qué está rodeado?</Text>
                <Picker
                selectedValue={this.state.material}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({ material: itemValue })
                }>
                <Picker.Item label="Césped, tierra" value="0.2" />
                <Picker.Item label="Nieve" value="0.8" />
                <Picker.Item label="Concreto" value="0.3" />
                <Picker.Item label="Grava" value="0.15" />
            </Picker>
            <Text style = {styles.text}>Inclinación del sistema</Text>
             <View style = {{flex: 1, flexDirection: "row", marginTop: 20}}>
                <TextInput
                style={styles.inputCoord}
                onChangeText={(text) => this.setState({inclinacion: text})}
                value={this.state.inclinacion}
                keyboardType = 'numeric'
                />
                <Text style = {styles.labelTextInputCoord}>°</Text>
            </View>

            <TouchableNativeFeedback
              onPress = {
                () => this.TSV()
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
  
  /* Funciones lógicas */
  /* Tiempo Solar Verdadero */

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
  //UTC no olvidar en vez de latitud
  correccionL = (lat, lon) => {
    return CL = 4 * (60 - lon);
  }

  toRadians = (angle) =>{
    return (Math.PI * angle) / 180;
  }

  toGrad = (radians) =>{
    return (radians) * 180 / Math.PI;
  }

  EcuacionTiempo = (D) =>{
    return (9.87 * Math.sin(this.toRadians(2 * D))) - (7.57 * Math.cos(this.toRadians(D))) - (1.5 * Math.sin(this.toRadians(D)));
  }

  calcTSV = (CL, Et, Hora) =>{
    return Hora + CL + Et;
  }
  Declinacion = (dia) =>
  {
    return Number(23.45 * Math.sin(this.toRadians((360 / 365) * (284 + dia))));
  }

IDN(D,Z,SENB)
  {
    var P= -Math.exp(-0,1184*Z)
    //console.warn(P)
    //console.warn(this.A(D) * Math.exp(P * (this.B(D) / SENB)))
    return this.A(D)*Math.exp(P*(this.B(D)/SENB))

  }
  SENB(TSV, N, L) {
    let dec = 23.45 * Math.sin(((360 * (284 + N)) / 365) * Math.PI / 180);
    let h = (TSV - 720) / 4;
    return Math.cos(L * Math.PI / 180) * Math.cos(h * Math.PI / 180) * Math.cos(dec * Math.PI / 180) + Math.sin(L * Math.PI / 180) * Math.sin(dec * Math.PI / 180)
  }
  //IRRADIACIÓN DIRECTA
  ID(IDN, SENB, B2)
  {
    // ¿pOR QUÉ sacas el arcoseno de 43, no existe.
    //console.warn(SENB * Math.cos(B2 * Math.PI / 180) + Math.cos((Math.asin(SENB)) * Math.PI / 180) * Math.sin(B2 * Math.PI / 180) * Math.cos(((Math.asin(SENB)) - B2) * Math.PI / 180));
    return SENB * Math.cos(B2 * Math.PI / 180) + Math.cos((Math.asin(SENB)) * Math.PI / 180) * Math.sin(B2 * Math.PI / 180) * Math.cos(((Math.asin(SENB)) - B2) * Math.PI / 180)
  }
  //Incidente, B2 es inclinación
  IS(D, IDN, B2)
  {
    return IDN * this.C(D)*((1 + Math.cos(B2 * Math.PI / 180)) / 2)
  }

  A = (dia) => {
    if (dia >= 5 && dia < 36)
      return 1230;

    if (dia >= 36 && dia < 67)
      return 1215;

    if (dia >= 67 && dia < 98)
      return 1186;

    if (dia >= 98 && dia < 129)
      return 1136;

    if (dia >= 129 && dia < 160)
      return 1104;

    if (dia >= 160 && dia < 191)
      return 1088;

    if (dia >= 191 && dia < 222)
      return 1085;

    if (dia >= 222 && dia < 253)
      return 1107;

    if (dia >= 253 && dia < 284)
      return 1152;

    if (dia >= 284 && dia < 315)
      return 1193;

    if (dia >= 315 && dia < 346)
      return 1221;

    if (dia >= 377 || dia < 5)
      return 1234;
  }

  B = (dia) => {

    if (dia >= 5 && dia < 36)
      return 0.142;

    if (dia >= 36 && dia < 67)
      return 0.144;

    if (dia >= 67 && dia < 98)
      return 0.156;

    if (dia >= 98 && dia < 129)
      return 0.180;

    if (dia >= 129 && dia < 160)
      return 0.196;

    if (dia >= 160 && dia < 191)
      return 0.205;

    if (dia >= 191 && dia < 222)
      return 0.207;

    if (dia >= 222 && dia < 253)
      return 0.201;

    if (dia >= 253 && dia < 284)
      return 0.177;

    if (dia >= 284 && dia < 315)
      return 0.160;

    if (dia >= 315 && dia < 346)
      return 0.149;

    if (dia >= 377 || dia < 5)
      return 0.142;
  }

  C = (dia) => {
    if (dia >= 5 && dia < 36)
      return 0.058;

    if (dia >= 36 && dia < 67)
      return 0.060;

    if (dia >= 67 && dia < 98)
      return 0.071;

    if (dia >= 98 && dia < 129)
      return 0.097;

    if (dia >= 129 && dia < 160)
      return 0.121;

    if (dia >= 160 && dia < 191)
      return 0.134;

    if (dia >= 191 && dia < 222)
      return 0.136;

    if (dia >= 222 && dia < 253)
      return 0.122;

    if (dia >= 253 && dia < 284)
      return 0.092;

    if (dia >= 284 && dia < 315)
      return 0.073;

    if (dia >= 315 && dia < 346)
      return 0.063;

    if (dia >= 377 || dia < 5)
      return 0.057;
  }
  //Irrafiación reflejada.
 IR(P, D, SENB, B2, IDN)
 {
    return IDN * P * (this.C(D) + SENB) * ((1 + Math.cos(B2 * Math.PI / 180)) / 2);
 }
  h = (latitud, longitud, dia, hora, minutos) => {
     return Number(((this.calcTSV(this.correccionL(latitud, longitud), this.EcuacionTiempo(this.calculo_D(dia)), this.horaAMin(hora, minutos))) - 720) / 4);
  }
  
  TSV = () =>{
    let option;
    if(this.state.place){
      option = 2;
    } else if(this.state.coord){
      option = 1;
    } else if(this.state.latlot){
      option = 0;
    }

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
                            
              this.setState({TSV: this.minAHora(this.calcTSV(this.correccionL(latitud, longitud), this.EcuacionTiempo(this.calculo_D(dia)), this.horaAMin(hora, minutos)))});
             
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
              this.setState({longitud: longitud});
              this.setState({TSV: this.minAHora(this.calcTSV(this.correccionL(latitud, longitud), this.EcuacionTiempo(this.calculo_D(dia)), this.horaAMin(hora, minutos)))});
            }
            break;
        } 
        
        default:
        break;
      }
      this.setState({IS: this.IS(Number(this.state.elevacion), Number(this.state.latitud), this.state.longitud, Number(minutos), Number(hora), dia, Number(this.state.inclinacion))});
      fetch("https://maps.googleapis.com/maps/api/elevation/json?locations=" + this.state.latitud + "," + this.state.longitud + "&key=AIzaSyBFjJcSQF4jyIe4PKW9b6SItv-wDoCP2wU")
        .then((response) => response.json())
        .then((responseJson) => {
          this.data = responseJson.results[0].elevation
        }).catch((error) => {
          console.error(error); 
        });
      this.setState({
        IR: this.IR(this.state.material, dia, this.SENB(this.state.TSV, dia, this.state.latitud), this.state.inclinacion, this.IDN(dia, this.data, this.SENB(this.state.TSV, dia, this.state.latitud)))
      });
      this.setState({ID: this.ID(Number(this.state.elevacion), Number(this.state.latitud), Number(this.state.longitud), minutos, hora, dia, this.Declinacion(dia), this.h(Number(this.state.latitud), Number(this.state.longitud), dia, hora, minutos) )})
      this.setState({irraTotal: (Number(this.state.IS) + Number(this.state.ID) + Number(this.state.IR)) });

    } 
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {this.calendarComponent()}
        {this.renderRefreshButton()}
        {this.renderOptions()}
        {this.renderPlace()}
        {this.irradiancia()}
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
  }
});