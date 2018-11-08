
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

//import mockData from '../../MockData' Not needed now that we have an api

import { getEvents } from '../../api';

import EventCard from '../EventCard';

import styles from './styles'

class DisabledEvents extends Component {
  state = {
    events: [],
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(event => ({
          ...event,
          timer: Date.now(),
        })),
      });
    }, 1000);

    this.props.navigation.addListener('didFocus', () => {
      getEvents().then(events => this.setState({ events }))
    });
  }

  _handleAddEvent = () => {
    this.props.navigation.navigate('form');
  }

  _handleCheckDisabledEvent = () => {
    this.props.navigation.navigate('disabled');
  }

  render() {
    return [
      <FlatList
        key="disabledFlatlist"
        data={this.state.events}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            showIndicator={'disabled'}
            event={item}
          />
        )}
      />
    ];
  }
}

export default DisabledEvents;