<template>
  <div class="container " >
    <Searchbar class="search"/>
    <Card :guidesList="userData"/>
  </div>
</template>

<script>
import Card from "../sections/guides/Card";
import Searchbar from "../sections/guides/Searchbar";
export default {
  name: "Guidelist",
  components:{
    Card,
    Searchbar
  },
  data() {
    return {
      userData: [
        {
          imgUrl:
            "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
          firstName: "Alisher",
          lastName: "Zharmukhambetov",
          position: "Professional guide",
          professional: true,
          legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          imgUrl:
            "https://www.indiewire.com/wp-content/uploads/2020/12/lord-of-rings-1.png",
          firstName: "Alisher",
          lastName: "Zharmukhambetov",
          position: "Professional guide",
          professional: false,
          legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          imgUrl:
            "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
          firstName: "Alisher",
          lastName: "Zharmukhambetov",
          position: "Professional guide",
          professional: false,
          legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          imgUrl:
            "https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg",
          firstName: "Alisher",
          lastName: "Zharmukhambetov",
          position: "Professional guide",
          professional: true,
          legend: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
      ]
    };
  }
};
</script>

<style>
.search{
  margin-top: 100px;
}
</style>
