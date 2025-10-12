
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {mutate: checkin, isPending: isCheckingIn} = useMutation({
    mutationFn: (bookingId) => updateBooking(bookingId, {status: "checked-in", isPaid: true}),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/bookings");
    },
    onError: (error) => {
      toast.error(`Error checking in: ${error.message}`);
    }
  });
  return {checkin, isCheckingIn};
};