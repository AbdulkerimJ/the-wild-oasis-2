import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export const useBooking = () => {
  const {bookingId} = useParams();
   const {data: booking, error, isError, isFetching } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return {booking, error, isError, isFetching };
};