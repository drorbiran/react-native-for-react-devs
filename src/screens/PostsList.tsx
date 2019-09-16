import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {fetchPosts} from '../posts.actions';

interface PostsListProps {
  componentId: string;
  posts: any;
  fetchPosts: any;
}

class PostsList extends Component<PostsListProps> {

  constructor(props: PostsListProps){
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  static options() {
    return {
      topBar: {
        title: {
          text: 'Posts List'
        },
        rightButtons: [
          {
            id: 'addButton',
            text: 'Add'
          }
        ],
      }
    };
  }

  navigationButtonPressed({ buttonId }: {buttonId: string}) {
    if(buttonId === 'addButton'){
      Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'AddPost',
              passProps: {
                text: 'stack with one child'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Add Post'
                  }
                }
              }
            }
          }]
        }
      });
    }
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ViewPost',
        passProps: {
          text: 'some text'
        },
        options: {
          topBar: {
            title: {
              text: 'View Post Title'
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.pushViewPostScreen}>PostsList</Text>
        <Text>{JSON.stringify(this.props.posts)}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }
});