import { useState } from "react";

interface SignUpProps {
  handleRegister: () => void;
}

export const SignUp: React.FC<SignUpProps> = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    first_name: "",
    last_name: "",
  })
  const {
    username,
    email,
    password,
    password_confirm,
    first_name,
    last_name,
  } = formData;
  const { handleRegister } = props;
    return (<div></div>);
}