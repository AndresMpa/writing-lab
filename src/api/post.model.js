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

async function insertComment(commentData) {
  const commentResponse = await supabase
    .from("Comments")
    .insert(commentData)
    .select();

  return commentResponse.data;
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
        .select("user_id, course, fullname, image, nickname")
        .eq("user_id", currentId)
  );

  const authorData = await Promise.all(authorRequest);

  const commentRequest = await supabase
    .from("Comments")
    .select("post_id, content, author")
    .eq("post_id", postId);

  const postData = {
    postId: rawData.data[0].post_id,
    postType: rawData.data[0].post_type,
    image: rawData.data[0].image,
    title: rawData.data[0].title,
    description: rawData.data[0].description,
    level: rawData.data[0].level,
    date: rawData.data[0].due_date
      ? rawData.data[0].due_date.split("T")[0]
      : null,
    active: rawData.data[0].active,
    extra: rawData.data[0].extra,
  };

  const authorList = [];
  authorData.forEach((author) => authorList.push(author.data[0]));

  return {
    post: postData,
    author: authorList,
    comments: [...commentRequest.data],
  };
}

async function getPosts(from, to, postType) {
  const rawData = await supabase
    .from("Entries")
    .select("post_id, post_type, title, image, level, due_date, active")
    .eq("post_type", postType)
    .range(from, to);

  const data = rawData.data.map((item) => {
    return {
      postId: item.post_id,
      postType: item.post_type,
      title: item.title,
      image: item.image,
      level: item.level,
      date: item.due_date ? item.due_date.split("T")[0] : null,
      active: item.active,
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

  const commentsResponse = await supabase
    .from("Comments")
    .delete()
    .eq("post_id", postId)
    .select();

  const userPostResponse = await supabase
    .from("User_Post")
    .delete()
    .eq("post_id", postId)
    .select();

  return entryResponse.data && userPostResponse.data && commentsResponse.data;
}

export {
  insertPost,
  insertComment,
  getPostData,
  getPosts,
  updatePost,
  deletePost,
};
