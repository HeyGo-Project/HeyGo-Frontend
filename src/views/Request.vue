<template>
  <div class="uroboros">
    <div class="card" style="
      width: 1000px;
      margin: 0 auto;
      padding: 30px"
    >
      <h1>Verification request</h1>

      <!--User name and picture-->
      <div>
        <h3 class="user-name-comment" style="text-align: left">
          {{ this.$store.state.user.firstName + " " + this.$store.state.user.lastName }}
        </h3>
      </div>
      <!--    message to admin-->
      <div>
        <h1>{{this.$store.state.user.id}}</h1>
      </div>
      <!--    send files-->
      <!--    <div class="" style="float: left">-->
      <!--      <h5>Send image or pdf of your ID </h5>-->
      <!--      <input type="file">-->

      <!--      <h5>Send image of your face next to your ID card </h5>-->
      <!--      <input type="file">-->
      <!--    </div>-->
      <button class="btn text-white " style="background: #17a2b8; width: 300px">
        <span class="font-weight-bold">Send verification request</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Request"
}
</script>

<style scoped>
.uroboros {
  margin-top: 8%;

}
</style>
