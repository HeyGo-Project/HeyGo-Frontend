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

      </div>
    </div>

    <div class="right-side">
      <div class="justify-content-start flight-depart" style="padding: 10px">
        <div class="airlines">
          <h5>
            Scat Airlines
          </h5>
        </div>
        <div class="timetable">
          <h5 style="color: crimson">
            Departure 14:00
          </h5>
          <h5>
            Duration 14:00-15:45
          </h5>

        </div>
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

.right-side{
  grid-column: 4/6;
  margin-right: 200px;
}

.flight-depart{
  border-style: solid;
  border-color: #17a2b8;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1.5rem;
  grid-auto-rows: minmax(100px, auto);
}

.airlines{
  grid-column: 1/4;
}

.timetable{
  grid-column: 4/8;
}
</style>
