<template>
  <v-container fluid>
    <v-row class="h-100 my-auto">
      <v-col cols="6" class="mx-auto">
        <v-card variant="text" class="my-6 mt-12">
          <v-img
            height="300"
            max-width="500"
            class="mx-auto"
            :src="
              pictureToShow === 1
                ? loadingImage
                : pictureToShow === 2
                ? errorImage
                : notFoundImage
            "
          />

          <v-progress-linear
            v-if="!goBack"
            indeterminate
            color="primary"
            height="4"
          ></v-progress-linear>

          <div class="d-flex justify-center my-12">
            <v-btn
              @click="returnPreviousPage"
              color="primary"
              size="large"
              variant="flat"
              v-if="goBack"
            >
              Go back
            </v-btn>
          </div>

          <v-card-title class="text-center">
            {{ currentTitle }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loadingImage from "../../assets/img/loading.svg";
import errorImage from "../../assets/img/error.svg";
import notFoundImage from "../../assets/img/404.svg";

export default {
  name: "DisplayPicture",
  props: {
    currentTitle: {
      type: String,
      default: "Loading content",
    },
    pictureToShow: {
      type: Number,
      default: 1,
    },
    goBack: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    loadingImage,
    notFoundImage,
    errorImage,
  }),
  methods: {
    returnPreviousPage() {
      this.$router.back();
    },
  },
};
</script>
