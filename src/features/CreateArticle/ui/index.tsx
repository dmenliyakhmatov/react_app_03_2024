import { Field, Form, Formik } from 'formik';
import s from './createArticleForm.module.css';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { ROUTES } from '../../../router/routes';
import { FormikInput } from '../../../shared/components/FormikInput';
import { useAppDispatch } from '../../../store';
import { сreateArticleFormValidationScheme } from '../model/schemes/createArticles';
import { createArticle } from '../model/store/effects';
import { getCreateArticleIsLoading } from '../model/store/slice';

// "title":
// "description":
// "cover_image"
// "content"
// "section"

// const requiredValidation = (value: string) => {
//   if (!value) {
//     return 'Обязательное поле';
//   }
// };

export const CreateArticleForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getCreateArticleIsLoading);

  return (
    <div className={s.createPostFormContainer}>
      <Formik
        initialValues={сreateArticleFormValidationScheme.getDefault()}
        onSubmit={val => {
          dispatch(createArticle(val))
            .unwrap()
            .then(() => {
              navigate(ROUTES.ROOT);
            });
        }}
        validateOnBlur
        validationSchema={сreateArticleFormValidationScheme}
      >
        <Form>
          <div className={s.formField}>
            <FormikInput label="Заголовок" name="title" />
          </div>

          <div className={s.formField}>
            <FormikInput label="Описание" type="textarea" name="description" />
          </div>

          <div className={s.formField}>
            <FormikInput label="Обложка" name="cover_image" />
          </div>

          <div className={s.formField}>
            <FormikInput label="Содержимое" type="textarea" name="content" />
          </div>

          <div className={s.formField}>
            <Field
              id="section"
              name="section"
              component={Select}
              options={[
                { label: 'Путешествия', value: 'travel' },
                { label: 'Технологии', value: 'tech' },
              ]}
            />
          </div>

          <button type="submit" className={s.submitButton} disabled={isLoading}>
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};
