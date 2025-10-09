import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export const useBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status") || "all";

  // Determine filter based on URL parameter
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  // Deternime sortBy based on URL parameter
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Determine pagination based on URL parameter
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Query bookings with react-query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
    isError,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-fetch next page
  const totalPages = Math.ceil(count / PAGE_SIZE);
  const prefetchPage = (targetPage) => {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, targetPage],
      queryFn: () => getBookings({ filter, sortBy, page: targetPage }),
    });
  };

  // next page
  if (page < totalPages) prefetchPage(page + 1);
  // previous page
  if (page > 1) prefetchPage(page - 1);

  return { isLoading, bookings, error, isError, count };
};
