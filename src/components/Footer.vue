<template>
  <div class="footer">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Footer -->
    <hr>
    <footer class="bg-white d-flex flex-column">

      <div class="container py-5">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" class="mb-3"/>
            <p class="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Services</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2" v-for="service in services" :key="service.title">
                <a href="#" class="text-muted">{{ service.title }} </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2" v-for="comp in company" :key="comp.title">
                <a href="#" class="text-muted">{{ comp.title }}</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Also available on:</h6>
            <img
              src="../../src/assets/playmarket.svg"
              width="150px"
            />
          </div>
        </div>
      </div>

      <!-- Copyrights -->
      <div class="bg-light py-4">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2">
            © 2021 HeyGo Team, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Guides",
        },
        {
          title: "flights",
        },
        {
          title: "Hotels",
        },
      ],
      company: [
        {
          title: "Login",
        },
        {
          title: "Register",
        },
        {
          title: "Wishlist",
        },
        {
          title: "Our Products",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
hr {
  margin-bottom: 0px;
}

#button-addon1 {
  color: cyan;
}

i {
  color: gray;
}

.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}

.form-control.shadow-0:focus {
  box-shadow: none;
}
</style>
