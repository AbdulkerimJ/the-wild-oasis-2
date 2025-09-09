import supabase, { supabaseUrl } from "../services/supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Failed to fetch cabins. Please try again later.");
  }

  return data;
};

export const createCabin = async (cabinData) => {
  console.log(cabinData);
  // 1. Prepare image data
  const imageName = `${Date.now()}-${cabinData.image?.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 2. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabinData, image: imagePath }])
    .select();

  if (error) {
    console.error("Error creating cabin:", error);
    throw new Error("Failed to create cabin. Please try again later.");
  }

  // 3. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image);

  // 4. Delete cabin if image upload fails
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.error("Error uploading image:", storageError.message);
    throw new Error("Failed to upload cabin image. Please try again later.");
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
