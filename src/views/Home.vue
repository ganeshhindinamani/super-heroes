<template>
  <div class="background"></div>
  <div class="container">
    <div class="search">
      <h3>Search your favourite</h3>
      <h1>Hero or Villain</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="searchText" />
      </form>
    </div>
    <SearchResult :searchText="searchText" />
  </div>
</template>

<script>
import SearchResult from "../components/SearchResults.vue";

export default {
  name: "Home",
  components: { SearchResult },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
}
h1 {
  font-family: "bangers", sans-serif;
  font-size: 3rem;
  letter-spacing: 4px;
}
h3 {
  font-family: "Merienda", sans-serif;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.search {
  padding: 2rem 0;
  color: #eee;
}
.background {
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: #333;
}
.background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/mobile.jpg") center no-repeat;
  background-size: cover;
  opacity: 0.6;
}
.search input {
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid #fff;
  outline: none;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
  color: #fff;
}

@media (min-width: 600px) {
  h1 {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  .background::before {
    background-image: url("../assets/gog.jpg");
    background-position: bottom;
  }
}
</style>
