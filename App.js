import React from 'react';
import { Text, View, ScrollView, FlatList, YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { EventList, EventForm } from './Components';
import styles from './App.styles'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated'
]);

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Upcoming Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'New Event'
    })
  }
});