import { StatusBar } from 'expo-status-bar';
import { View , ImageBackground } from 'react-native';
import styles from './src/style/styleSheet';
import ComponentHeader from './src/components/componentHeader';
import ComponentFooter from './src/components/componentFooter';
import ComponentBody from './src/components/componentBody';

export default function App() {

  return (

    <ImageBackground 
      source={require('./src/assets/images/Fundo.png')}
      style={styles.fundo}>
    
      <View style={styles.container}>
        <ComponentHeader/>
        <ComponentBody/>
        <ComponentFooter/>
      </View>

    </ImageBackground>

  );
}

