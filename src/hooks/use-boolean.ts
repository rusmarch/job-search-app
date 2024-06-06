'use client'
import { Dispatch, SetStateAction, useState } from "react";

type ReturnType = {
  value: boolean;
  onTrue: VoidFunction,
  onFalse: VoidFunction,
  onToggle: VoidFunction,
  setValue: Dispatch<SetStateAction<boolean>>
};

export const useBoolean = (defaultValue?: boolean) => {
  const [value, setValue] = useState(Boolean(defaultValue));

  const onTrue = () => {
    setValue(true);
  }

  const onFalse = () => {
    setValue(false);
  }
  
  const onToggle = () => {
    setValue((prev) => !prev);
  }

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
}