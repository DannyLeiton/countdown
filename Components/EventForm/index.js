import React, { Component } from 'react';
import { View, Text, TouchableHighlight /* Allows touch behaviour to make it interactive */ } from 'react-native';

class EventForm extends Component {
    _handleAddPress = () => {
        // TODO
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress = {this._handleAddPress}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm