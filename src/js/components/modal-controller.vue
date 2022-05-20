<template>
  <div>
    <pushNotification/>
    <subscribeNotification/>
  </div>
</template>

<script>
import pushNotification from "./push-notification.vue";
import subscribeNotification from "./subscribe-notification.vue";

export default {
  name: "modalController",
  components: {subscribeNotification,pushNotification}
}
</script>

<style scoped>

</style>