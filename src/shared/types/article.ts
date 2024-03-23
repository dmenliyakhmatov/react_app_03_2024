export type Article = {
  id: number;
  section: string;
  authorName: string;
  authorAvatar: string;
  publicationDate: string | number;
  title: string;
  coverImage: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
  content: string;
};
