import { Component } from "react";
import "./App.css";


//
class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = await fetch('./output[1].json')

    const [ posts, photos ] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index]?.url }
    });

    this.setState({ posts: postsAndPhotos});
  }

  render() {
    const { posts } = this.state;


    return (
      <section className="container">
         <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title}/>
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
               </div>
             </div>
            ))}
          </div>
        </section>
      );
    } 
  }

export default App;
