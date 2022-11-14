import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';

function MyButton() {
  const [name, setName] = useState('');
  //const [showName, setShowName] = useState(false);
  //const [theName, setTheName] = useState('');
  const [namesList, setNameList] = useState([]);
  const handlePress = () => {
    //setTheName(name);
    setNameList([...namesList, name]);
    setName('');
    //setShowName(true);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Button title="submit" onPress={handlePress} />
      <Text style={styles.text}>
        Our names are:
        {namesList.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={namesList}
            renderItem={({item}) => <Text>{item}</Text>}
          />
        ) : null}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
export default MyButton;
