import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/users",
    alias: "/users",
    name: "users",
    component: () => import("./components/User")
  },
  {
    path: "/users/profile/:id",
    name: "profile",
    component: () => import("./components/Profile")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;