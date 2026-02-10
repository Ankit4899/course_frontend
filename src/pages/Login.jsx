// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api/axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const login = async () => {
//     // const res = await axios.post(
//     //   "http://localhost:5000/api/auth/login",
//     //   { email, password }
//     // );
//     const res = await API.post("/api/auth/login", {
//       email,
//       password,
//     });
//     localStorage.setItem("token", res.data.token);
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center pt-24">
//       <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-6">
//         <h1 className="text-2xl font-semibold mb-6 text-gray-900">
//           Log in
//         </h1>

//         <label className="block text-sm font-medium text-gray-900 mb-1">
//           Email
//         </label>
//         <input
//           className="w-full border border-gray-400 px-3 py-2 rounded mb-4 text-gray-900 focus:ring-2 focus:ring-black"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label className="block text-sm font-medium text-gray-900 mb-1">
//           Password
//         </label>
//         <input
//           type="password"
//           className="w-full border border-gray-400 px-3 py-2 rounded mb-6 text-gray-900 focus:ring-2 focus:ring-black"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={login}
//           className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
//         >
//           Log in
//         </button>

//         <p className="text-sm mt-4 text-gray-800">
//           Don’t have an account?{" "}
//           <Link to="/register" className="underline font-medium">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const login = async () => {
  //   const res = await API.post("/api/auth/login", {
  //     email,
  //     password,
  //   });
  //   localStorage.setItem("token", res.data.token);
  //   navigate("/dashboard");
  // };
  const login = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 text-center">
          Log in
        </h1>

        {/* Email */}
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-400 px-3 py-2.5 rounded mb-4 text-gray-900
          focus:ring-2 focus:ring-black focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border border-gray-400 px-3 py-2.5 rounded mb-6 text-gray-900
          focus:ring-2 focus:ring-black focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        {/* <button
          onClick={login}
          className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-900
          transition duration-200 cursor-pointer"
        >
          Log in
        </button> */}
        <button
          onClick={login}
          disabled={loading}
          className={`w-full py-2 rounded text-white transition
            ${loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-900 cursor-pointer"}
          `}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

        {/* Footer */}
        <p className="text-sm mt-5 text-gray-800 text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="underline font-medium hover:text-black cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
