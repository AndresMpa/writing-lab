<template>
  <v-dialog v-model="dialog" max-width="600" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        class="ml-auto font-weight-regular"
        prepend-icon="mdi-clock"
        text="Question information"
        variant="tonal"
        color="primary"
      ></v-btn>
    </template>
    <v-card>
      <v-card-item class="ma-0 pa-0">
        <v-date-picker
          width="600"
          color="primary"
          v-model:model-value="date"
        ></v-date-picker>

        <ComboSearch
          class="px-6"
          title="Course information"
          label="Courses for this question"
          @save-options="saveCourses"
        />
      </v-card-item>

      <v-card-actions class="d-flex">
        <v-btn @click="dialog = !dialog">Finish</v-btn>
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
  methods: {
    saveCourses(courses) {
      let data;
      if (typeof courses === "string") {
        data = [courses];
      } else {
        data = [...courses];
      }
      this.forumStore.setCourseLevel(data);
    },
  },
  created() {
    this.forumStore = useForumStore();
  },
};
</script>
