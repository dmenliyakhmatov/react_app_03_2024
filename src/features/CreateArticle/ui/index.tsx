import { Field, Form, Formik } from 'formik';
import s from './createArticleForm.module.css';

import { Navigate, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { FormikInput } from '../../../shared/components/FormikInput';
import { сreateArticleFormValidationScheme } from '../model/schemes/createArticles';

import type { FieldProps } from 'formik';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../../router/routes';
import { useCreateArticleMutation } from '../../../services/articles';
import { getUserId } from '../../../store/userData';

const options = [
  { label: 'Путешествия', value: 'travel' },
  { label: 'Технологии', value: 'tech' },
];

export const CreateArticleForm = () => {
  const navigate = useNavigate();
  const userId = useSelector(getUserId);
  const [createArticle, { isLoading, isSuccess }] = useCreateArticleMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.FRESH);
    }
  }, [isSuccess, navigate]);

  if (!userId) return <Navigate to={ROUTES.AUTH} />;

  return (
    <div className={s.createPostFormContainer}>
      <Formik
        initialValues={сreateArticleFormValidationScheme.getDefault()}
        onSubmit={val => {
          createArticle({ ...val, user_id: userId });

          // dispatch(createArticle(val))
          //   .unwrap()
          //   .then(() => {
          //     navigate(ROUTES.ROOT);
          //   });
        }}
        // validateOnBlur
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
            <Field name="section">
              {({ field, form }: FieldProps) => (
                <Select
                  value={options.find(({ value }) => field.value === value)}
                  onChange={(val, meta) => {
                    form.setFieldValue(field.name, val?.value || '');
                  }}
                  onBlur={field.onBlur}
                  options={options}
                />
              )}
            </Field>
          </div>

          <button type="submit" className={s.submitButton} disabled={isLoading}>
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};
