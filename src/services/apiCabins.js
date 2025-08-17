import supabase from "../services/supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Error fetching cabins:", error);
    return [];
  }

  return data;
};
