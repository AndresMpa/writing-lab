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

export { signUpNewUser };
