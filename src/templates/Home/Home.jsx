import { Component } from "react";

import "./Home.css";

import { loadPosts } from '../../utils/load-posts'
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

//
export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts } = this.state;


    return (
      <section className="container">
          <Posts posts={posts} />
          <Button 
            text="Load More Posts"
            onClick={this.loadMorePosts}
          />
        </section>
      );
    } 
  };
