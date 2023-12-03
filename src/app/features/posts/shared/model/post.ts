export interface Post {
  _id: string;
  title: string;
  content: string;
  categoryId: string;
  createdAt: string;
  username: string;
  avatar: string;
  images: string[];
  numberOfComments: number;
  numberOfCLikes: number;
}
