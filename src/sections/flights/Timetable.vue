<template>
  <div class="my-class ">
    <div style="">
      <h3>Timetable for flight from {{ flights[0].departurePoint }} to {{ flights[0].destinationPoint }}</h3>
      <h5>date: {{ flights[0].date }}</h5>
    </div>
    <div class="data">
      <div class=""
         style="width: 1200px;
         margin: 0 auto;
         box-shadow: 0 3px 50px rgba(0, 0, 0, 0.04);"
      >
        <div class="card-body mt-5">
          <div class="row justify-content-start">
            <div class="col-3">
              <b>Airlines</b>
            </div>
            <div class="col-2">
              <b>Type</b>
            </div>
            <div class="col-2">
              <b>Duration</b>
            </div>
            <div class="col-2">
              <b>Time</b>
            </div>
            <div class="col-3">
              <b>Price</b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-3"
         style="width: 1200px;
         height: 100px;
         margin: 0 auto;
         box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);"
         v-for="flight in flights"

    >
      <div class="card-body">
        <div class="row justify-content-start">
          <div class="col-3">
            {{ flight.airlineName }}
          </div>
          <div class="col-2">
            {{ flight.typeOfFlight }}
          </div>
          <div class="col-2">
            {{ flight.flightDuration }}
          </div>
          <div class="col-2">
            {{ flight.flightTime }}
          </div>
          <div class="col-3" style="font-weight: bold">
            {{ flight.flightPrice }}
            <p>
              <router-link
                  :to="flight.link"
                  class="btn"
                  style="background: #01A4B6;
                  color: white"
              >
                Choose
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timetable",
  data() {
    return {
      flights:[
        {
          departurePoint: "NQZ",
          destinationPoint: "ALA",
          date: "29-08-2021",
          airlineName: "Scat airlines",
          typeOfFlight: "Nonstop",
          flightDuration: "1h 45m",
          flightTime: "09:35AM - 11:30AM",
          flightPrice: "$24",
          link: "/checkout",
        },
        {
          departurePoint: "NQZ",
          destinationPoint: "ALA",
          date: "29-08-2021",
          airlineName: "Scat airlines",
          typeOfFlight: "Nonstop",
          flightDuration: "1h 45m",
          flightTime: "09:35AM - 11:30AM",
          flightPrice: "$24",
          link: "/checkout",
        },
        {
          departurePoint: "NQZ",
          destinationPoint: "ALA",
          date: "29-08-2021",
          airlineName: "Scat airlines",
          typeOfFlight: "Nonstop",
          flightDuration: "1h 45m",
          flightTime: "09:35AM - 11:30AM",
          flightPrice: "$24",
          link: "/checkout",
        },
      ],

    };
  }

}

</script>

<style scoped>
.my-class {
  margin-top: 8%;

}

</style>
