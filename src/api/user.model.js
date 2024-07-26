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

  return stats_error == null || user_error == null;
}

export { createUserRegister };
