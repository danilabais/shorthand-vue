<template>
  <div class="d-flex justify-content-center align-items-center h-50">
    <main class="form-signin col-3 text-center">
      <form>
        <h1 class="h3 mb-3 fw-normal">
          Пожалуйста,<br />
          авторизуйтесь
        </h1>

        <div class="form-floating">
          <input
            v-model.trim="email"
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
            v-model="password"
            required
            :type="showButton?'password':'text'"
            class="form-control form-pass pass"
            id="floatingPassword"
            placeholder="Password"
            
          />
          <button v-on:click.prevent="changeStatePass"  class="hidePassword">
            <img v-show="!showButton && password" src="@/assets/icons/eye-slash.svg" alt="eye-slash">
            <img  v-show="showButton  && password" src="@/assets/icons/eye.svg" alt="eye">
          </button>
          
          <label for="floatingPassword">Пароль</label>
        </div>

        <button
          class="w-100 btn btn-lg btn-primary"
          :disabled="processing || !email || !password"
          @click.prevent="signin"
          type="submit"
        >
          Войти
        </button>
        <div
          class="alert alert-warning d-flex align-items-center mb-2"
          role="alert"
          :value="error"
          v-if="error && !hideError"
        >
          <div>
            {{ errorMsg }}
          </div>
        </div>
        <router-link to="/register" class="stretched-link"
          >Зарегистрироваться</router-link
        >
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      showButton:true,
      hideError: false,
      errors: {
        'There is no user record corresponding to this identifier. The user may have been deleted.':'Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.',
        'The password is invalid or the user does not have a password.':'Неверный пароль',
        'The email address is badly formatted.':'Некорректный email.'
      }
    };
  },
  methods: {
    signin() {
      this.$store.dispatch("SIGNIN", {
        email: this.email,
        password: this.password,
      });
    },
    changeStatePass() {
       this.showButton=!this.showButton
    },
   
  },
  computed: {
    processing() {
      return this.$store.getters.getProcessing;
    },
    error() {
      return this.$store.getters.getError;
    },
    errorMsg: function () {
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
    Mounted() {
    this.hideError=false
    }
  },
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

.parrent-pass{
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
