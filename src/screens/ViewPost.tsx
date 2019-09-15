import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ViewPostProps {
  text: string;
}

class ViewPost extends Component<ViewPostProps> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`ViewPost ${this.props.text}`}</Text>
      </View>
    );
  }
}

export default ViewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffda',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});