<template>
  <div>
    <div class="hotel-container">
      <div
          v-for="hotels in searchData"
          :key="hotels.city"
          class="hotel-list"
      >
        <img :src="hotels.imgUrl" alt=""/>
        <div class="details">
          <p id="name">{{ hotels.name }}</p>
          <p id="city">{{ hotels.city }}</p>
          <p id="klass">{{ hotels.klass }}</p>
          <p id="support">{{ hotels.support }}</p>
          <p id="beds">{{ hotels.beds }}</p>
          <p id="roomsRemain">{{ hotels.roomsRemain }}</p>
        </div>
        <div class="actions">
          <div class="rate" style="color: #ece94c">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
       x
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "SearchHotelsList",
  props: ["searchData"]
};
</script>

<style lang="scss" scoped>
.hotel-container {
  margin: 100px 20px 20px 0;
}

.hotel-list {
  display: flex;
  background: white;
  box-shadow: 0 3px 5px rgba(0.2, 0, 0, 0.2);
  width: 100%;
  border-radius: 15px;
  margin: 20px 20px 20px 0;
  padding: 5px 0 5px 5px;
}

p {
  color: black;
}

.hotel-list img {
  width: 240px;
  height: 240px;
  border-radius: 10px;
}

.details {
  margin: 5px 20px 0 20px;
  text-align: left;
  width: 100%;
}

#name {
  font-size: 20px;
}

#city {
  font-size: 12px;
  margin-top: -14px;
  margin-right: 10px;
}

#klass {
  font-size: 12px;
}

#support {
  font-weight: bold;
  color: #439B24;
  margin-top: -5px;
}

#beds {
  margin-top: 30px;
  font-size: 12px;
}

#roomsRemain {
  font-size: 12px;
  font-weight: bold;
  color: #FF0000;
}

.actions {
  margin-left: 300px;
}

.rate {
  margin-left: 60px;
}

#availability {
  margin-top: 160px;
  margin-right: 20px;
  height: 50px;
  width: 150px;
  font-size: 14px;
}
</style>
