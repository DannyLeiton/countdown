import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';

import styles from './App.styles'
import { EventList } from './Components';

export default class App extends React.Component {
  render() {
    //debugger;
    return (
      <ScrollView>
        <View style={styles.container}>
          <EventList />
          <Text>Some Text</Text>
          <FlatList
            key="otherFL"
            data={[{ name: 'Trying' }, { name: 'Flatlist2' }, { name: 'Component' }]}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={item => item.name}
        />
        </View>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
        <Text>Some Text</Text>
      </ScrollView>
    );
  }
}