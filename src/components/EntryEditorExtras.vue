<template>
  <v-dialog
    v-model="dialogExtras"
    transition="dialog-bottom-transition"
    max-height="600"
    max-width="850"
    persistent
  >
    <v-card
      :title="actions.title"
      :text="actions.description"
      :append-icon="actions.icon"
      max-width="850"
    >
      <div v-if="actions.variant === 'postType'">
        <v-combobox :items="postTypes" v-model="postType" class="w-95 mx-auto">
          <template v-slot:selection="data">
            <v-chip
              size="small"
              v-bind="data.attrs"
              :disabled="data.disabled"
              :model-value="data.selected"
              :key="JSON.stringify(data.item)"
              @click:close="data.parent.selectItem(data.item)"
            >
              {{ data.item.title }}
            </v-chip>
          </template>
        </v-combobox>

        <v-divider class="mt-3 mb-6"></v-divider>
      </div>
      <div v-if="actions.variant === 'course'">
        <v-combobox :items="courses" v-model="course" class="w-95 mx-auto">
          <template v-slot:selection="data">
            <v-chip
              size="small"
              v-bind="data.attrs"
              :disabled="data.disabled"
              :model-value="data.selected"
              :key="JSON.stringify(data.item)"
              @click:close="data.parent.selectItem(data.item)"
            >
              <template v-slot:prepend>
                <v-avatar class="bg-accent text-uppercase" start>
                  C-{{
                    data.item.title.slice(
                      data.item.title.length - 1,
                      data.item.title.length
                    )
                  }}
                </v-avatar>
              </template>
              {{ data.item.title }}
            </v-chip>
          </template>
        </v-combobox>

        <v-divider class="mt-3 mb-6"></v-divider>
      </div>
      <div v-if="actions.variant === 'image'">
        <v-text-field
          v-model="imageBanner"
          class="mx-auto w-95"
          placeholder="Type your URL here"
          append-inner-icon="mdi-link"
        ></v-text-field>

        <v-divider class="mt-3 mb-6"></v-divider>
      </div>
      <div v-if="actions.variant === 'reference'">
        <div class="reference-container">
          <div v-for="index in references.length">
            <v-text-field
              v-model="references[index]"
              placeholder="Type your URL here"
              class="mx-auto w-95"
              @click:append="references.splice(index, 1)"
              append-inner-icon="mdi-link"
              append-icon="mdi-delete"
            ></v-text-field>
          </div>
        </div>
        <v-divider class="mt-3 mb-6"></v-divider>
      </div>
      <template v-slot:actions>
        <v-btn
          @click="actions.action(variantData)"
          :color="actions.color"
          :text="actions.label"
          class="ms-auto"
        ></v-btn>
        <v-btn text @click="closeDialog">Cancel</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
import { useEditorStore } from "@/stores/editorStore";

export default {
  data: () => ({
    course: null,
    postType: null,
    imageBanner: null,
    references: [null],
    postTypes: ["Insight", "Experience"],
    courses: [
      "Course 1",
      "Course 2",
      "Course 3",
      "Course 4",
      "Course 5",
      "Course 6",
      "Course 7",
      "Course 8",
    ],
  }),
  computed: {
    actions() {
      return this.editorStore.actions;
    },
    dialogExtras() {
      return this.editorStore.dialogExtras;
    },
    variantData() {
      if (this.editorStore.actions.variant === "postType") {
        return this.postType;
      }
      if (this.editorStore.actions.variant === "course") {
        return this.course;
      }
      if (this.editorStore.actions.variant === "image") {
        return this.imageBanner;
      }
      if (this.editorStore.actions.variant === "reference") {
        return this.references.splice(1, this.references.length);
      }
    },
  },
  methods: {
    saveCourses(course) {
      if (typeof course == "string") {
        this.editorStore.setCourseLevel([
          {
            name: course,
            id: `C-${course.slice(course.length - 1, course.length)}`,
          },
        ]);
      }
    },
    closeDialog() {
      this.editorStore.closeDialog();
    },
  },
  created() {
    this.editorStore = useEditorStore();
  },
};
</script>

<style scoped lang="sass">
.w-95
  width: 95%

.reference-container
  max-height: 300px
  overflow-y: auto
</style>
