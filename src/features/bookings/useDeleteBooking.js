import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
export const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking deleted successfully!");
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error(`Failed to delete booking: ${error.message}`);
    },
  });

  return { isDeleting, deleteBooking };
};
