<template>
  <header class="p-3 border-bottom fixing container-fluid" >
    <div class="container-fluid fixing-inner" >
      <div class="d-flex align-items-center">
        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>{{ time }}</li>
        </ul>

        <div v-if="isUserAuthenticated" class="dropdown text-end">
          <a
            href="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              :src="photo"
              alt="photo"
              width="32"
              height="32"
              class="rounded-circle avatar"
            />
          </a>
          <ul
            class="dropdown-menu text-small"
            aria-labelledby="dropdownUser1"
            style=""
          >
            <li>
              <router-link to="/results" class="dropdown-item" href="#"
                >Результаты</router-link
              >
            </li>
            <li>
              <router-link to="/settings" class="dropdown-item" href="#"
                >Настройки</router-link
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" @click="signout">Выйти</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="header-height"></div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      time: new Date().toLocaleString(),
    };
  },

  mounted() {
    setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1000);
  },
  methods: {
    async signout() {
      await this.$store.dispatch("SIGNOUT");
      this.$router.push("/login");
    },
  },
  computed: {
    photo() {
      return this.$store.getters.photo;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
  },
};
</script>

<style scoped>
.avatar {
  object-fit: cover;
}


.fixing {
background-color: white;  
position: fixed; 
left: 0; 
z-index: 20;
}

.fixing-inner {
  padding-left: 280px;
}
.header-height {
  height: 65px;
}
</style>
