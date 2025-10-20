import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useSignup = () => {
  const {mutate: signup, isPending} = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Signup successful! Please check your email to verify your account.");
    },
    onError: (error) => {
      toast.error(`Signup failed: ${error.message}`);
    }
  })

  return {signup, isPending};
};

export default useSignup;