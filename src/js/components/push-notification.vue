<template>
  <div class="wrapper" v-if="opened">
    <div class="upper d-flex">
      <svg @click="close" class="close" width="14" height="14" viewBox="0 0 14 14" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.28261 7.0001L13.7339 1.54851C14.0887 1.1939 14.0887 0.620557 13.7339 0.265953C13.3793 -0.088651 12.806 -0.088651 12.4514 0.265953L6.99992 5.71755L1.5486 0.265953C1.19384 -0.088651 0.620668 -0.088651 0.266072 0.265953C-0.0886906 0.620557 -0.0886906 1.1939 0.266072 1.54851L5.71739 7.0001L0.266072 12.4517C-0.0886906 12.8063 -0.0886906 13.3797 0.266072 13.7343C0.442789 13.9111 0.675145 14 0.907335 14C1.13953 14 1.37172 13.9111 1.5486 13.7343L6.99992 8.28266L12.4514 13.7343C12.6283 13.9111 12.8605 14 13.0927 14C13.3249 14 13.557 13.9111 13.7339 13.7343C14.0887 13.3797 14.0887 12.8063 13.7339 12.4517L8.28261 7.0001Z"
            fill="#777D88"/>
      </svg>

      <svg class="alarm" width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M29.4503 14.8698C28.7837 15.0485 28.0932 14.6346 27.9087 13.9458C26.9709 10.4461 24.7712 7.51061 21.7135 5.67666C21.1108 5.31539 20.8996 4.527 21.2408 3.91255C21.5822 3.29833 22.3453 3.09384 22.948 3.45511C26.5882 5.63689 29.2071 9.13294 30.3233 13.2988C30.5079 13.9875 30.1169 14.6912 29.4503 14.8698Z"
            fill="#26292D"/>
        <path
            d="M5.30206 21.3404C4.63572 21.519 3.945 21.1051 3.76044 20.4163C2.64421 16.2505 3.16445 11.9133 5.22581 8.20385C5.56713 7.58963 6.33031 7.38513 6.93301 7.7464C7.53599 8.10784 7.74724 8.89623 7.4057 9.51051C5.67432 12.6262 5.2376 16.2696 6.17533 19.7693C6.35989 20.4581 5.96863 21.1618 5.30206 21.3404Z"
            fill="#26292D"/>
        <path
            d="M30.7169 22.5952C28.4639 21.4898 26.7926 19.4397 26.131 16.9706L25.1989 13.4921C24.0225 9.10175 19.8925 6.313 15.6411 6.79962L15.28 5.45198C15.0951 4.76205 14.4047 4.34936 13.7384 4.52791C13.0718 4.70651 12.6802 5.40912 12.8651 6.09905L13.2262 7.44669C9.29997 9.15126 7.11874 13.6311 8.29515 18.0215L9.22719 21.4999C9.88878 23.969 9.46646 26.5802 8.06005 28.6767C7.70159 29.2181 7.5941 29.894 7.76525 30.5328C8.08791 31.737 9.29812 32.4624 10.4634 32.1501L30.3857 26.812C31.5508 26.4998 32.2361 25.2665 31.9135 24.0623C31.7423 23.4235 31.3113 22.8919 30.7169 22.5952V22.5952Z"
            fill="#26292D"/>
        <path
            d="M22.0032 34.407C23.9076 33.8968 25.0553 31.8071 24.8316 29.5081L17.1042 31.5786C18.0598 33.6815 20.0986 34.9174 22.0032 34.407Z"
            fill="#26292D"/>
      </svg>

      <div class="title">
        Push-notification
      </div>
    </div>
    <div class="buttons-block">
      <button @click="close" class="base-button v-allow">
        Allow Push
      </button>
      <button @click="close" class="base-button v-close">
        Maybe Later
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pushNotification",
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
  mounted() {
    console.log('da');
  },
}
</script>

<style scoped lang="scss">

.wrapper {
  position: fixed;
  max-width:100%;
  top: 0;
  left: 0;
  z-index: 40;
  padding: 32px 43px 36px 43px;
  background: #fff;
  border-top: 3px solid #bbce00;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 9px #d6d7dd;
  @media (max-width: 500px) {
    padding: 20px;

  }

  .alarm {
    margin-right: 14px;
  }

  .upper {
    position: relative;

    .title {
      font-size: 24px;
      line-height: 1.5em;
      font-weight: 900;
      margin-bottom: 25px;
      @media (max-width: 500px) {
        font-size:18px;

      }
    }

    .close {
      position: absolute;
      bottom: 100%;
      left: 105%;
      @media (max-width: 500px) {
        bottom: 90%;
        left: 95%;

      }
    }
  }

  .buttons-block {
    display: flex;

    .base-button {
      display: flex;
      padding: 10px;
      min-width: 150px;
      justify-content: center;
      align-items: center;
      flex-wrap:wrap;

      &.v-allow {
        color: #fff;
        background: #BBCE00;
        margin-right: 15px;
      }

      &.v-close {
        color: #777D88;
        background: #F0F2F5;
      }
      @media (max-width: 500px) {
        padding-left:5px;
        padding-right:5px;
        font-size:14px;
        min-width:120px;
      }
    }
  }

}
</style>