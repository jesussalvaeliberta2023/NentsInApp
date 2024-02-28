import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from '../style/styleSheet';

export default function componentHeader() {

  return (

    <View style={styles.headerContainer}>
      <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode='cover'
      />

      <Text style={styles.welcome} >ʕ•́ᴥ•̀ʔっ</Text>
    </View>

  );
}