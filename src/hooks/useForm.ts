import { useState, useEffect, useCallback, ChangeEvent } from "react";

// Define types for form data, validation, and callback function
interface FormData {
  [key: string]: {
    value: string;
    error?: string;
    focus?: boolean | null;
  };
}

interface Validator {
  errEmpty?: string;
  regEx?: RegExp;
  error?: string;
}

interface Validation {
  [key: string]: {
    required?: boolean;
    validator: Validator;
  };
}

type Callback = (state: FormData) => void;

export const useForm = (formData: FormData, validation: Validation, callback: Callback) => {
  const [state, setState] = useState<FormData>(formData);
  const [disable, setDisable] = useState<boolean>(true);

  const validateState = useCallback(() => {
    const hasError = Object.keys(validation).some(key => {
      const isInputFieldRequired = validation[key]?.required;
      const stateValue = state[key]?.value;
      const stateError = state[key]?.error;
      return (isInputFieldRequired && !stateValue) || !!stateError;
    });
    return hasError;
  }, [state, validation]);

  useEffect(() => {
    setDisable(validateState());
  }, [validateState]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const field = validation[name];
    let error = "";
    if (field?.required) {
      if (!value) {
        error = field.validator.errEmpty || "";
      } else {
        if (!Number(value) && field.validator.regEx) {
          if (!field.validator.regEx.test(value)) {
            error = field.validator.error || "";
          }
        }
      }
    }
    setState((prevState: { [x: string]: any; }) => ({
      ...prevState,
      [name]: { ...prevState[name], value, error },
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateState()) {
      callback(state);
    }
  };

  return { state, disable, handleChange, handleSubmit };
};
