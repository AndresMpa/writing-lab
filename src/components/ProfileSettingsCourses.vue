<template>
  <v-card flat>
    <v-card-title class="pt-4 ml-1"> ILEX data </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-combobox
            :items="courses"
            v-model="nextCourses"
            label="Courses for the next semester"
            multiple
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
        :disabled="disablePassword"
        variant="plain"
        class="ml-auto"
        text="Discard"
      ></v-btn>

      <v-btn
        :variant="disablePassword ? 'outlined' : 'flat'"
        :disabled="disablePassword"
        color="primary"
        class="ml-4"
        text="Save"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    nextCourses: null,
    previousCourses: null,
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
};
</script>
