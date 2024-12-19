import React from 'react';
import Head from 'next/head';
import style from './style.module.css'
import {fetchPost} from '../../store/posts'


const Post = async ({ params }) => {
    const post = await fetchPost(params.id); 
    return (
        <div>
            <Head>
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.body.substring(0, 150)} />
                <meta property="og:image" content="https://via.placeholder.com/600x400" />
                <meta property="og:url" content={`https://yourdomain.com/post/${post.id}`} />
                <title>{post.title}</title>
            </Head>
            <div className={style.MainContainer}>
                <div className={style.blockContent}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
