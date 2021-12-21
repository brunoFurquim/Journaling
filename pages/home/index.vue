<template>
  <div
    class="
      w-full
      h-full
      home-container
      max-w-full
      flex flex-col
      justify-between
      align-center
    "
  >
    <div class="flex flex-row justify-between" v-show="false">
      <div class="w-1/4">
        <img src="/home/noted.png" alt="" width="100%" />
      </div>
    </div>
    <div class="flex flex-row w-full justify-between" v-show="false">
      <div class="w-1/4">
        <img src="/home/notes.png" alt="" width="100%" />
      </div>
      <div class="w-1/4">
        <img src="/home/tasks.png" alt="" width="100%" />
      </div>
    </div>
    <div class="blobs">
      <div class="blob">
        <img src="/home/blob_6.svg" alt="" />
      </div>
      <div class="blob-2">
        <img src="/home/blob.svg" alt="" />
      </div>
      <div class="blob-3">
        <img src="/home/blob_5.svg" alt="" />
      </div>
      <div class="blob-4">
        <img src="/home/blob_4.svg" alt="" />
      </div>
      <div class="blob-6">
        <img src="/home/blob_6.svg" alt="" />
      </div>
    </div>

    <div
      class="
        text-container
        flex flex-col
        w-full
        h-full
        justify-start
        items-center
      "
    >
      <span
        class="
          font-black
          uppercase
          text
          mt-10
          flex flex-row
          justify-center
          items-center
        "
        ><outline-fire-icon class="w-10 h-10 mr-5" />
        Bem vindo ao FireNote
        <outline-fire-icon class="w-10 h-10 ml-5"
      /></span>
      <span class="font-semibold uppercase subtext mt-2"
        >Comece a tomar notas agora</span
      >

      <div
        class="
          home-note-taker
          h-3/5
          w-3/5
          shadow-2xl
          flex flex-row
          justify-center
          items-center
          mt-10
        "
      >
        <outline-fire-icon class="w-2/5 h-2/5 opacity-10" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-container {
  overflow: hidden !important;

  .blobs {
    position: relative;
    top: 0px;
    left: 0px;
    max-height: 100%;
    max-width: 100%;

    .blob {
      position: absolute;
      left: -25%;
      bottom: 50%;
      z-index: 1;
      width: 75%;
    }

    .blob-2 {
      position: relative;
      left: 50%;
      top: -30%;
      width: 110%;
      z-index: 5;
    }

    .blob-3 {
      position: absolute;
      left: -20%;
      z-index: 2;
      top: -20%;

      width: 120%;
    }

    .blob-4 {
      position: absolute;
      left: 15%;
      top: -15%;
      z-index: 3;
      width: 110%;
    }

    .blob-6 {
      position: absolute;
      left: 35%;
      bottom: 50%;
      z-index: 2;
      width: 75%;
    }
  }

  .text-container {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;

    .text {
      font-size: 56px;
      z-index: 10;
    }

    .subtext {
      font-size: 26px;
      z-index: 10;
    }

    .home-note-taker {
      background-color: white;
      opacity: 60%;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }
    }
  }
}
</style>