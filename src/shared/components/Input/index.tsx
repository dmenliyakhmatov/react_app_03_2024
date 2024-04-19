import clsx from 'clsx';
import s from './input.module.css';

export type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
};

const Input = ({ label, error, touched, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={clsx(s.inputField, { [s.textareaField]: props.type === 'textarea', [s.error]: error && touched })}
      />
      {error && touched && <div className={s.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
