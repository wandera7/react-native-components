import React, {useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
const MyFlatList = () => {
  const [list, setList] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 27'},
    {name: 'Item 78'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, {name: 'Item 567'}]);
    setRefreshing(false);
  };
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={list}
      renderItem={({item}) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  );
};

export default MyFlatList;
