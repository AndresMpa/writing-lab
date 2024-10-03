import { supabase } from "@/lib/supabaseClient";

const BUCKET = import.meta.env.VITE_SUPABASE_BUCKET;

const uploadFile = async (file, file_path) => {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(file_path, file);

  if (error) {
    return error.message;
  } else {
    return data;
  }
};

const downloadFile = async (file_path) => {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .download(file_path);

  if (error) {
    return error.message;
  } else {
    const url = URL.createObjectURL(data);
    return url;
  }
};

const listFiles = async (dir, from, to) => {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .list(dir, { limit: to, offset: from });

  if (error) {
    return error.message;
  } else {
    return data;
  }
};

export { uploadFile, downloadFile, listFiles };
