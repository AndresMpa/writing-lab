import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomePage from "@/pages/init/HomePage.vue";
import { useUserStore } from "@/stores/userStore";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    meta: {
      public: true,
    },
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "/faq",
        name: "faq",
        component: () => import("@/pages/init/FAQPage.vue"),
      },
    ],
  },
  {
    path: "/profile",
    component: DefaultLayout,
    meta: {
      public: false,
      auth: true,
    },
    children: [
      {
        path: "/settings",
        name: "settings",
        component: () => import("@/pages/profile/SettingsPage.vue"),
      },
    ],
  },
  {
    path: "/collaborative",
    component: () => import("@/layouts/CollaborativeLayout.vue"),
    meta: {
      public: false,
      auth: true,
    },
    children: [
      {
        path: "",
        name: "collaborative",
        meta: {
          nickname: "Collaborative",
        },
        component: () => import("@/pages/collaborative/CollaborativePage.vue"),
      },
      {
        path: "/get-insights",
        name: "getInsights",
        meta: {
          nickname: "Get Insights",
        },
        component: () => import("@/pages/collaborative/GetInsightsPage.vue"),
      },
      {
        path: "/meaningful-experiences",
        name: "meaningfulExperiences",
        meta: {
          nickname: "Meaningful Experiences",
        },
        component: () =>
          import("@/pages/collaborative/MeaningfulExperiencesPage.vue"),
      },
      {
        path: "/wonder-how-could",
        name: "wonderHowCould",
        meta: {
          nickname: "I Wonder How I Could",
        },
        component: () => import("@/pages/collaborative/WonderHowCouldPage.vue"),
      },
      {
        path: "/work-together",
        name: "workTogether",
        meta: {
          nickname: "Let's Work Together",
        },
        component: () => import("@/pages/collaborative/WorkTogether.vue"),
      },
    ],
  },

  {
    path: "/entry",
    component: () => import("@/layouts/SimpleLayout.vue"),
    children: [
      {
        path: "/draft",
        name: "draft",
        meta: {
          public: false,
          auth: true,
        },
        component: () => import("@/pages/entry/DraftPage.vue"),
      },
      {
        path: "/post/:id",
        name: "entry",
        meta: {
          public: true,
        },
        component: () => import("@/pages/entry/PostPage.vue"),
      },
      {
        path: "/question/:id",
        name: "question",
        meta: {
          public: false,
          auth: true,
        },
        component: () => import("@/pages/entry/QuestionPage.vue"),
      },
    ],
  },
  {
    path: "/aw",
    component: DefaultLayout,
    meta: {
      public: false,
      auth: true,
    },
    children: [
      {
        path: "/basic",
        name: "awBasic",
        component: () => import("@/pages/aw/BasicPage.vue"),
      },
      {
        path: "/teaching",
        name: "awTeaching",
        component: () => import("@/pages/aw/TeachingPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/layouts/SimpleLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        meta: {
          public: true,
        },
        component: () => import("@/pages/login/LoginPage.vue"),
      },
      {
        path: "/logout",
        name: "logout",
        meta: {
          public: true,
        },
        component: () => import("@/pages/login/LogoutPage.vue"),
      },
      {
        path: "/create-account",
        name: "createAccount",
        meta: {
          public: true,
        },
        component: () => import("@/pages/login/CreateAccountPage.vue"),
      },
      {
        path: "/delete-account",
        name: "deleteAccount",
        meta: {
          auth: true,
        },
        component: () => import("@/pages/login/DeleteAccountPage.vue"),
      },
    ],
  },
  {
    path: "/error",
    name: "error",
    meta: {
      public: true,
    },
    component: () => import("@/pages/error/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((record) => record.meta.public)) {
    next();
  } else if (userStore.userId) {
    if (to.matched.some((record) => record.meta.auth)) {
      next();
    }
  } else {
    next({ name: "error" });
  }
});

export default router;
