<template>
  <div class="main">
    <div class="checkout-form">
      <h4 style="
      color: #01a4b6;
      text-align: left;
      font-weight: bold"
      >
        Passenger information
      </h4>
      <h5 style="
      color: #a0a0a0;
      text-align: left"
      >
        Enter the required information for each traveler and be sure that it
        exactly matches the government-issued ID presented at the airport.
      </h5>

      <div style="margin-top: 50px">
        <h5 style="
            color: #555555;
            text-align: left;
            font-weight: bolder;"
        >
          Passenger 1 (Adult)
        </h5>

        <div class="input-group" style="margin-top: 30px">
          <input class="form-control"
                 placeholder="First Name"
                 style="max-width: 180px;margin-left: 15px;"
                 type="text"
          >
          <input class="form-control"
                 placeholder="Second Name"
                 style="margin-left: 15px; max-width: 180px;"
                 type="text"
          >
        </div>

        <h6 style="
            color: #555555;
            text-align: left;
            margin-top: 50px"
        >
          Contact information
        </h6>

        <div class="input-group" style="margin-top: 30px">
          <input class="form-control"
                 placeholder="Email"
                 style="max-width: 180px;margin-left: 15px;"
                 type="text"
          >
          <input class="form-control"
                 placeholder="Phone number"
                 style="margin-left: 15px; max-width: 180px;"
                 type="text"
          >
        </div>

        <h5 style="
            color: #555555;
            text-align: left;
            margin-top: 50px;
            font-weight: bolder"
        >
          Bag information
        </h5>

        <h6 style="
          color: #a0a0a0;
          text-align: left"
        >
          Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is
          also free. Second bag check fees are waived for loyalty program members.
        </h6>

        <div>
          <h5 style="
            color: #555555;
            text-align: left;
            margin-top: 100px;
            font-weight: bolder"
          >
            Payment information
          </h5>
          <input class="form-control"
                 placeholder="Card number"
                 style="max-width: 375px;margin-left: 15px;"
                 type="text"
          >
          <div class="input-group" style="margin-top: 30px">
            <input class="form-control"
                   placeholder="dd/mm/yyyy"
                   style="max-width: 180px;margin-left: 15px;"
                   type="text"
            >
            <input class="form-control"
                   placeholder="CVV code"
                   style="margin-left: 15px; max-width: 180px;"
                   type="text"
            >
          </div>

        </div>

      </div>


      <router-link  to="/checkout/summary">
        <button style="background: #17a2b8;
         float: left;
         margin-top: 30px;
         color: white;" class="btn submit-btn"
        >
          Check availability
        </button>
      </router-link>

    </div>

    <div class="right-side">
      <div class="justify-content-start flight-depart">
        <div class="airlines" style="padding: 10px;font-size: 20px; font-weight: lighter">
          <img alt="" height="50px" src="/img/products/airplane.jpg" style="border-radius: 50px" width="50px">
          <div>
            Scat Airlines
          </div>
        </div>
        <div class="timetable">
          <div style="margin-top: 15px; font-size: 20px; font-weight: lighter">
            <div style="color: #006161">
              Departure 14:00
            </div>
            <div>
              Duration 14:00-15:45
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 200px">
        <img alt="" src="/img/svg/Bag.svg">
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Checkout"
}
</script>

<style scoped>
.main {
  margin-top: 8%;
  /*grid params*/
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  grid-auto-rows: minmax(100px, auto);
}

.checkout-form {
  grid-column: 1/4;
  margin-left: 80px;
}

.right-side {
  grid-column: 4/6;
  margin-right: 200px;
}

.flight-depart {
  border-style: solid;
  border-width: 1px;
  border-color: #cdcdcd;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1.5rem;
  grid-auto-rows: minmax(100px, auto);

}

.airlines {
  grid-column: 1/4;
}

.timetable {

  grid-column: 4/8;
  border-radius: 15px;
}
</style>
