import React, { Component } from 'react';
import 'whatwg-fetch'
import cookie from 'react-cookies'

import PostCreate from './PostCreate'
import PostInline from './Postinline'

class Posts extends Component {
    constructor(props){
        // allows button to call method and we can grab event from it
        super(props)
        this.togglePostListClass = this.togglePostListClass.bind(this)
        this.handleNewPost = this.handleNewPost.bind(this)
    }
    state = {
        posts: [],
        postsListClass: "card",

    }

  loadPosts() {
      const endpoint = '/api/posts/'
      let thisComp = this
      let lookupOptions = {
          method: "GET",
          headers: {
              'Content-Type': 'application/json'
          }
      }

      fetch(endpoint, lookupOptions)
          .then(function (response) {
              return response.json()
          }).then(function (responseData) {
          console.log(responseData)
              thisComp.setState({
                    posts: responseData
                })
      }).catch(function (error) {
          console.log("error", error)
      })
  }

  handleNewPost(postItemData){
    console.log(postItemData)
    let currentPosts = this.state.posts
    currentPosts.unshift(postItemData) // unshift
    this.setState({
      posts: currentPosts
  })
  }


  togglePostListClass(event){
        event.preventDefault()
        let currentListClass = this.state.postsListClass
        if (currentListClass === ""){
             this.setState({
                 postsListClass: "card",
             })
        } else {
            this.setState({
                postsListClass: "",
            })
        }
  }


  componentDidMount(){
        this.setState({
            posts: [],
            postsListClass: "card",
        })
    this.loadPosts()
  }
  render(){
        const {posts} = this.state
        const {postsListClass} = this.state
        const csrfToken = cookie.load('csrftoken')
    return (
      <div>
        <h1>Hello World</h1>
          <button onClick={this.togglePostListClass}>Toggle Class</button>
          {posts.length > 0 ? posts.map((postItem, index) =>{
              return (
                  <PostInline post={postItem} elClass={postsListClass}/>
              )
          }) : <p>No Posts Found</p>}
          {(csrfToken !== undefined && csrfToken !==null) ?
              <div className='my-5'>
                  <PostCreate newPostItemCreated={this.handleNewPost}/>
              </div>
          : ""}
          {/*<PostInline title='Test Title' />*/}
          {/*title attribute is pulled from Postinline.js*/}
          <div className='my-5'>
              <PostCreate/>
          </div>
      </div>

    );
  }
}

export default Posts;
