//导入 进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/components/Layout/index.vue'
import navPage from '@/views/index.vue'

const routes = [
  {
    path: "/",
    name: "Nav",
    meta: {
      name: '导航'
    },
    component: navPage
  },
  {
    path: '/',
    name: 'Layout',
    meta: {
      name: 'Layout'
    },
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          name: "首页",
        },
        component: () => import('@/views/home/home.vue'),
      },
      {
        path: "/archives",
        name: "Archives",
        meta: {
          name: "时间轴",
        },
        component: () => import("@/views/archives/archives.vue"),
      },
      {
        path: "/category",
        name: "Category",
        meta: {
          name: "分类",
        },
        component: () => import("@/views/category/category.vue"),
      },
      {
        path: "/tag",
        name: "Tag",
        meta: {
          name: "标签",
        },
        component: () => import("@/views/tag/tag.vue"),
      },
      {
        path: "/article",
        name: "Article",
        meta: {
          name: "文章",
        },
        component: () => import("@/views/article/article.vue"),
      },
      {
        path: "/articleList",
        name: "ArticleList",
        meta: {
          name: "文章列表",
        },
        component: () => import("@/views/article/article-list.vue"),
      },
      // {
      //   path: "/photoAlbum",
      //   name: "PhotoAlbum",
      //   meta: {
      //     name: "相册",
      //   },
      //   component: () => import("@/views/photo/photo-album.vue"),
      // },
      // {
      //   path: "/photos",
      //   name: "Photos",
      //   meta: {
      //     name: "图库",
      //   },
      //   component: () => import("@/views/photo/photos.vue"),
      // },
      // {
      //   path: "/talk",
      //   name: "Talk",
      //   meta: {
      //     name: "说说",
      //   },
      //   component: () => import("@/views/talk/talk.vue"),
      // },

      // {
      //   path: "/resources",
      //   name: "Resources",
      //   meta: {
      //     name: "资源导航",
      //   },
      //   children: [
      //     {
      //       path: "/resources/front",
      //       name: "Front",
      //       meta: {
      //         name: "前端",
      //       },
      //       component: () => import("@/views/resources/category-list.vue"),
      //     },
      //     {
      //       path: "/resources/back",
      //       name: "Back",
      //       meta: {
      //         name: "后端",
      //       },
      //       component: () => import("@/views/resources/category-list.vue"),
      //     },
      //     {
      //       path: "/resources/link",
      //       name: "Link",
      //       meta: {
      //         name: "友链",
      //       },
      //       component: () => import("@/views/links/link-list.vue"),
      //     },
      //   ],
      // },
      // {
      //   path: "/siteList",
      //   name: "SiteList",
      //   meta: {
      //     name: "网站列表",
      //   },
      //   component: () => import("@/views/resources/site-list.vue"),
      // },
      {
        path: "/userCenter",
        name: "UserCenter",
        meta: {
          name: "个人中心",
        },
        component: () => import("@/views/user/user-center.vue"),
      },
      // {
      //   path: "/message",
      //   name: "Message",
      //   meta: {
      //     name: "留言",
      //   },
      //   // component: () => import("@/views/message/index.vue"),

      //   children: [
      //     {
      //       path: "list",
      //       name: "Message",
      //       meta: {
      //         name: "留言",
      //       },
      //       component: () => import("@/views/message/index.vue"),
      //     },
      //     {
      //       path: "publish",
      //       name: "publish",
      //       meta: {
      //         name: "编辑/新增留言",
      //       },
      //       component: () => import("@/views/message/publish.vue"),
      //     },
      //     {
      //       path: "detail",
      //       name: "MessageDetail",
      //       meta: {
      //         name: "留言详情",
      //       },
      //       component: () => import("@/views/message/detail.vue"),
      //     }
      //   ]
      // },
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      name: "用户登录",
    },
    component: () => import("@/views/user/login-register.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      name: "用户注册",
    },
    component: () => import("@/views/user/login-register.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    meta: {
      name: "404 not found",
    },
    component: () => import("@/views/404/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;