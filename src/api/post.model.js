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
    .from("Entries")
    .select(
      `
      *,
      User_Post(
        authors
      )
      `
    )
    .eq("post_id", postId);

  const authorRequest = rawData.data[0].User_Post[0].authors.map(
    async (currentId) =>
      supabase
        .from("User")
        .select("course, fullname, image, nickname")
        .eq("user_id", currentId)
  );

  const authorData = await Promise.all(authorRequest);

  const postData = {
    postID: rawData.data[0].post_id,
    postType: rawData.data[0].post_type,
    image: rawData.data[0].image,
    title: rawData.data[0].title,
    description: rawData.data[0].description,
    level: rawData.data[0].level,
    date: rawData.data[0].due_date,
    active: rawData.data[0].active,
    extra: rawData.data[0].extra,
  };

  return {
    post: postData,
    author: authorData[0].data.map(author => author),
  };
}

async function getPosts(from, to, postType) {
  const rawData = await supabase
    .from("Entries")
    .select("post_id, post_type, title, image, level")
    .eq("post_type", postType)
    .range(from, to);

  const data = rawData.data.map((item) => {
    return {
      postId: item.post_id,
      postType: item.post_type,
      title: item.title,
      image: item.image,
      level: item.level,
    };
  });

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
