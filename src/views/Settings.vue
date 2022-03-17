<template>
  <main class="container-sm">
    <div class="py-5 text-center">
      <img
        class="d-block mx-auto mb-3 image"
        :src="photo"
        alt="avatar"
        v-if="!isLoadingPhoto"
        width="200"
        height="200"
      />
      <div
        class="d-block mx-auto mb-3 image d-flex justify-content-center align-items-center"
        src="@/assets/logo.png"
        v-if="isLoadingPhoto"
        alt="avatar"
        width="200"
        height="200"
      >
        <span class="h3">Загрузка фото &nbsp;</span
        ><span
          class="spinner-border spinner-border-xxl"
          role="status"
          aria-hidden="true"
        ></span>
      </div>
      <h2>
        Ваш никнейм: <strong>{{ name }}</strong>
      </h2>
      <h2>
        Ваш ID: <small>{{ uid }}</small>
      </h2>
      <p class="lead">
        На этой странице вы можете изменить настройки своего профиля и самого
        ресурса, все данные будут сохраняться на этом аккаунте
      </p>
    </div>

    <div class="row g-5">
      <div>
        <h4 class="mb-3">Настройки</h4>
        <form
          class="needs-validation"
          v-on:submit.prevent="changeInfo"
          novalidate=""
          ref="form"
        >
          <div class="row g-3">
            <div class="col-12">
              <label for="username" class="form-label">Никнейм</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  v-model.trim="nick"
                  type="text"
                  class="form-control"
                  id="username"
                  maxlength="20"
                  placeholder="никнейм"
                />
                <div class="invalid-feedback">Your username is required.</div>
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Фото</label>
              <div class="input-group mb-3">
                <input
                  ref="file"
                  accept="image/*"
                  type="file"
                  class="form-control"
                  id="inputGroupFile"
                />
                
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <button type="submit" class="w-100 btn btn-primary btn-lg">
            Сохранить настройки
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nick: "",
      previewFiles: null,
      isLoadingPhoto: false,
    };
  },
  computed: {
    name() {
      return this.$store.getters.name;
    },
    photo() {
      return this.$store.getters.photo;
    },

    uid() {
      return this.$store.getters.uid;
    },
  },
  methods: {
    async changeInfo() {
      this.isLoadingPhoto = true;
      if (this.nick == "") {
        this.nick = this.name;
      }
      await this.$store
        .dispatch("CHANGE_INFO", {
          nick: this.nick,
          photo: this.$refs.file.files,
        })
        .then(() => {
          setTimeout(() => (this.isLoadingPhoto = false), 1000);
          this.nick=''
          this.$refs.form.reset()
          
        });
    },
  },
};
</script>

<style scroped>
.image {
  height: 250px;
  object-fit: cover;
  width: 250px;
  border-radius: 50%;
}
</style>
