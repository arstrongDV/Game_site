// In ../../store/posts.js
export const fetchPosts = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  return posts.json();
};

export const fetchPost = async (id:any) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return post.json();
};
