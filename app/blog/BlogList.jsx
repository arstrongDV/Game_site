'use client';

import React from 'react';
import style from './style.module.css';
import { useRouter } from 'next/navigation';

const BlogList = ({ posts }) => {
  const router = useRouter();

  return (
    <ul>
      {posts.map((post) => (
        <li
          className={style.postItem}
          onClick={() => router.push(`/blog/${post.id}`)}
          key={post.id}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
