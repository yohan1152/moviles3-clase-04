import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Hola Yohan")};
  const [name,setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/iniciar-sesion.png')}/>
      <TextInput style={styles.textInput} placeholder="Usuario" onChangeText={(text)=>setName(text)}/>
      <TextInput style={styles.textInput} placeholder="Clave"/>
      <Button style={styles.btnIngresar} title="Ingresar" onPress={saludo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width:150,
    height:150
  },
  textInput: {
    borderColor:'#1A68F0',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width:350,
    marginTop: 20,
    fontSize: 18,
    color: '#8291AD', 
  },
  btnIngresar: {
    marginTop: 20,
    borderRadius: 20,
    width: 20,
    height: 15
  }
});
