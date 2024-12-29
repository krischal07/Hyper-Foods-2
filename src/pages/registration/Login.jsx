import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import Hyperlogo from "../../assets/hyperlogo.png";

function Login() {
  const { loading, setLoading } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");

      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Email or Password incorrect!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      {loading && <Loader />}
      <div className="bg-white px-10 py-10 rounded-xl">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={Hyperlogo}
            alt="App Logo"
            className="w-30 h-20 object-contain"
          />
        </div>
        {/* Title */}
        <h1 className="text-center text-black text-xl mb-4 font-bold">Login</h1>
        {/* Email Input */}
        <div>
        <input
          type="email"
          name="email"
          aria-label="Email"
          className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-black outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        {/* Password Input */}
        <div>
                <input
          type="password"
          name="password"
          aria-label="Password"
          className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-black outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        {/* Login Button */}
        <button
          className="bg-blue-800 w-full text-white font-bold px-2 py-2 rounded-lg"
          onClick={login}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {/* Signup Link */}
        <p className="text-black mt-3">
          Don't have an account?{" "}
          <Link className="text-blue-800 font-bold" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
