<template>
  <div
    @click="navigate"
    :class="{'bg-secondaryQuartz': current === path, 'bg-opacity-20': current === path}"
    class="
      hover:bg-secondaryQuartz
      hover:bg-opacity-20
      sublist__item
      flex flex-row
      px-4
      justify-start
      items-center
      h-10
      w-full
      cursor-pointer
    "
  >
    <component :is="icon" class="w-6 h-6 text-secondaryQuartz" />
    <span class="ml-4 text-md text-secondaryQuartz">{{ title }}</span>
    <div
      v-if="current === path"
      class="h-6 w-1 bg-secondaryBlue rounded-full ml-auto flex flex-row justify-center items-center"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    }
  },
  computed: {
    current() {
      return this.$store.getters['controller/current']
    },
  },
  methods: {
    navigate() {
      this.$store.commit('controller/navigate', this.path)
    }
  }
};
</script>

<style>
</style>