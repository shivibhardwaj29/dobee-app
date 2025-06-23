import { motion } from "framer-motion";
import Lottie from "lottie-react";
import beeAnimation from "../assets/bee.json";

const SignUp = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-between bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
      {/* Lottie Background */}
      <Lottie
        animationData={beeAnimation}
        loop
        className="relative w-full h-full object-cover opacity-30 items-right justify-right"
      />

      {/* Sign Up Card */}
      <motion.div
        className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md w-full z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-extrabold text-yellow-600 mb-6 text-center">
          Join doBee
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
