import { supabase } from "@/lib/supabaseClient";

async function createUserRegister(userData) {
  const { data, stats_error } = await supabase
    .from("User_Stats")
    .insert({
      complete: 0,
    })
    .select();

  userData = {
    ...userData,
    stats_id: data[0].stats_id,
  };
  const { _, user_error } = await supabase.from("User").insert(userData);

  return stats_error == null && user_error == null;
}

async function getAuthorsData() {
  const { data, _ } = await supabase.from("User").select(`
    user_id,
    fullname,
    nickname,
    course,
    image,
  `);

  return data;
}

async function getUserData(nickname) {
  const { data, _ } = await supabase
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

  console.log(data);
  return data;
}

async function updateUserData(user_id, data) {
  const { error } = await supabase
    .from("User")
    .update(data)
    .eq("user_id", user_id);

  return error == null;
}

export { createUserRegister, getAuthorsData, getUserData, updateUserData };
