<template>
  <el-menu class="top-nav" :default-active="$route.path" mode="horizontal" :ellipsis="false" router>
    &ensp;
    <el-menu-item index="/">
      <el-icon>
        <House />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <div class="flex-grow" />
    <div v-show="!loginSession" :key="1" class="userStatus">
      <el-button type="primary" @click="pushToLogin" class="button">
        登录
      </el-button>
      <el-button type="primary" @click="pushToRegister" class="button">
        注册
      </el-button>
    </div>
    <el-dropdown v-show="loginSession">
      <el-menu-item>
        <el-icon>
          <List />
        </el-icon> <span>团队</span>
      </el-menu-item>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="pushToTeams"><el-icon>
              <Menu />
            </el-icon>加入队伍</el-dropdown-item>
          <el-dropdown-item @click="pushToCreate"><el-icon>
              <CirclePlusFilled />
            </el-icon>创建队伍</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-menu-item v-show="loginSession" index="/message">
      <el-icon>
        <Bell />
      </el-icon>消息
    </el-menu-item>
    <el-menu-item v-show="loginSession">
      <el-dropdown>
        <el-avatar :src="userSession.avatar" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="pushToProfileEditor"><el-icon>
                <User />
              </el-icon>修改信息</el-dropdown-item>
            <el-dropdown-item @click="pushToOut" divided><el-icon>
                <SwitchButton />
              </el-icon>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import router from "../routers";
import loginStore from '../stores/loginStore.ts';
import userStore from '../stores/userStore.ts';
import { storeToRefs } from 'pinia';

const newLoginStore = loginStore();
const { loginSession } = storeToRefs(newLoginStore);
const newUserStore = userStore();
const { userSession } = storeToRefs(newUserStore);

const pushToLogin = () => {
  router.push("/login");
};

const pushToRegister = () => {
  router.push("/register");
};

const pushToProfileEditor = () => {
  router.push("/profileEditor");
};

const pushToOut = () => {
  localStorage.clear();
  sessionStorage.clear();
  loginSession.value = false;
  userSession.value = {
    name: "Not Logged In",
    avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
  };
  router.push("/Login");
};

const pushToTeams = () => {
  router.push("/teams");
}

const pushToCreate = () => {
  router.push("/create");
}

</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.top-nav {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.userStatus {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-menu-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}</style>