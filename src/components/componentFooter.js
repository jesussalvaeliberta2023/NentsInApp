import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../style/styleSheet';

export default function componentFooter() {

  return (

      <View style={styles.footerContainer}>
        <Text style={styles.copyright} >© Wellington Oliveira - 2024</Text>
      </View>
    
  );
}
