<template>
  <div class="main container my-3 py-5 text-center">
    <section id="guide" >
      <div class="text-center">
        <div class="row" >
          <div class="col-lg-3 col-md-6">
            <div
              class="card"
              v-for="guides in guidesList"
              :key="guides.firstName"
              :class="[{ professional: guides.professional }]"

            >
              <div class="card-body">
                <img :src="guides.imgUrl" alt="" class="img-fluid" />
                <h3>{{ guides.firstName + " " + guides.lastName }}</h3>
                <h5>{{ guides.position }}</h5>
                <p>
                  {{ guides.legend }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['guidesList'],
};
</script>

<style scoped>
* {
  padding: 0;
}
.main {
  font-family: Nunito, sans-serif;
  font-size: 14px;
  font-weight: 450;
  color: #777;
}
#guide {
  margin: 0;
}
#guide img {
  margin-top: -80px;
  alignment: center;
  border-radius: 50%;
  height: 130px;
  width: 130px;
  left: 50px;
  top: 20px;
  z-index: 5;
  background: white;
}
#guide i {
  font-size: 260px;
  color: #555;
}
#guide p {
  font-weight: 500;
}
#guide .card {
  border-radius: 0;
  box-shadow: 5px 5px 15px #e74c3c;
  margin-top: 70px;
}
#guide .card:hover {
  background: #e74c3c;
  color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 10px #9e9e9e;
}
#guide .card:hover h3,
#guide .card:hover i {
  color: #fff;
}
#guide h3 {
  color: black;
  font-size: 23px;
  text-align: center;
}
#guide h5,
p {
  margin-top: 10px;
}
#guide .professional {
  border-radius: 0;
  box-shadow: 5px 5px 15px #01a4b6;
}
#guide .professional:hover {
  background: #01a4b6;
  color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 10px #9e9e9e;
}
</style>
