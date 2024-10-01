<template>
  <v-card flat>
    <v-card-title class="pt-4 ml-1"> {{ title }} </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            :label="label"
            :disabled="disabled"
            v-model="typedText"
            density="compact"
            name="type-text"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mb-2"></v-divider>

    <v-card-actions class="ma-2">
      <v-btn
        @click="typedText = null"
        variant="plain"
        class="ml-auto"
        text="Discard"
      ></v-btn>
      <v-btn
        @click="$emit('saveText', typedText)"
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
      default: "Information for the next course",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    typedText: null,
  }),
};
</script>
