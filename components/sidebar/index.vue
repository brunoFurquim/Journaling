<template>
  <div
    class="h-full w-full flex flex-col shadow-2xl bg-lightLavender bg-opacity-50 z-40"
  >
    <div class="sidebar__header h-1/6 w-full">
      <div
        class="
          header__icon
          w-full
          h-full
          flex flex-row
          justify-center
          items-center
        "
      >
        <outline-fire-icon class="w-12 h-12 text-secondaryQuartz" />
      </div>
    </div>
    <div class="sidebar__body h-5/6 flex flex-col">
      <div class="sidebar__list h-5/6">
        <sublist title="Menu" :items="menu" />
        <sublist title="Tasks" :items="tasks" />
      </div>
      <!-- <div
        class="
          sidebar__controls
          w-full
          flex flex-row
          h-1/6
          shadow-2xl
          bg-quartz
          justify-center
          items-center
        "
      >
        <div
          class="
            w-12
            rounded-2xl
            shadow-xl
            h-12
            flex
            justify-center
            items-center
            cursor-pointer
            bg-lightLavender
          "
        >
          <outline-chevron-double-left-icon
            class="w-8 h-8 p-2 text-secondaryBlue"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import sublist from "./sublist.vue";
export default {
  components: { sublist },
  data() {
    return {
      menu: [
        { title: "Home", icon: "outline-home-icon", path: "home" },
        { title: "Journal", icon: "outline-pencil-icon", path: "journal" },
      ],
      tasks: [
        {
          title: "Tasks",
          icon: "outline-clipboard-check-icon",
          path: "tasks",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sublist__item {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
</style>