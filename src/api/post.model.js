import { supabase } from "@/lib/supabaseClient";

async function insertPost(userId, postData, authors) {
  const entryResponse = await supabase
    .from("Entries")
    .insert(postData)
    .select();

  const userPostResponse = await supabase
    .from("User_Post")
    .insert({
      user_id: userId,
      post_id: entryResponse.data[0].post_id,
      authors: authors,
    })
    .select();

  return entryResponse.data && userPostResponse.data;
}

async function getPostData(postId) {
  const rawData = await supabase
    .from("Post")
    .select(
      `
      *,
      User_Post!inner(
        post_id
      )
      `
    )
    .eq("post_id", postId);

  console.log(rawData.data);

  const data = {
    id: rawData.data[0].post_id,
    postType: rawData.data[0].post_type,
    img: rawData.data[0].image,
    title: rawData.data[0].title,
    description: rawData.data[0].description,
    level: rawData.data[0].level,
    date: rawData.data[0].due_date,
    active: rawData.data[0].active,
    extra: rawData.data[0].extra,
  };

  return data;
}

async function getPosts(from, to, postType) {
  const { data } = await supabase
    .from("Post")
    .select("post_id, post_type, title, image, level")
    .eq("post_type", postType)
    .range(from, to);

  return data;
}

async function updatePost(postId, postData) {
  const entryResponse = await supabase
    .from("Entries")
    .update(postData)
    .eq("post_id", postId)
    .select();

  return entryResponse.data;
}

async function deletePost(postId) {
  const entryResponse = await supabase
    .from("Entries")
    .delete()
    .eq("post_id", postId)
    .select();

  const userPostResponse = await supabase
    .from("User_Post")
    .delete()
    .eq("post_id", postId)
    .select();

  return entryResponse.data && userPostResponse.data;
}

export { insertPost, getPostData, getPosts, updatePost, deletePost };
