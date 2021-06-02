<template>
  <div class="main container my-3 py-5 text-center">

    <div style="margin-top: 8%">
      <h1>Search guides</h1>
      <input
          class="form-control"
          placeholder="A guide's name"
          v-model="search"
          type="text"
      >
    </div>

    <section id="guide">
      <div class="text-center">
        <div class="row" style="margin: auto">
          <!--          <div class="col-lg-3 col-md-6">-->
          <div
              v-for="guide in filteredGuides"
              :class="[{ professional: guide.professional }]"
              class="card"
              style="flex-shrink: 3;
               margin: 120px 25px 10px;
               height: auto;
               padding: 30px;
               width: 300px;"
          >
            <div class="" >
              <img :src="guide.imgUrl" alt="" class="img-fluid" @click.alt="alert('sadsadad ')"/>
              <h3>{{ guide.firstName + " " + guide.lastName }}</h3>
              <h5>{{ guide.position }}</h5>
              <p>
                {{ guide.legend }}
              </p>
            </div>
          </div>
          <!--          </div>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Card",
  computed: {
    guides() {
      return this.$store.state.guides
    },
    filteredGuides() {
      return this.$store.state.guides.filter(guide => {
        return guide.firstName.indexOf(this.search) !== -1
      })
    }
  },
  mounted() {
    axios.get(
      "/gateway-client/root-service/guides",
      null
    )
      .then(res => {
      for (let i = 0; i < res.data.length; i++){

        axios.get(
          "/gateway-client/root-service/clients/"+res.data[i].clientId,
          null
        )
          .then(res => {
            console.log(res.data);
            this.$store.state.guides = res
          })
          .catch(error => {
            console.error(error);
          });
      }

      })
      .catch(error => {
        console.error(error);
      });
  },
  data() {
    return {
      search: '',
    }
  }





  // axios.get("/gateway-client/root-service/"+res.data.clientId ).then(res => {
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
  border-radius: 5px;
  box-shadow: 5px 5px 15px #e74c3c;
  margin-top: 80px;
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
  border-radius: 5px;
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
