<template>
  <div class="container">
    <div class="status">
      <h1 style="font-size: 90px"> Your status is:</h1>
      <h1 style="color: #20c997; font-size: 100px">OK</h1>
      <h5 style="font-size: 30px">The owner of the service will be in touch with you soon! Checkout your email</h5>
    </div>

  </div>
</template>

<script>
export default {
  name: "VuePayment",
  props:['saltValue']
};
</script>

<style scoped>
  .container{
    margin-top: 250px;
    margin-bottom: 300px;
  }
  .status{
    display: inline;
    clear:none;

  }
</style>