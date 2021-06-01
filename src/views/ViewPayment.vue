<template>
  <div class="container">
    <div class="status">
      <h1> Your status is:</h1>
      <h1>{{saltValue}}</h1>
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
    margin-top: 100px;
    margin-bottom: 500px;
  }
  .status{
    display: inline;
    clear:none;

  }
</style>