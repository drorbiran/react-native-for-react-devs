import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
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
            text: 'save',
            enabled: false
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
      Navigation.dismissModal(this.props.componentId);
    }
  }

  onChangeText = (text: string) => {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'save',
            text: 'save',
            enabled: !!text
          }
        ],
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddPost</Text>
        <TextInput
          onChangeText={text => this.onChangeText(text)}
          placeholder={'Add the post title'}
        />
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