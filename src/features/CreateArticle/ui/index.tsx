import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './createArticleForm.module.css';

import type { FieldProps } from 'formik';
import Select from 'react-select';
import Input from '../../../shared/components/Input';

// "title":
// "description":
// "cover_image"
// "content"
// "section"

const requiredValidation = (value: string) => {
  if (!value) {
    return 'Обязательное поле';
  }
};

export const CreateArticleForm = () => {
  return (
    <div className={s.createPostFormContainer}>
      <Formik
        initialValues={{
          title: '',
          content: '',
          description: '',
          section: '',
          cover_image: '',
        }}
        onSubmit={val => {
          console.log(val);
        }}
        validateOnBlur
      >
        <Form>
          <div className={s.formField}>
            <Field name="title" id="title" className={s.inputField} validate={requiredValidation}>
              {({ field, meta }: FieldProps) => {
                return <Input label="Заголовок" {...field} {...meta} />;
              }}
            </Field>

            {/* <ErrorMessage component="div" className={s.errorMessage} name="title" /> */}
          </div>
          <div className={s.formField}>
            <Field as="textarea" name="description" className={s.inputField} validate={requiredValidation} />

            <ErrorMessage component="div" className={s.errorMessage} name="description" />
          </div>

          <div className={s.formField}>
            <Field as="input" name="cover_image" className={s.inputField} validate={requiredValidation} />
            <ErrorMessage component="div" className={s.errorMessage} name="cover_image" />
          </div>

          <div className={s.formField}>
            <Field as="textarea" name="content" className={s.inputField} validate={requiredValidation} />

            <ErrorMessage component="div" className={s.errorMessage} name="content" />
          </div>

          <div className={s.formField}>
            <Field
              name="section"
              className={s.inputField}
              component={Select}
              options={[
                { label: 'Путешествия', value: 'travel' },
                { label: 'Технологии', value: 'tech' },
              ]}
            />
          </div>

          <button type="submit" className={s.submitButton}>
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};
