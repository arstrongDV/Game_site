interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  return posts.json();
};

export const fetchPost = async (id: number): Promise<Post> => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return post.json();
};