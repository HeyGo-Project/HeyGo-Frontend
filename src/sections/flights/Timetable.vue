<template>
  <div id="app" class="col-sm-12">
    <div class="offset">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>Icon</th>
          <th>Flight time</th>
          <th>Arrival time</th>
          <th>Type</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="flight in flights">
          <td>{{ flight.icon }}</td>
          <td>{{ flight.FlightTime }}</td>
          <td>{{ flight.ArrivalTime }}</td>
          <td>{{ flight.Type }}</td>
          <td>{{ flight.Price }}</td>
        </tr>
        </tbody>
      </table>
      <nav aria-label="">
        <ul class="pagination">
          <li class="page-item">
            <button type="button" class="page-link" v-if="page !== 1" @click="page--"> Previous </button>
          </li>
          <li class="page-item">
            <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
          </li>
          <li class="page-item">
            <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timetable",
  computed: {
    displayedPosts () {
      return this.paginate(this.posts);
    }
  },
  watch: {
    posts () {
      this.setPages();
    }
  },
  filters: {
    trimWords(value){
      return value.split(" ").splice(0,20).join(" ") + '...';
    }
  },

  methods:{
    // aleert(){
    //   alert("replace method with link to checkout")
    // },

  },

  data() {
    return {
      posts : [''],
      page: 1,
      perPage: 9,
      pages: [],
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
  background: white;
}

/*table, td, th {*/
/*  text-align: center;*/
/*  padding: 10px;*/
/*  border-bottom: 1px solid #ddd;*/
/*}*/

/*td{*/
/*  min-height: 25px;*/
/*}*/

/*table {*/
/*  height: 500px;*/

/*  width: 100%;*/
/*  border-collapse: collapse;*/
/*  max-width: 1000px;*/
/*  margin: 0 auto;*/
/*  background: white;*/
/*}*/

/*tr:hover {*/
/*  background-color: #f5f5f5;*/
/*}*/

button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset{
  min-width: 500px !important;
  max-width: 1300px !important;
  margin: 20px auto;
}

</style>
