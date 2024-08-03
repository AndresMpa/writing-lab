import { supabase } from "@/lib/supabaseClient";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

async function signUpNewUser(email, password) {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: `${BASE_URL}`,
    },
  });
  return error;
}

async function signInWithEmail(email, password) {
  const { data } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return data;
}

async function updateUserPassword(new_password) {
  const result = await supabase.auth.updateUser({ password: new_password });
  return result;
}

// Might be useful
async function resetPasswordForEmail(email) {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${BASE_URL}`,
  });
}

export {
  signUpNewUser,
  signInWithEmail,
  updateUserPassword,
  resetPasswordForEmail,
};
