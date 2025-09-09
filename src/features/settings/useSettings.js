import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export const useSettings = () => {
  const {isPending, data: settings} = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return {isPending, settings};
}