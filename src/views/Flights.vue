<template>
  <div class="my-class">

    <!--        <td>Icon</td>-->
    <!--        <td>Flight time</td>-->
    <!--        <td>Arrival time</td>-->
    <!--        <td>Type</td>-->
    <!--        <td>Price</td>-->
    <table>
      <tr>
        <th>Icon</th>
        <th>Flight time</th>
        <th>Arrival time</th>
        <th>Type</th>
        <th>Price</th>
      </tr>
      <tr v-for="flight in flights">
        <td>{{ flight.icon }}</td>
        <td>{{ flight.FlightTime }}</td>
        <td>{{ flight.ArrivalTime }}</td>
        <td>{{ flight.Type }}</td>
        <td>{{ flight.Price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Flights",

  data() {
    return {
      flights: [
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },
        {
          icon: 'iconSrc',
          FlightTime: '1h 45m',
          ArrivalTime: '7:00AM - 8:45AM',
          Type: 'Nonstop',
          Price: '$24',
        },

      ]
    }
  }
}


</script>

<style scoped>
.my-class {
  margin-top: 8%;
}

table, td, th {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

td{
  min-height: 25px;
}

table {
  width: 100%;
  border-collapse: collapse;
  max-width: 1000px;
  margin: 0 auto;
}

tr:hover {
  background-color: #f5f5f5;
}


</style>
