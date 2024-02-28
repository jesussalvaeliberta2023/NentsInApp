import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../style/styleSheet';

export default function componentBody() {

  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }

  return (

      <View style={styles.bodyContainer}>
        <Text style={styles.myName} >Faça seu login pra entrar</Text>

        <TextInput 
          placeholder='Nome'
          style={styles.inputs}
          inputMode='text'
        />

        <TextInput 
          placeholder='Senha'
          keyboardType='numeric'
          secureTextEntry={true}
          style={styles.inputs}
        />

        <Button
          title='Entrar'
          color= 'blue'
          onPress={pressButton}
        />
      </View>
    
  );
}
