<template>
  <div class="hotels">
    <Booking :hotels="hotelsData" class="booking"/>
    <HotelsList :hotels="hotelsData" class="hotelsList"/>
  </div>
</template>

<script>
import Booking from "@/sections/hotel/Booking";
import HotelsList from "@/sections/hotel/HotelsList";
export default {
  name: "Hotels",
  components: {
    Booking,
    HotelsList
  },
  computed: {},
  data() {
    return {
      hotelsData: [
        {
          name: "Lorem ipsum",
          info: "Lorem ipsum dolor sit amet.",
          city: "Almaty",
          img: "/img/products/club-room.jpg",
          link: "/hotels"
        },
        {
          name: "Lorem ipsum",
          info: "Lorem ipsum dolor sit amet.",
          city: "Almaty",
          img: "/img/products/airplane.jpg",
          link: "/flights"
        },
        {
          name: "Lorem ipsum",
          info: "Lorem ipsum dolor sit amet.",
          city: "Almaty",
          img: "/img/products/tour-guide.jpg",
          link: "/guides"
        },
      ]
    };
  }
};
</script>

<style scoped lang="scss">

</style>
