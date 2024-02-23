import React, { useState } from "react";
import { FormEvent } from "react";

interface User {
    username: string;
    password: string;
}

interface LoginProps {
    onLogin: (user: User) => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onLogin({ username, password });
  }

  return (
    <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;