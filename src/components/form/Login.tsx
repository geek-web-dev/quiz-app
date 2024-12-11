import { FormEvent, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useAppContext } from "../../contexts/AppContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useAppContext();

  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState("");

  if (user) return <Navigate to={"/"} />;

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, password } = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    if (!name || !email || !password) {
      return setMessage("incorrect credintails !");
    }

    setUser({ name, email });
    navigate("/");
  };

  return (
    <div className="max-w-[600px] bg-white/25 rounded-md p-4 backdrop-blur-sm mx-auto">
      <h1 className="font-semibold text-3xl mb-8 text-white">Login</h1>
      <form className="space-y-4" onSubmit={submit}>
        <Input
          type="text"
          label="name"
          placeholder="name"
          ref={nameRef}
          defaultValue={"quizoX user"}
        />
        <Input
          type="email"
          label="email"
          placeholder="email"
          ref={emailRef}
          defaultValue={"aquizoX@gmail.com"}
        />
        <Input
          type="password"
          label="password"
          placeholder="password"
          ref={passwordRef}
          defaultValue={123}
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
        {message ? (
          <p className="p-4 bg-yellow-300/50 rounded-md">{message}</p>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
