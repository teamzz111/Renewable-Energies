import React, {} from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';


export default class Declinacion extends React.Component  {
  
    render(){
        return(
            <ScrollView>

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
});


