import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Case from "@/views/Case/index.vue";
import Detail from "@/views/Detail/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "case",
          component: Case,
        },
        {
          path: "detail",
          component: Detail,
        },
      ],
    },
  ],
});

export default router;
