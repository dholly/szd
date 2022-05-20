<template>
  <div class="wrapper">
    <img :src="require('../../assets/img/notifications/cat.png')"/>

  </div>
</template>

<script>
export default {
  name: "subscribeNotification",
}
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
}


</style>