<template>
  <div class="app">
    <SideBar />
    <div class="w-100 bg-light" style="min-height: 100vh">
      <NavBar />
      <transition name="fade"><router-view  /></transition>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";


export default {
  components: {
    SideBar,
    NavBar,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch("STATE_CHANGED", user);
    });
  },
};
</script>

<style>
.app {
  display: flex;
}
.fade-enter-active,
.fade-leave-active {
  transition: ease-in all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
body {
  overflow-x: hidden;
}


::-webkit-scrollbar-track
{
	
	background-color: #F5F5F5;
	border-radius: 10px;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgb(122,153,217)),
									   color-stop(0.72, rgb(73,125,189)),
									   color-stop(0.86, rgb(122,153,217)));
}
</style>
