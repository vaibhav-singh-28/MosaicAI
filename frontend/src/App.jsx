import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../utils/firebase.js"
import api from "../utils/axios.js"

const App = () => {

  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", {token})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const googleLogin = async () => {
  try {
    const data = await signInWithPopup(auth, googleProvider);
    console.log(data.user);
    const token = await data.user.getIdToken()
    console.log(token)
    await handleLogin(token)
    console.log(data)
  } catch (error) {
    console.error("Google sign-in failed:", error);
  }
};

  return (
    <div className="bg-gray-800 w-full h-screen flex items-center justify-center">
      <button className="bg-white text-xl px-6 py-3 rounded-2xl w-70" onClick={googleLogin}>
        Continue with Google
      </button>
    </div>
  )
}

export default App
