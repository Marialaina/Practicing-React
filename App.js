import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "marialaina",
      posts: [
        {
        id: 1829,
        likes: "dogs",
        text: "My first!"
        },
        {
          id: 9129,
          likes: "cats",
          text: "the second",
        },
        {
          id: 29838,
          likes: "tigers",
          text: "the third!"
        }
      ]
    }
  }

  render(){
    return (
      <div className="app">
        <h1> Hello {this.state.name}!</h1>
        {this.state.posts.map(post => (
          <div>
          <p> {post.text} </p>
          <p> {post.likes} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
