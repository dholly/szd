<template>
  <div class="wrapper" v-if="opened">

    <img class="big-image" :src="require('../../assets/img/notifications/cat.png')"/>
    <div class="content">
      <svg @click="close" class="close" width="14" height="14" viewBox="0 0 14 14" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.28261 7.0001L13.7339 1.54851C14.0887 1.1939 14.0887 0.620557 13.7339 0.265953C13.3793 -0.088651 12.806 -0.088651 12.4514 0.265953L6.99992 5.71755L1.5486 0.265953C1.19384 -0.088651 0.620668 -0.088651 0.266072 0.265953C-0.0886906 0.620557 -0.0886906 1.1939 0.266072 1.54851L5.71739 7.0001L0.266072 12.4517C-0.0886906 12.8063 -0.0886906 13.3797 0.266072 13.7343C0.442789 13.9111 0.675145 14 0.907335 14C1.13953 14 1.37172 13.9111 1.5486 13.7343L6.99992 8.28266L12.4514 13.7343C12.6283 13.9111 12.8605 14 13.0927 14C13.3249 14 13.557 13.9111 13.7339 13.7343C14.0887 13.3797 14.0887 12.8063 13.7339 12.4517L8.28261 7.0001Z"
            fill="#777D88"/>
      </svg>
      <div class="title">
        Follow CyberCrunch in social network
      </div>
      <div class="buttons-block">
        <button @click="close" class="base-button follow">
          <img src="../../assets/img/icons/twitter.svg"/>
          Follow @CyberCrunch
        </button>

        <button  @click="close" class="base-button facebook">
          <img src="../../assets/img/icons/facebook.svg"/>
          Follow @CyberCrunch
        </button>

        <button @click="close" class="base-button instagram">
          <img src="../../assets/img/icons/instagram.svg"/>
          Follow @CyberCrunch
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "subscribeNotification",
  data() {

    return {
      opened: true,
    }
  },

  methods: {
    close() {
      this.opened = false;
    }

  },
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 10px;
  box-shadow: 0px 4px 9px #D6D7DD;
  z-index: 40;
  position: fixed;
  max-width: 100%;
  bottom: 0;
  left: 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  background: white;

  .title {
    color: #26292D;
    font-weight: 900;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 15px;
    @media (max-width: 500px) {
      font-size: 18px;

    }
  }

  .content {
    position: relative;
  }

  .buttons-block {
    display: flex;
    flex-wrap: wrap;
  }

  .base-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .big-image {
    display: block;
    height: 130px;
    width: auto;
    margin-right: 10px;
    @media (max-width: 500px) {
      display: none;

    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 10px;

  }
}


</style>