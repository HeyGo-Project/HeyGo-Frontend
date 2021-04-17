<template>
  <div class="container">
  <SearchHotelsList :searchData="hotelData"/>
  </div>
</template>

<script>
import SearchHotelsList from "../sections/search-hotel/SearchHotelsList";
export default {
  name: "SearchHotel",
  components:{
    SearchHotelsList
  },
  data(){
    return{
      hotelData:[
        {
          imgUrl: "https://avatars.mds.yandex.net/get-altay/2433982/2a00000170d9aa8cda92c196d732af17a3e1/XXL",
          name:"Rixos",
          city: "Almaty",
          klass: "Deluxe Double Room (2 Adults + 1 Child)",
          support: "FREE cancellation ",
          beds:"1 double bed",
          roomsRemain: "Only 7 rooms left at this price on our site",
          rating:"5"
        },
        {
          imgUrl: "https://avatars.mds.yandex.net/get-altay/2433982/2a00000170d9aa8cda92c196d732af17a3e1/XXL",
          name:"Rixos",
          city: "Almaty",
          klass: "Deluxe Double Room (2 Adults + 1 Child)",
          support: "FREE cancellation",
          beds:"1 double bed",
          roomsRemain: "Only 7 rooms left at this price on our site",
          rating:"5"
        },
      ]
    }
  }
}
</script>

