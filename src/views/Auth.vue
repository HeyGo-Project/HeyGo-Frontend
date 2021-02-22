<template>
  <div class="mx-auto" style="padding-top: 100px; width: 50rem;">
    <Authentication></Authentication>
  </div>
<!--  <div class="card" style="width: 18rem;">-->
<!--    <div class="card-body">-->
<!--      <h5 class="card-title">Card title</h5>-->
<!--      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>-->
<!--      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
<!--      <a href="#" class="card-link">Card link</a>-->
<!--      <a href="#" class="card-link">Another link</a>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import Login from "@/components/Auth/Login";
import Registration from "@/components/Auth/Registration";

export default {
  name: "Auth"
  ,
  components:{
    Registration
  }
}
</script>

<style scoped>

</style>
