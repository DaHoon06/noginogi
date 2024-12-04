import { PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren {
  disabled?: boolean;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({
                           children,
                           disabled,
                           checked,
                           onChange,
                         }: Props): ReactElement => {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled || false}
        checked={checked}
        onChange={({ target: { checked } }) =>
          onChange ? onChange(checked) : null
        }
      />
      {children}
    </label>
  );
};

export default CheckBox;