import React, {useState} from 'react';
import {SectionList, Text, View, RefreshControl} from 'react-native';

const MySectionList = () => {
  const [data, setData] = useState([
    {
      title: 'Title 1 ',
      data: ['Item 1-1', 'Item 1-2 '],
    },
  ]);
  // const DATA = [
  //   {
  //     title: 'Title 1',
  //     data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  //   },
  //   {
  //     title: 'Title 2',
  //     data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  //   },
  //   {
  //     title: 'Title 3',
  //     data: ['Item 3-1'],
  //   },
  //   {
  //     title: 'Title 4',
  //     data: ['Item 4-1', 'Item 4-2'],
  //   },
  // ];
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const num = data.length + 1;
    setData([
      ...data,
      {
        title: 'Title' + num,
        data: ['Item' + num + '-1', 'Item' + num + '-2'],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={data}
      renderItem={({item}) => <Text>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View>
          <Text>{section.title}</Text>
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
export default MySectionList;
