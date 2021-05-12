<template>
  <div class="container" style="margin-top: 8%; ">
    <h1>Hotels search</h1>
    <input type="text" class="form-control" v-model="search" style="max-width: 800px; margin: 0 auto">
    <SearchHotelsList :searchData="filteredHotels"/>
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
      search: '',
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
  },
  computed:{
    filteredHotels(){
      return this.hotelData.filter(hotel=>{
        return hotel.name.indexOf(this.search) !== -1
      })
    }
  }
}
</script>

