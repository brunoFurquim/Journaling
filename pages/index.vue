<template>
  <div class="j__container">
    <!-- <div class="j__header">
      <header-comp />
    </div> -->
    <div class="j__sidebar w-1/6 z-40">
      <sidebar/>
    </div>
    <div class="j__content w-5/6 z-0">
      <component v-if="current !== undefined" :is="current"/>
    </div>
  </div>
</template>

<script>
import header from "~/components/header.vue";
import sidebar from "~/components/sidebar/index.vue";

import home from '~/pages/home/index.vue';
import journal from '~/pages/journal/index.vue';
import tasks from '~/pages/tasks/index.vue';
export default {
  name: "IndexPage",
  components: {
    "header-comp": header,
    sidebar,
    home,
    journal,
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
    current() {
      switch (this.$store.getters['controller/current']) {
        case 'home':
          return home;
        case 'journal':
          return journal;
        case 'tasks':
          return tasks;
        default:
          return home;
      }
    }
  },
};
</script>

<style lang="scss">
@mixin poppins {
  font-family: 'Poppins';
}

.j__container {
  display: flex;
  flex-direction: row;
  .j__header {
    position: relative;
    z-index: 1;
    top: 0px;
    @include poppins();
  }

  .j__sidebar {
    z-index: 2;
    height: 100%;
    @include poppins();
  }

  .j__content {
    position: relative;
    z-index: 2;
    height: 100%;
    @include poppins();
  }
}


html,
body,
#__nuxt,
#__layout,
.j__container {
  height: 100% !important;
  width: 100% !important;
}
</style>
