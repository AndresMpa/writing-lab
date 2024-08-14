import { supabase } from "@/lib/supabaseClient";

async function createUserRegister(userData) {
  const { data, error } = await supabase
    .from("User_Stats")
    .insert({
      complete: 0,
    })
    .select();

  userData = {
    ...userData,
    stats_id: data[0].stats_id,
  };
  const userRequest = await supabase.from("User").insert(userData);

  return userRequest.error === null && error === null;
}

async function getAuthorsData() {
  const { data } = await supabase.from("User").select(
    `
      user_id, 
      fullname, 
      nickname, 
      course, 
      image
      `
  );

  return data;
}

async function getUserData(nickname) {
  const { data } = await supabase
    .from("User")
    .select(
      `
      user_id,
      stats_id,
      fullname,
      nickname,
      course,
      image,
      notification,
      User_Stats ( stats_id, complete )
      `
    )
    .eq("nickname", nickname);

  return data;
}

async function getUserDataById(userId) {
  const { data } = await supabase
    .from("User")
    .select(
      `
      user_id,
      fullname,
      nickname,
      course,
      image,
      `
    )
    .eq("user_id", userId);

  return data;
}

async function updateUserData(data, user_id) {
  const { error } = await supabase
    .from("User")
    .update(data)
    .eq("user_id", user_id);

  return error == null;
}

async function deleteAccount(user_id) {
  const responseUser = await supabase
    .from("User")
    .delete()
    .eq("user_id", user_id)
    .select();

  const responseStats = await supabase
    .from("User_Stats")
    .delete()
    .eq("stats_id", responseUser.data[0].stats_id)
    .select();

  return responseStats.data && responseUser.data;
}

export {
  createUserRegister,
  getAuthorsData,
  getUserData,
  getUserDataById,
  updateUserData,
  deleteAccount,
};
