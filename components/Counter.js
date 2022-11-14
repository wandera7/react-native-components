import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
const App = () => {
  const [num, setNum] = useState(0);
  const [clicked, setClicked] = useState(0);
  function increase() {
    setNum(prevValue => prevValue + 5);
    setClicked(prev => prev + 1);
  }

  return (
    <View style={styles.body}>
      <Text> JJ WANDERA</Text>
      <Text> {num} </Text>
      <Text> I have been clicked {clicked} times </Text>
      <Button title="+" onPress={increase} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
