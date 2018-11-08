import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput /* Allows touch behaviour to make it interactive */ } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'

import { formatDateTime, postEvent } from '../../api';

import styles from './styles';

class EventForm extends Component {
    state = {
        title: null,
        date: ''
    }

    _handleAddPress = () => {
        const { title,  date } = this.state;

        postEvent({ title, date })
            .then(() => this.props.navigation.goBack());
    }

    _handleChangeTitle = (title) => {
        this.setState({ title });
    }

    _handlePressDate = () => {
        this.setState({ showDatePicker: true })
    }

    _handleDatePicked = (date) => {
        this.setState({ date });

        this._handleDatePickerHide();
    }

    _handleDatePickerHide = () => {
        this.setState({ showDatePicker: false })
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Event Title"
                        spellCheck={false}
                        onChangeText={this._handleChangeTitle}
                        value={this.state.text}
                    />
                    <TextInput
                        style={[styles.textInput, styles.borderTop]}
                        placeholder="Event Date"
                        spellCheck={false}
                        value={formatDateTime(this.state.date.toString())}
                        editable={!this.state.showDatePicker}
                        onFocus={this._handlePressDate}
                    />
                    <DateTimePicker 
                        isVisible={this.state.showDatePicker}
                        mode='datetime'
                        onConfirm={this._handleDatePicked}
                        onCancel={this._handleDatePickerHide}
                    />
                </View>
                <TouchableHighlight
                    onPress = {this._handleAddPress}
                    style={styles.addButton}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm