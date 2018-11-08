
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

import mockData from '../../MockData'

import EventCard from '../EventCard';

import styles from './styles'

class EventList extends Component {
  state = {
    events: [],
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const events = mockData.events.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    events.sort((a, b) => { return a.date - b.date }) // Descending order
    this.setState({ events });
  }

  _handleAddEvent = () => {
    this.props.navigation.navigate('form');
  }

  render() {
    return [
      <FlatList
        key="flatlist"
        data={this.state.events}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={({ item, separators }) => (
          <EventCard
            event={item}
          />
        )}
      />,
      <ActionButton
          key="ActionB"
          onPress={this._handleAddEvent}
          buttonColor="rgba(231, 76, 60, 1)"
      />
    ];
  }
}

export default EventList;