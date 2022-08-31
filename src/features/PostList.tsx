import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts } from '../actions';
import { store } from '../app/store';
import UserHeader from './UserHeader';

interface posts {
  id: number;
  title: string;
  body: string;
  userId:number;
}

class PostList extends React.Component<any, any> {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map((post: posts) => {
      return (
        <>
          <div key={post.id}>
            <div className='content'>
              <div className='description'>
                <h2> {post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
            
           < UserHeader userId={post.userId}/>
          </div>
        </>
      );
    });
  }
  render(): React.ReactNode {
    return <div> {this.renderList()}</div>;
  }
}
const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
