import { supabase } from "@/lib/supabaseClient";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

async function signUpNewUser(email, password) {
  const { _, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: `${BASE_URL}`,
    },
  });
  return error === null;
}

async function signInWithEmail(email, password) {
  const { data } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return data;
}


async function updateUserPassword() {
  await supabase.auth.updateUser({ password: new_password });
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
