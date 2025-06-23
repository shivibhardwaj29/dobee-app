import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import beeAnimation from "../assets/bee.json";

const Auth = () => {
  const [stage, setStage] = useState("intro");

  useEffect(() => {
    const timer = setTimeout(() => setStage("signup"), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSwitch = () => {
    setStage((prev) => (prev === "signup" ? "signin" : "signup"));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-yellow-50 to-white">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: stage === "intro" ? 0 : stage === "signup" ? "-28vw" : "28vw",
        }}
        transition={{ duration: 0.8 }}
        className="absolute w-screen h-screen z-0"
      >
        <Lottie
          animationData={beeAnimation}
          loop
          className="relative w-full h-full object-cover opacity-30 items-right justify-right"
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {(stage === "signup" || stage === "signin") && (
          <motion.div
            key={stage}
            initial={{
              x: stage === "signup" ? "100vw" : "-100vw",
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: stage === "signup" ? "100vw" : "-100vw",
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute z-10 max-w-md w-full  bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 ${
              stage === "signup" ? "right-8 md:right-16" : "left-8 md:left-16"
            }`}
          >
            <h2 className="text-3xl font-extrabold text-yellow-600 mb-6 text-center">
              {stage === "signup" ? "Join doBee" : "Welcome Back"}
            </h2>
            <form className="space-y-4">
              {stage === "signup" && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              )}
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
                {stage === "signup" ? "Sign Up" : "Sign In"}
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              {stage === "signup" ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={handleSwitch}
                    className="text-yellow-600 font-semibold"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={handleSwitch}
                    className="text-yellow-600 font-semibold"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Auth;
