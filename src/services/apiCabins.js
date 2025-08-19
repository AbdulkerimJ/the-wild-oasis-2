import supabase from "../services/supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Failed to fetch cabins. Please try again later.");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Failed to delete cabin. Please try again later.");
  }
};
