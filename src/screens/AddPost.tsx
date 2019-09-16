import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {addPost} from '../posts.actions';

interface PostsListProps {
  componentId: string;
}

interface PostsListState {
  title: string;
  text: string;
}

class AddPost extends Component<PostsListProps, PostsListState> {

  constructor(props: PostsListProps) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      title: '',
      text: ''
    }
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
      this.onSavePress()
    }
  }

  onChangeTitle = (title: string) => {
    this.setState({title});
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'save',
            text: 'save',
            enabled: !!title
          }
        ],
      }
    });
  }

  onChangeText = text => {
    this.setState({text})
  }

  onSavePress = () => {
    const {title, text} = this.state;
    Navigation.dismissModal(this.props.componentId);
    const randomImageNumber = Math.floor((Math.random() * 500) + 1);
    addPost({
      title,
      text,
      img: 'https://picsum.photos/200/200/?image=${randomImageNumber}'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddPost</Text>
        <TextInput
          onChangeText={this.onChangeTitle}
          placeholder={'Add the post title'}
          value={this.state.title}
        />
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={'Add the post text'}
          value={this.state.text}
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