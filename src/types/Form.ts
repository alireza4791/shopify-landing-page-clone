interface FormProps {
  trialText: string;
  buttonText: string;
}

export interface InputProps {
  value: string;
  onChange: (inputValue: string) => void;
  type: string;
  placeholder: string;
  className?: string;
  id: string;
  style?: object;
}

export interface StoreInfoProps {
  email: string;
  password: string;
  name: string;
}

export default FormProps;
