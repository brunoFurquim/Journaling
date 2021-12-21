<template>
  <div class="sidebar__sublist flex flex-col mb-4">
    <div
      class="
        sublist__title
        pl-8
        pb-4
        text-secondaryBlue
        tracking-widest
        text-xl
      "
    >
      {{ title }}
    </div>
    <div class="sublist__items pl-8 pr-2">
      <item v-for="(item, index) in items" :key="index" :icon="item.icon" :title="item.title" :path="item.path"/>
    </div>
  </div>
</template>

<script>
import sublistItem from './sublist-item.vue';
export default {
  components: { 'item': sublistItem },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    items: {
      type: Array,
      default: [],
      required: true,
    }
  }
};
</script>

<style>
</style>