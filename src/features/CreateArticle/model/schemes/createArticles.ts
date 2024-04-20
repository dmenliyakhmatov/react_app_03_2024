import { object, string } from 'yup';

export type CreateArticleForm = {
  title: string;
  description: string;
  cover_image: string;
  content: string;
  section: string;
};

export type CreateArticleParams = CreateArticleForm & {
  user_id: number;
  publication_date: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
};

export const сreateArticleFormValidationScheme = object().shape({
  title: string()
    .min(3, 'Слишком коротко')
    .max(10, 'Слишком многословно')
    .required('Заголовок обязательный')
    .default(''),
  description: string().required('Описание обязательно').default(''),
  cover_image: string().required('Обложка обязательна').default(''),
  content: string().required('Содержимое обязательно').default(''),
  section: string().default('tech'),
});

// "title":
// "description":
// "cover_image"
// "content"
// "section"
