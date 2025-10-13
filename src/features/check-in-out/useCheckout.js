import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully`);
      queryClient.invalidateQueries({ active: true });
      // navigate("/bookings");

    },
    onError: (error) => {
      toast.error(`Error checking out: ${error.message}`);
    },
  });
  return { checkout, isCheckingOut };
};
