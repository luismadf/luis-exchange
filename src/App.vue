<template>
  <main>
    <Navbar :links="getLinks" />
    <router-view
      class="container px-5 sm:px-20 py-20 flex justify-center"
      :isLoading="isLoading"
      :assets="assets"
    />
  </main>
</template>

<script>
import api from "@/api";
import Navbar from "@/components/Navbar";
import { getMenuItems } from "@/helpers";

export default {
  name: "app",
  components: { Navbar },

  data() {
    return {
      isLoading: true,
      assets: [],
    };
  },
  created() {
    (this.isLoading = true),
      api
        .getAssets()
        .then((assets) => (this.assets = assets))
        .finally(() => (this.isLoading = false));
  },
  computed: {
    getLinks() {
      return getMenuItems(this.assets);
    },
  },
};
</script>
