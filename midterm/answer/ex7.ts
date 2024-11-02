export const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export type Comment = {
  postId: number;
  id: number;
  email: string;
  body: string;
};

type Post = {
  id: number;
  postId: number;
  title: string;
  comments?: Comment[];
};

const getComments = (postId: number) =>
  fetch(`${POST_URL}/${postId}/comments`).then(res =>
    res.json().then(res => res as Comment[])
  );

export async function getPosts(userId: number | string) {
  const res = await fetch(`${POST_URL}?userId=${userId}`);

  const posts = (await res.json()) as Post[];
  // console.log('🚀  data:', posts[0]);

  const comments = await Promise.all<Comment[]>(
    posts.map(({ id: postId }) => getComments(postId))
  );
  // console.log('🚀  comments:', comments[0]);

  posts.forEach((post, idx) => {
    post.comments = comments[idx].map(({ postId, id, email, body }) => ({
      postId,
      id,
      email,
      body,
    }));
  });
  // console.log('🚀  comments:', comments);
  // console.log('🚀  posts>>', posts[0]);

  return posts.map(({ id: postId, title, comments }) => ({
    postId,
    title,
    comments,
  }));
}
