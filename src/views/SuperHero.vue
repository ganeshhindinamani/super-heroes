<template>
  <div class="background"></div>
  <div class="container">
    <div class="hero-container">
      <router-link :to="{ name: 'Home' }" class="search-again"
        >Search Again</router-link
      >
      <h1>{{ hero.name }}</h1>
      <div class="flex">
        <div class="hero-img">
          <img :src="image" alt="" />
        </div>
        <div class="grid">
          <div class="card">
            <h3>Fullname: {{ biography.fullName }}</h3>
          </div>
          <div class="card">
            <h3>Birthplace: {{ biography.placeOfBirth }}</h3>
          </div>
          <div class="card">
            <h3>Gender: {{ appearance.gender }}</h3>
          </div>
          <div class="card">
            <h3>Height: {{ height }}</h3>
          </div>
          <div class="card">
            <h3>Weight: {{ weight }}</h3>
          </div>
          <div class="card">
            <h3>Race: {{ appearance.race }}</h3>
          </div>
          <div class="card">
            <h3>Intelligence: {{ powerstats.intelligence }}</h3>
          </div>
          <div class="card">
            <h3>Alias: {{ alias }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      hero: "",
      biography: "",
      appearance: "",
      height: "",
      weight: "",
      alias: "",
      image: "",
      powerstats: "",
    };
  },
  mounted() {
    fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/" +
        this.id +
        ".json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.hero = data;
        this.biography = data.biography;
        this.appearance = data.appearance;
        this.powerstats = data.powerstats;
        this.height = data.appearance.height[1];
        this.weight = data.appearance.weight[1];
        this.alias = data.biography.aliases[1];
        this.image = data.images.md;
      });
  },
  methods: {
    handleClick() {
      console.log(this.hero);
    },
  },
};
</script>

<style>
.hero-container {
  padding-bottom: 2rem;
}
.hero-container h1 {
  color: #eee;
  padding: 0.5rem 0;
  background: rgba(41, 234, 248, 0.808);
  width: 80%;
  margin: 2rem auto;
  border-radius: 5px;
}
.flex {
  display: flex;
  flex-direction: column;
}
.hero-img img {
  width: 70%;
  box-shadow: 2px 2px 20px 2px #333;
}
.grid {
  text-align: center;
}
.grid .card {
  width: 70%;
}
.search-again {
  display: inline-block;
  margin-top: 1rem;
  background: violet;
  padding: 0.5rem;
  border-radius: 50px;
  box-shadow: 2px 2px 20px 2px violet;
}

@media (min-width: 600px) {
  .flex {
    flex-direction: row;
    justify-content: center;
  }
  .grid .card {
    width: 100%;
  }
}
@media (min-width: 900px) {
  .flex {
    align-items: center;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: flex-start;
  }
  .hero-img img {
    width: 90%;
    margin-right: 3rem;
  }
  .hero-container h1 {
    font-size: 3rem;
  }
}
</style>
