<template>
  <DisplayPicture
    :currentTitle="`Ups... It seems that something went wrong, try again`"
    :pictureToShow="2"
    goBack
  />
</template>

<script>
import DisplayPicture from "@/components/decoration/DisplayPicture";

export default {
  name: "ErrorPage",
};
</script>
