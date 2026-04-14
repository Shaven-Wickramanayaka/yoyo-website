import { createRouter, createWebHistory } from "vue-router";
// Use pages instead of views
import Home from "../pages/Home.vue";
import Collections from "../pages/Collections.vue";
import Checkout from "../pages/Checkout.vue";
import Profile from "../pages/Profile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/collections",
    name: "Collections",
    component: Collections,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    // TODO Add auth checking
  }
});
export default router;
