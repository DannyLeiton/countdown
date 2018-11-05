import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { EventList, EventForm } from './Components';
import styles from './App.styles'

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Upcoming Events'
    })
  }
});