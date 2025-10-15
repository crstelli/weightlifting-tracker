import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { signUp } from "../utils/signup";

function useSignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp(email, password, confirmPassword) {
    if (!email || !password || !confirmPassword) {
      toast.error("Empty field");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Please check your passwords");
      return;
    }

    setIsLoading(true);

    //prettier-ignore
    try {
      await signUp(email, password);
  
        navigate("/login")      
        toast.success("We sent a confirmation to your email");
      }

      
    catch (error) {
      toast.error(error.message);
      return;
    }
    
    finally {
      setIsLoading(false);
    }
  }

  return { isLoading, handleSignUp };
}

export { useSignUp };
