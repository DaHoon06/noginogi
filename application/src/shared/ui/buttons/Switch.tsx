import { ReactElement } from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';

interface SwitchProps extends Omit<ReactSwitchProps, 'onChange' | 'checked'> {
  onChange?: (value: boolean) => void;
  checked?: boolean;
}

export const Switch = (props: SwitchProps): ReactElement => {
  const {
    width = 28,
    height = 16,
    onColor = '#3174ba',
    onChange = () => {},
    checked = false,
    disabled = false,
  } = props;

  return (
    <ReactSwitch
      width={width}
      height={height}
      onColor={onColor}
      checkedIcon={false}
      uncheckedIcon={false}
      disabled={disabled}
      onChange={onChange}
      checked={checked}
    />
  );
};
