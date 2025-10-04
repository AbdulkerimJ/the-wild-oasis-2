import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export const useBookings = () => {
   const { isLoading, data: bookings, error, isError } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return {isLoading, bookings, error, isError };
};