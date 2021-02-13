import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SuperHero from "../views/SuperHero.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hero/:id",
    name: "SuperHero",
    component: SuperHero,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
