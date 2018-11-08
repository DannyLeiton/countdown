import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { formatDate, getCountdownParts, disableEvent } from '../../api';
import styles from './styles'


export default function EventCard({ event, showIndicator }) {
  const {
    days,
    hours,
    minutes,
    seconds,
  } = getCountdownParts(event.date);

  //if(showIndicator = 'disabled') event.enabled = !event.enabled;

  _handleDisablePress = () => {
    disableEvent({ ...event })
        .then(() => {});
  }

  return (
    event.enabled &&
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.title}>{event.title}</Text>
        <TouchableHighlight
          style={styles.disableActionButton}
          onPress = {this._handleDisablePress}
        >
          <Text style={styles.disableActionText}>Disable</Text>
        </TouchableHighlight>
      </View>

      <View
        style={styles.counterContainer}
      >
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{days}</Text>
          <Text style={styles.counterLabel}>DAYS</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{hours}</Text>
          <Text style={styles.counterLabel}>HOURS</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{minutes}</Text>
          <Text style={styles.counterLabel}>MINUTES</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{seconds}</Text>
          <Text style={styles.counterLabel}>SECONDS</Text>
        </View>
      </View>
    </View>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    enabled: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
