<template>
  <div class="d-flex justify-content-center align-items-center h-50">
    <main class="form-signin col-3 text-center">
      <form autocomplete="off">
        <h1 class="h3 mb-3 fw-normal">
          Пожалуйста,<br />
          зарегистрируйтесь
        </h1>

        <div class="form-floating">
          <input
            v-model="email"
            required
            type="email"
            class="form-control form"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Почта</label>
        </div>
        <div class="form-floating mb-3 parrent-pass">
          <input
            v-model.trim="password"
            required
            autocomplete="new-password"
            :type="showButton ? 'password' : 'text'"
            class="form-control form-pass"
            id="floatingPassword"
            placeholder="Password"
          />
          <button v-on:click.prevent="changeStatePass" class="hidePassword">
            <img
              v-show="!showButton && password"
              src="@/assets/icons/eye-slash.svg"
              alt="eye-slash"
            />
            <img
              v-show="showButton && password"
              src="@/assets/icons/eye.svg"
              alt="eye"
            />
          </button>
          <label for="floatingPassword">Пароль</label>
        </div>

        <button
          class="w-100 btn btn-lg btn-primary"
          :disabled="processing  || !email || !password"
          @click.prevent="signup"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <div
          class="alert alert-warning d-flex align-items-center"
          role="alert"
          :value="error"
          v-if="error && !hideError"
        >
          <div>
            {{ errorMsg }}
          </div>
        </div>
        <router-link to="/login" class="stretched-link"
          >Авторизоваться</router-link
        >
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      showButton: true,
      hideError: false,
       errors: {
        'Password should be at least 6 characters':'Пароль должен быть длиннее 6 символов',
        'The email address is badly formatted.':'Некорректный email',
        'The email address is already in use by another account.':'Эта почта уже используется'   
      }
    };
  },
  methods: {
    signup() {
      this.hideError=false
      this.$store.dispatch("SIGNUP", {
        email: this.email,
        password: this.password,
      });
    },
    changeStatePass() {
      this.showButton = !this.showButton;
    },
  },
  computed: {
    processing() {
      return this.$store.getters.getProcessing;
    },
    error() {
      return this.$store.getters.getError;
    },
    errorMsg () {
      return this.errors[this.error]
    },
    
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.hideError=true
  }
};
</script>

<style scoped>
.stretched-link::after {
  position: relative;
}
.form {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  margin-bottom: 4px;
}
.form-pass {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.parrent-pass {
  position: relative;
}
.hidePassword {
  position: absolute;
  right: 8px;
  top: 16px;
  background: none;
  border: none;
}
.hidePassword img {
  width: 25px;
}
</style>
