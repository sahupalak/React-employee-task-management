import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitting:", email, password); // Debug log
    handleLogin(email.trim(), password.trim());
    setEmail("");
    setPassword("");
    localStorage.clear();
  };

  return (
    <div className="login-div h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl font-semibold">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white border-2 px-5 py-3 border-emerald-600 rounded-full outline-none bg-transparent text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white border-2 px-5 py-3 border-emerald-600 rounded-full outline-none bg-transparent text-xl mt-4 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-7 rounded-full outline-none bg-emerald-600 text-xl py-3 px-24 text-white hover:bg-emerald-700">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
