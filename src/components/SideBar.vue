<template>
  <div style="min-width: 280px; z-index:232">
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style="width: 280px; height: 100vh; position: fixed"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img src="@/assets/logo.png" class="img" alt="logo" />
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link text-white navigation"
            aria-current="page"
          >
            Главная <img src="@/assets/icons/house.svg" alt="house" />
          </router-link>
        </li>
        <li>
          <router-link
            to="/train"
            class="nav-link text-white navigation"
            aria-current="page"
          >
            Тренировка
            <img src="@/assets/icons/biceps.svg" alt="biceps" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/exam"
            class="nav-link text-white navigation"
            aria-current="page"
          >
            Экзамен
            <img
              src="@/assets/icons/mortarboard-fill.svg"
              alt="mortarboard-fill"
            />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/results"
            v-if="isUserAuthenticated"
            class="nav-link text-white navigation"
            aria-current="page"
          >
            Результаты
            <img src="@/assets/icons/award-fill.svg" alt="award-fill" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/settings"
            v-if="isUserAuthenticated"
            class="nav-link text-white navigation"
            aria-current="page"
          >
            Настройки
            <img src="@/assets/icons/gear-fill.svg" alt="gear-fill" />
          </router-link>
        </li>
       
      </ul>
      <hr />
      <div v-if="isUserAuthenticated" class="dropdown dropdown-underline">
        <a
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            :src="photo"
            alt=""
            width="40"
            height="40"
            class="rounded-circle me-2 avatar"
          />
          <strong class="nick">{{ name }}</strong>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
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

      <router-link
        to="/login"
        v-if="!isUserAuthenticated"
        class="nav-link text-white btn-link login"
        aria-current="page"
      >
        Войти / Зарегистрироваться
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    async signout() {
      await this.$store.dispatch("SIGNOUT");
      this.$router.push("/login");
    },
    async test() {
      this.$store.dispatch("GET_INFO");
    },
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    uid() {
      return this.$store.getters.uid;
    },
    name() {
      return this.$store.getters.name;
    },
    photo() {
      return this.$store.getters.photo;
    },
  },
  
};
</script>

<style scoped>
.nick {
  text-transform: uppercase;
}
.router-link-exact-active.login, .login:hover {
  text-decoration: underline;
}

.avatar {
  object-fit: cover;
}

.navigation {
  display: flex;
  justify-content: space-between;
}
.navigation img {
  width: 23px;
}
.img {
  max-width: 100%;
}
.dropdown-underline:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
