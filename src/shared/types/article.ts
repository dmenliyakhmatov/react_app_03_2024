export type Article = {
  id: number;
  section: string;
  publication_date: string | number;
  title: string;
  cover_image: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
  content: string;
  description: string;
  user: {
    fullName: string;
    email: string;
    id: 2;
    avatar: string;
  };
};
