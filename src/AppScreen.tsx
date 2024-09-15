import {useState } from 'react';
import {Button, StatusBar, StyleSheet, View, Text} from 'react-native';
import {Canvas, Rect, Fill, Circle} from '@shopify/react-native-skia';
import { useAppState } from './AppState';

export function AppScreen() {
  const {render = 0} = useAppState();
  const [show, setShow] = useState(true);

  const handlePress = () => {
    setShow(x=>!x);
  };

  return (
    <View key={render} style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View key={render} style={styles.main}>
        <Text style={styles.text}>RNS Density</Text>
        {show && (
          <Canvas key={render} style={styles.canvas}>
            <Fill color={'rgba(0,0,127,1)'} />
            <Rect key={`rect-${render}`} x={10} y={10} width={210} height={100} color={'rgba(127,0,0,1)'}/>
            <Circle key={`circle-${render}`} cx={10 + 105} cy={10 + 50} r={5} color={'rgba(255,127,127,1)'}/>
          </Canvas>
        )}
      </View>
      <Button title={show ? 'HIDE' : 'SHOW'} onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(16,16,16)',
    gap : 8,
  },
  main: {
    width: 250,
    height: 170,
    backgroundColor: 'rgba(0,127,64,1)',
  },
  canvas: {
    margin: 10,
    width: 230,
    height: 120,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
