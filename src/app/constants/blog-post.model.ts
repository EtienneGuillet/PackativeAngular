export interface BlogPostComment {
  postId: number;
  id: number;
  name: String;
  email: String;
  body: String;
}

export interface BlogPost {
  userId: number;
  id: number;
  title: String;
  body: String;
  comments: Array<BlogPostComment>;
}

export interface BlogPostDialog {
  blogPost: BlogPost;
}
