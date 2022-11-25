type SelectOption = {
  label: string;
  value: number;
};

type SelectProps = {
  value?: SelectOption;
  onChange?: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div>
      <span>value</span>
      <button>X</button>
      <span></span>
      <span></span>
    </div>
  );
};

export default Select;
