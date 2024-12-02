import { ReactElement, useEffect, useMemo, useState } from "react";
import { CustomSelect } from "./styles/SelectBox.styled";
import { StylesConfig } from "react-select";

interface SelectOption {
  value: string | number;
  label: string;
}

interface Props {
  options: SelectOption[];
  value?: string | number;
  onChange: (e: SelectOption) => void;
  placeholder?: string;
  disabled?: boolean;
  isDefaultValue?: boolean;
}

export const SelectBox = (props: Props): ReactElement => {
  const {
    options,
    onChange,
    placeholder = "",
    value,
    disabled = false,
    isDefaultValue = true,
  } = props;
  const defaultState = isDefaultValue ? options[0] : null;
  const [defaultValue, setDefaultValue] = useState<any>(defaultState);

  useEffect(() => {
    const newValue = options.filter((option) => option.value === value);
    if (newValue.length > 0) setDefaultValue(newValue[0]);
    else setDefaultValue(null);
  }, [value]);

  const customStyles: StylesConfig = useMemo(
    () => ({
      option: (provided, state: any) => ({
        ...provided,
        border: "1px solid #ededed",
        color: state.isSelected ? "#fff" : state.data.color,
        backgroundColor: state.isSelected ? "#222" : "#fff",
        opacity: 0.8,
        padding: 10,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#e8e8e8",
          color: "#858585",
        },
      }),

      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
      control: (provided, state: any) => ({
        ...provided,
        borderColor: state.isFocused ? "#222" : "#ededed",
        boxShadow: state.isFocused ? "#222" : "#ededed",
        caretColor: "transparent",
        "& svg": {
          fill: state.isFocused ? "#222" : "currentColor",
        },
        "&:hover": {
          cursor: "pointer",
        },
        minHeight: "32px",
        height: "32px",
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        padding: "0 8px",
      }),
      singleValue: (provided, state: any) => ({
        ...provided,
        color: state.data.color,
        lineHeight: "32px",
      }),
      menuList: (provided) => ({
        ...provided,
        "&:hover": {
          cursor: "pointer",
        },
      }),
    }),
    [],
  );

  const handleChangeSelect = (e: any) => {
    onChange && onChange(e);
  };

  return (
    <CustomSelect
      options={options}
      isDisabled={disabled}
      onChange={handleChangeSelect}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={defaultValue}
      styles={customStyles}
    />
  );
};
