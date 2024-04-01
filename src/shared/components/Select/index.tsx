import s from './select.module.css';

type Option = {
  label: string;
  value: string | number;
};

type CustomSelectProps = {
  label?: string;
  options: Option[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ label, options, value, onChange }: CustomSelectProps) => (
  <div className={s.customSelect}>
    {label && <label className={s.selectLabel}>{label}</label>}
    <select className={s.select} value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
