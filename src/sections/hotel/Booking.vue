<template>
  <div id="booking" class="section">
    <div class="section-center">
      <div class="container">
        <div class="slogan">
          <div>
            <h1 style="">It's more than just a trip</h1>
          </div>
        </div>
        <div class="row">
        </div>
        <div class="booking-form">
          <form @submit.prevent="findHotel">
            <div class="row no-margin">
              <div class="col-md-9">
                <div class="form-group">
                  <span class="form-label">Destination</span>
                  <label>
                    <input
                        class="form-control"
                        type="text"
                        placeholder="City Code"
                        v-model="city"
                    />
                  </label>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-btn">
                  <router-link to="/hotels/search" class="nav-link">
                  <button class="submit-btn">Check availability</button>
                  </router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script >
export default {
  name: "Hotels",
  data() {
    return {
      city: '',
    };
  },
  methods:{
    findHotel(){
      this.$store.dispatch('getHotelsFromCity', {
        city: this.city
      }).then(response =>{
            this.$store.state.city = this.city
          }
      )
    }
  }
};
</script>

<style scoped lang="scss">
.slogan{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.slogan h1{
  font-weight:lighter;
  color: #01a4b6;
  font-size: 80px;
  width: 600px;
}
.section {
  position: relative;
  height:60vh;
}

.section .section-center {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

#booking {
  font-family: 'Poppins', sans-serif;
  background-image: url('../../assets/Hero_1.svg');
  background-size: auto;
  background-position: center;
  margin-top: 100px;
}

#booking::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.15);
}

.booking-form {
  border: 0.5px solid #F8F6FE;
  background: #fff;
  border-radius: 2px;
}

.booking-form>form .row.no-margin {
  margin-right: 0px;
  margin-left: 0px;
}

.booking-form>form .row.no-margin>[class*="col-"] {
  padding-right: 0px;
  padding-left: 0px;
}

.booking-form .form-group {
  position: relative;
  padding: 25px;
  margin-bottom: 0px;
  text-align: center;
}

.booking-form .form-group:after {
  content: '';
  background: rgba(129, 131, 144, 0.15);
  position: absolute;
  top: 25px;
  bottom: 0;
  right: 0px;
  width: 2px;
  height: 75px;
}

.booking-form .form-control {
  background-color: transparent;
  border-radius: 0px;
  border: none;
  height: 50px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 20px;
  color: #222;
  font-weight: 400;
  padding: 0;
}



.booking-form .form-control::placeholder {
  color: #01A4B6;
}



.booking-form select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.booking-form select.form-control+.select-arrow {
  position: absolute;
  right: 0px;
  bottom: 30px;
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: #818390;
  font-size: 14px;
}

.booking-form select.form-control+.select-arrow:after {
  content: '\279C';
  display: block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.booking-form .form-label {
  color: #01A4B6;
  display: block;
  font-weight: 400;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}

.booking-form .form-btn {
  padding: 25px;
}

.booking-form .submit-btn {
  background: #01A4B6;
  border: none;
  text-transform: capitalize;
  display: block;
  border-radius: 2px;
  width: 100%;
  height: 75px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}

@media (max-width: 400px) {
  #booking{
    margin-top: 350px;
    margin-bottom: 250px;
    background-size: auto;
  }
  .slogan h1{
    font-weight: bold;
    color: #01a4b6;
    font-size: 60px;
    width: 300px;
  }

}
</style>



