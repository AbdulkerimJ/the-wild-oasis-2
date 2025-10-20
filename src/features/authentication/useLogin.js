import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending} = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);

      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {login, isPending };
};
