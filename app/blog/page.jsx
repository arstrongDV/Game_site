import React from 'react';
import style from './style.module.css';
import { fetchPosts } from '../store/posts'
import BlogList from './BlogList'

const Blog = async () => {
  const posts = await fetchPosts();
  return (
    <div className={style.MainBlock}>
      <div className={style.MainPageBlock}>
        <BlogList posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
