import React, {} from 'react';
import { Text, View, Picker, StyleSheet, TouchableNativeFeedback} from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class HomeScreen extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      date2: "",
      date3: "",
      months:["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"] ,
      languague: ""
      
  }
}
  
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.text}> Selecciona la fecha </Text>
        <View style = {styles.datepicker}>
        
      <DatePicker
        style={{width: 200}}
        date={this.state.date2}
        mode="date"
        placeholder="Selecciona una fecha"
        format="YYYY-MM-DD"
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
          <Text style={styles.text}> ¿Cómo te gustaría ingresar este dato? </Text>
          <View>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={{ width: 220, height: 30, backgroundColor: 'red', marginTop: 6 }}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center'}}>Elegir lugar</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={{ width: 220, height: 30, backgroundColor: 'red', marginTop: 6 }}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Ingresar coordenadas</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={{ width: 220, height: 30, backgroundColor: 'red', marginTop: 6 }}>
                <Text style={{ margin: 3, color: "white", textAlign: 'center' }}>Ingresar latitud y longitud</Text>
              </View>
            </TouchableNativeFeedback>

          </View>
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
          </View>
          <View style = {styles.datepicker}>
              <Text style = {styles.text}>Ok. Ingresa los datos</Text>
              <View>

              </View>
           </View>
          </View>
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
  datepicker:{
    flex: 1,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  text:{
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  }
});