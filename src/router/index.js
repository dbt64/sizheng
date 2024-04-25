import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Case from "@/views/Case/index.vue";
import Detail from "@/views/Detail/index.vue";
import LayoutSetion from "@/views/Layout/components/LayoutSetion.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: LayoutSetion,
        },
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
