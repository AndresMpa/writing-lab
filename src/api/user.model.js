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

async function getUserData() {
  const { data, _ } = await supabase.from("User").select(`
    user_id,
    stats_id,
    fullname,
    nickname,
    course,
    image,
    notification,
    User_Stats ( stats_id, complete )
  `);

  console.log(data);
  return data;
}

async function updateUserData(data, user_id) {
  const { error } = await supabase
    .from("User")
    .update(data)
    .eq("user_id", user_id);

  return error == null;
}

export { createUserRegister, getUserData, updateUserData };
