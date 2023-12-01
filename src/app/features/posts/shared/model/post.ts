export interface Post {
    _id: string;
    content: string;
    createdAt: string;
    username: string;
    avatar: string;
    images: string[];
    numberOfComments: number;
    numberOfCLikes: number;
}