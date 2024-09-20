<template>
  <v-card variant="text" flat>
    <v-data-iterator
      :items-per-page="itemsPerPage"
      :loading="loading"
      :search="search"
      :items="post"
      :page="page"
    >
      <template v-slot:header>
        <v-toolbar class="px-2" flat>
          <v-text-field
            density="compact"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            v-model="search"
            hide-details
            clearable
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:loader>
        <v-container class="pa-1" fluid>
          <v-row dense no-gutters>
            <v-col
              v-for="(_, index) in [...Array(itemsPerPage).keys()]"
              :md="columnsPerPost"
              :key="index"
              cols="auto"
            >
              <v-skeleton-loader
                class="border ma-1"
                type="image, article"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col
              v-for="(item, key) in items"
              :key="`${item.title}-${key}`"
              :md="columnsPerPost"
              class="my-auto"
              cols="auto"
            >
              <CollaborateIteratorItem
                :id="item.raw.postId"
                :title="item.raw.title"
                :level="item.raw.level"
                :img="noImg ? '' : item.raw.image"
                :description="noDescription ? '' : item.raw.description"
                :date="useDate ? item.raw.date : ''"
                :active="item.raw.active"
              />
            </v-col>
          </v-row>
        </v-container>

        <div v-if="items.length <= 0">
          <v-alert type="warning"> No post to show </v-alert>
        </div>
      </template>

      <template v-slot:footer>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
            @update:model-value="pageChange"
          ></v-pagination>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<script>
export default {
  props: {
    noImg: {
      type: Boolean,
      default: false,
    },
    useDate: {
      type: Boolean,
      default: false,
    },
    noDescription: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    rowsPerPost: {
      type: Number,
      default: 2,
    },
    columnsPerPost: {
      type: Number,
      default: 3,
    },
    post: {
      type: [Array],
    },
  },
  data: () => ({
    search: "",
    page: 1,
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.post.length / this.itemsPerPage);
    },
  },
  methods: {
    pageChange(page) {
      this.$emit("pageChange", page);
    },
  },
};
</script>
