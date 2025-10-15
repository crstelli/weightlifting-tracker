import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../../supabase";
import toast from "react-hot-toast";

import { useLoadWorkouts } from "../../home/hooks/useWorkouts";
import login from "../utils/login";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const loadWorkouts = useLoadWorkouts();

  async function handleLogin(email, password) {
    if (!email || !password) {
      toast.error("Empty field");
      return;
    }

    setIsLoading(true);

    //prettier-ignore
    try {
      const loginData = await login(email, password);
      const { data: workoutsData } = await supabase
        .from("workouts")
        .select("*")
        .eq("userUUID", loginData.user.id)
        .order("created_at", { ascending: true });

        const workouts = workoutsData.map(wk => wk.workout);

        navigate("/home")
        loadWorkouts(workouts)
        
        toast.success("Login Successfully");
      }

      
    catch (error) {
      toast.error(error.message);
      return;
    }
    
    finally {
      setIsLoading(false);
    }
  }

  return { isLoading, handleLogin };
}

export { useLogin };
