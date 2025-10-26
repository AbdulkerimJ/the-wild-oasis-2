import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  // 1️⃣ Signup the user
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw Error(error.message);

  // 2️⃣ Update user metadata
  const { error: updateError } = await supabase.auth.updateUser({
    data: { fullName, avatar: "" },
  });
  if (updateError) throw Error(updateError.message);

  // 3️⃣ Return user (now with fullName and avatar in user_metadata)
  const { data } = await supabase.auth.getUser(); // or return { user }
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password or fullName
  
  let updateData;
  if (password) updateData = {password};
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw Error(error.message);
  if (!avatar) return data;

  // 2. Upload avatar
  const fileName = `avatar-${data.user.id}-${Date.now()}`;
  const {error: uploadError} = await supabase.storage
    .from("avatars").upload(fileName, avatar);
  if (uploadError) throw Error(uploadError.message);
  
  // 3. Update avatar
  const {data: updatedUser, error: updateError} = await supabase.auth.updateUser({
    data: { avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}` },
  });

  if (updateError) throw Error(updateError.message);
  return updatedUser;
}
