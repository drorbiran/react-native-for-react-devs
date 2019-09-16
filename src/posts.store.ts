import * as remx from 'remx';

const initialState = {
  posts: []
  // "posts": [
  //   {
  //     "id": 1,
  //     "title": "Post 1",
  //     "text": "Post 1 text",
  //     "img": "https://picsum.photos/200/200/?image=1"
  //   },
  //   {
  //     "id": 2,
  //     "text": "Post 2",
  //     "author": "Post 2 text",
  //     "img": "https://picsum.photos/200/200/?image=2"
  //   }
  // ]
};

// takes a plain object and makes it observable
// Any change to the state will trigger a re-render of any connected react components effected by the change
const state = remx.state(initialState);


const getters = remx.getters({
    // All functions that will return parts of the state should be wrapped within the getters function.
    // Remx has an automatic caching mechanism for getters to prevent unnecessary renders.
  getPosts(){
    return state.posts;
  }
});

const setters = remx.setters({
    // All functions that will change parts of the state should be wrapped within the setters function
  setPosts(posts: any){
    state.posts = posts;
  },

  addPost(post) {
    state.posts = [...state.posts, post];
  }
});

export const postsStore = {
  ...getters,
  ...setters
};