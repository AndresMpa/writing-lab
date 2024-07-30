import { defineStore } from "pinia";

import { insertPost } from "@/api/post.model";

import { useUserStore } from "./userStore";

const mockComments = () => {
  return [
    {
      author: "Tsetman",
      content:
        "aoeuaoeuaoeueaoeuaoeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequuntur voluptatem repellendus possimus dolorem",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi.",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi.",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi.",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat consequuntur voluptatem repellendus possimus dolorem",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi. Lorem ipsum dolor, sit amet r, sit amet consectetuo asdfads  asdfasd alores vel quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi.",
    },
    {
      author: "Tsetman",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid tenetur doloremque autem id modi atque. Fugit natus facilis, nostrum perferendis officia cumque similique ex. Quae eos in dolores vel quasi.",
    },
  ];
};

export const useForumStore = defineStore("forumStore", {
  state: () => ({
    postId: "new",
    postType: null,
    title: "",
    description: "",
    author: null,
    level: null,
    dueDate: null,
    active: true,
  }),
  getters: {},
  actions: {
    getForumData() {},

    getForumDetail() {},
  },
});
