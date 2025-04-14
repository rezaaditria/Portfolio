"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "MRX@crypt.com" && password === "Rezakp190!") {
      Cookies.set("token", "admin-token");
      router.push("/admin");
    } else {
      setError("Unauthorized, please check your email and password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black to-slate-800">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          MRX
        </h2>
        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
        )}
        <input
          type="email"
          placeholder="Secret"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-full mb-4 text-sm"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-full mb-6 text-sm"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
