import { createRouter, createWebHistory } from "vue-router";
// Use pages instead of views
import Home from "../pages/Home.vue";
import Collection from "../pages/Collection.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
// router.beforeEach(async (to) => {
//   if (to.meta.requiresAuth) {
//     const user = await getCurrentUser();
//     if (!user) {
//       alert("Please log in first");
//       return "/login";
//     }
//   }
// });
export default router;
