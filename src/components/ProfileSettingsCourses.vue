<template>
  <v-card flat>
    <v-card-title class="pt-4 ml-1"> {{ title }} </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-combobox
            :label="label"
            :items="courses"
            :multiple="!single"
            v-model="nextCourses"
          >
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
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mb-2"></v-divider>

    <v-card-actions class="ma-2">
      <v-btn
        @click="nextCourses = null"
        variant="plain"
        class="ml-auto"
        text="Discard"
      ></v-btn>
      <v-btn
        @click="$emit('saveCourses', nextCourses)"
        color="primary"
        variant="flat"
        class="ml-4"
        text="Save"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "ILEX data",
    },
    label: {
      type: String,
      default: "Courses for the next semester",
    },
    courses: {
      type: Array,
      default: [
        "Course 1",
        "Course 2",
        "Course 3",
        "Course 4",
        "Course 5",
        "Course 6",
        "Course 7",
        "Course 8",
      ],
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    nextCourses: null,
  }),
};
</script>
