<template>
<div>
  <v-navigation-drawer app clipped>
    <!-- -->
    <nav-list />
  </v-navigation-drawer>
  <router-view/>
</div>
</template>

<script>
import NavList from "./NavList.vue";
export default {
  components: {
    // HelloWorld,
    NavList,
  },
};
</script>