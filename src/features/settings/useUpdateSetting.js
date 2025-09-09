import {  useMutation, useQueryClient } from "@tanstack/react-query";
import  {updateSetting as updateSettingApi} from "../../services/apiSettings";
import toast from "react-hot-toast";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const {isPending: isUpdating, mutate: updateSetting} = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Cabin created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  })

  return { isUpdating, updateSetting };
}