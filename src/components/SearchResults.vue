<template>
  <div v-if="searchText.length">
    <div v-for="hero in filteredHeroes" :key="hero.id">
      <router-link
        :to="{ name: 'SuperHero', params: { id: hero.id } }"
        class="card show"
      >
        <img :src="hero.images.sm" alt="" />
        <h2>{{ hero.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchText"],
  data() {
    return {
      heroesList: [],
    };
  },
  computed: {
    filteredHeroes() {
      return this.heroesList.filter((hero) =>
        hero.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  mounted() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((data) => (this.heroesList = data));
  },
  methods: {},
};
</script>

<style>
img {
  width: 100%;
}
.show {
  display: flex;
}
.card {
  width: 300px;
  align-items: center;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 4px;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
}
.show img {
  width: 30%;
  margin-right: 2rem;
}
.show h2 {
  width: 70%;
}
a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-family: "merienda", sans-serif;
}
</style>
