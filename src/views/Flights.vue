<template>
  <div class="my-class">
    <search/>
<!--    later add vuex to change with button -->

  </div>
</template>

<script>
import Search from "../components/Search";

export default {
  name: "Flights",
  data(){
    return{

    }
  },
  components:{
    Search,
  },
  methods:{
    setVisible(){
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
.my-class {
  margin-top: -4%;
}
</style>
