import moment from 'moment';
import Expo from 'expo';
import uuid from 'uuid';

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(':').shift().concat(':3000')
  : 'bretico.com'; 

const url = `http://${api}`;

export function getEvents() {
  return fetch(`${url}/events`)
    .then(response => response.json())
    .then(events => { 
      const newEvents = events.map(event => ({ ...event, date: new Date(event.date) }));
      
      return newEvents.sort((a, b) => { return a.date - b.date }) // Descending order
    })
    .catch(error => console.error(`An error ocurred while fetching the events: ${error}`));
}

export function postEvent({ title, date }) {
  return fetch(`${url}/events`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      date,
      id: uuid()
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .catch(error => console.error(`An error ocurred while post the event: ${error, title, date}`));
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('H A on D MMM YYYY');
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
}