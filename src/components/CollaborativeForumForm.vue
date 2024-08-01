<template>
  <v-dialog v-model="dialog" max-width="600" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        class="ml-auto font-weight-regular"
        prepend-icon="mdi-clock"
        text="Due date"
        variant="tonal"
        color="primary"
      ></v-btn>
    </template>
    <v-card>
      <v-date-picker
        width="600"
        color="primary"
        v-model:model-value="date"
      ></v-date-picker>
      <v-card-actions class="d-flex">

      <v-btn @click="dialog = !dialog">Save</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import { useForumStore } from "@/stores/forumStore";

export default {
  data: () => ({
    dialog: false,
  }),
  computed: {
    date: {
      get() {
        return this.forumStore.dueDate;
      },
      set(value) {
        this.forumStore.dueDate = value;
      },
    },
  },
  created() {
    this.forumStore = useForumStore();
  },
};
</script>
