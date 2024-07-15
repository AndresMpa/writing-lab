<template>
  <v-container fluid>
    <v-row no-gutters class="mb-3">
      <v-col>
        <v-card class="mx-auto">
          <v-toolbar :elevation="8">
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-door-open </v-icon>
                </v-btn>
              </template>
              <span>Leave</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-trash-can </v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" @click="lock = !lock">
                  <v-icon>
                    {{ lock ? "mdi-lock" : "mdi-lock-open-variant" }}</v-icon
                  >
                </v-btn>
              </template>
              <span>Lock/Unlock</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-content-save </v-icon>
                </v-btn>
              </template>
              <span>Save</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-spacer></v-spacer>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-content-cut </v-icon>
                </v-btn>
              </template>
              <span>Cut</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-content-copy </v-icon>
                </v-btn>
              </template>
              <span>Copy</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-content-paste </v-icon>
                </v-btn>
              </template>
              <span>Paste</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-spacer></v-spacer>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-format-bold </v-icon>
                </v-btn>
              </template>
              <span>Bold</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-format-italic </v-icon>
                </v-btn>
              </template>
              <span>Italic</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-format-underline </v-icon>
                </v-btn>
              </template>
              <span>Underline</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-spacer></v-spacer>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-link-variant </v-icon>
                </v-btn>
              </template>
              <span>Link</span>
            </v-tooltip>

            <v-divider vertical inset></v-divider>

            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-icon> mdi-publish </v-icon>
                </v-btn>
              </template>
              <span>Publish</span>
            </v-tooltip>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-textarea
          :disabled="lock"
          :model-value="title"
          placeholder="Add your title"
          class="mx-auto my-1"
          variant="underlined"
          autocomplete="on"
          name="textarea"
          auto-grow
          counter
          rows="1"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-textarea
          :disabled="lock"
          :model-value="post"
          placeholder="Write..."
          variant="underlined"
          autocomplete="on"
          name="textarea"
          class="mx-auto"
          rows="15"
          no-resize
          counter
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    lock: false,
    title: "",
    post: "",
  }),
};
</script>

<style lang="sass" scoped>
.w-90
  width: 90vw
</style>
