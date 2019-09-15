import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

interface PostsListProps {
  componentId: string;
}

class AddPost extends Component<PostsListProps> {

  constructor(props: PostsListProps) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  static options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'save',
            text: 'save'
          }
        ],
        leftButtons: [
          {
            id: 'cancel',
            text: 'cancel'
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}: {buttonId: string}) {
    if (buttonId === 'cancel') {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === 'save') {
      console.log('#DROR# : buttonId', buttonId)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddPost</Text>
      </View>
    );
  }
}

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd5c8',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});