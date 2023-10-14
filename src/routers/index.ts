import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../pages/Home.vue";
import LoginVue from "../pages/user/Login.vue";
import RegisterVue from "../pages/user/Register.vue";
import ProfileEditorVue from "../pages/user/ProfileEditor.vue";
import MessageVue from "../pages/user/Message.vue";
import TeamsVue from "../pages/team/Search.vue";
import CreateVue from "../pages/team/Create.vue";
import LeoTest from '../pages/LeoTest.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
    meta: {
      title: '首页',
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginVue,
    meta: {
      title: '用户登录',
    },
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterVue,
    meta: {
      title: '用户注册',
    },
  },
  {
    path: "/profileEditor",
    name: "Profile",
    component: ProfileEditorVue,
    meta: {
      title: '修改个人信息',
    },
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsVue,
    meta: {
      title: '团队',
    },
  },
  {
    path: "/create",
    name: "Create",
    component: CreateVue,
    meta: {
      title: '创建团队',
    }
  },
  {
    path: "/message",
    name: "Message",
    component: MessageVue,
    meta: {
      title: '消息通知',
    }
  },
  {
    path: "/leo",
    name: "Leo",
    component: LeoTest,
    meta: {
      title: 'Leo组件测试页',
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;

