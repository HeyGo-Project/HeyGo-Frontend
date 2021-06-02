<template>
  <div class="uroboros">
    <div class="card" style="
      width: 1000px;
      margin: 0 auto;
      padding: 30px"
    >
      <h1 style="color: #17a2b8; font-weight: bold">Verification request</h1>

      <!--User name and picture-->
      <div>
        <h3 class="user-name-comment" style="text-align: left">
          {{
            this.$store.state.user.firstName +
            " " + this.$store.state.user.lastName +
            " ID:" + this.$store.state.user.id
          }}
        </h3>
      </div>
      <!--    message to admin-->
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message to admin</label>

          <textarea
              id="exampleFormControlTextarea1"
              class="form-control"
              rows="3"
              v-model="message"
          >

          </textarea>

        </div>
      </div>
      <div>
        <ol style=" text-align: left">
          <li>You need to send Image of your ID card or passport that confirms your identity.</li>
          <li>You need to send PDF document with certificates of adequacy</li>
        </ol>
        <div class="card" style="width: 18rem; text-align: left">
          <div class="card-header">
            Upload your ID's
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <span style="font-weight: bold">Send image of your ID </span>
              <input type="file" id="imgFile">
            </li>
            <li class="list-group-item">
              <span style="font-weight: bold">Send pdf with your certificates </span>
              <input type="file" id="pdfFile">
            </li>
          </ul>
        </div>
      </div>

      <button
          class="btn text-white"
          style="background: #17a2b8;
          width: 300px;margin-top: 15px"
          @click="sendRequest()"
      >
        <span class="font-weight-bold">Send verification request</span>
      </button>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Request",
  data(){
    return{
      message: "",

    }
  },
  beforeCreate() {
    axios
        .get(
            "http://localhost:8080/gateway-client/root-service/clients/token",
            {
              headers: {
                token: `${this.$store.state.token}`
              }
            }
        )
        .then(res => {
          this.$store.state.user = {
            id: res.data.id,
            email: res.data.email,
            birthDate: res.data.birthDate,
            lastName: res.data.lastName,
            firstName: res.data.firstName,
            gender: res.data.gender,
            verified: res.data.verified,
          }
          console.log(res.data);
        })
        .catch(error => {
          console.error(error);
        });
  },
  methods:{
    sendRequest(){
      // //converting image:
      // const imgBase64 = (document.getElementById("imgFile").files[0])
      // const imgReader = new FileReader();
      // const sourceIMG = imgReader.readAsDataURL(imgBase64);
      //

      //converting pdf
      const pdfBase64 = document.getElementById("pdfFile").files[0]
      const pdfReader = new FileReader();
      pdfReader.readAsDataURL(pdfBase64);

      const user = this.$store.state.user

      pdfReader.onload = () => {
        const pdfURL = pdfReader.result.split(',')[1]

        const validationRequest = {
          clientId: user.id,
          comment: this.message,
          fullName: user.firstName +" "+ user.lastName,
          id: 0,
          imageLink: "string",
          passport: pdfURL,
          personWPassport: pdfURL,
          touristId: 0
        }

        axios.post("/gateway-client/root-service/validation_requests", validationRequest)
            .then(
                response => {
                  alert(response.data.id)
                }
            )
      }






      // const pdfReader = new FileReader();
      // pdfReader.readAsDataURL(pdfBase64.files[0]);
      // pdfReader.onload = function (){
      //   pdfURL = pdfReader.result
      //   const validationRequest = {
      //         clientId: this.$store.state.user.id,
      //         comment: this.message,
      //         fullName: this.$store.state.user.firstName +" "+ this.$store.state.user.lastName,
      //         id: 0,
      //         imageLink: "string",
      //         passport: pdfURL,
      //         personWPassport: pdfURL,
      //         touristId: 0
      //       }
      //   axios.post("/gateway-client/root-service/validation_requests", validationRequest)
      //         .then(
      //             response => {
      //               alert(response.data.id)
      //             }
      //         )
      // }

      //
      // imgReader.onload = function () {
      //   imgURL = imgReader.result
      //
      //   const validationRequest = {
      //     clientId: this.$store.state.user.id,
      //     comment: this.message,
      //     fullName: this.$store.state.user.firstName +" "+ this.$store.state.user.lastName,
      //     id: 0,
      //     imageLink: "string",
      //     passport: imgURL,
      //     personWPassport: pdfURL,
      //     touristId: 0
      //   }
      //
      //   axios.post("/gateway-client/root-service/validation_requests", validationRequest)
      //       .then(
      //           response => {
      //             alert(response.data.id)
      //           }
      //       )
      // };







    }
  }
}
</script>

<style scoped>
.uroboros {
  margin-top: 8%;

}
</style>
