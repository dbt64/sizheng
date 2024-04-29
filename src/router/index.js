import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Case from "@/views/Case/index.vue";
import Detail from "@/views/Detail/index.vue";
import LayoutSetion from "@/views/Layout/components/LayoutSetion.vue";
import Resource from "@/views/Resource/index.vue";
import Element from "@/views/Element/index.vue";
import Nourish from "@/views/Nourish/index.vue";
import Special from "@/views/Special/index.vue";
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
        {
          path: "resource",
          component: Resource,
        },
        {
          path: "element",
          component: Element,
        },
        {
          path: "nourish",
          component: Nourish,
        },
        {
          path: "special",
          component: Special,
        },
      ],
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
