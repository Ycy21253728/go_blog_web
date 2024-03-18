<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    multiple
    :inline-collapsed="false"
    :open-keys="data.openKeys"
    @click="goto"
    @openChange="onOpenChange"
  >
    <template v-for="menu in data.menuList" :key="menu.name">
      <a-menu-item :key="menu" v-if="menu.children.length === 0">
        <template #icon>
          <i :class="'fa ' + menu.icon"></i>
        </template>
        <span>{{ menu.title }}</span>
      </a-menu-item>
      <a-sub-menu :key="menu.id" v-else>
        <template #icon>
          <i :class="'fa ' + menu.icon"></i>
        </template>
        <template #title>{{ menu.title }}</template>
        <a-menu-item v-for="sub_menu in menu.children" :key="sub_menu">
          <template #icon>
            <i :class="'fa ' + sub_menu.icon"></i>
          </template>
          <span>{{ sub_menu.title }}</span>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
  
  <script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import { useStore } from "@/stores/store";

const store = useStore();
const data = reactive({
  menuList: [
    {
      id: 1,
      icon: "fa-home", // icon的图片 统一用 fa
      title: "首页", // 菜单名称
      name: "home", // 路由名称
      children: [],
    },
    {
      id: 2,
      icon: "fa-user-circle-o", // icon的图片 统一用 fa
      title: "用户管理", // 菜单名称
      name: "", // 路由名称
      children: [
        {
          id: 3,
          icon: "fa-user-circle", // icon的图片 统一用 fa
          title: "用户列表", // 菜单名称
          name: "user_list", // 路由名称
        },
      ],
    },
    {
      id: 4,
      icon: "fa-user-circle-o",
      title: "图片管理",
      name: "",
      children: [
        {
          id: 5,
          icon: "fa-user-circle",
          title: "图片列表",
          name: "image_list",
        },
      ],
    },
    {
      id: 6,
      icon: "fa-user-circle-o",
      title: "广告管理",
      name: "",
      children: [
        {
          id: 7,
          icon: "fa-user-circle",
          title: "广告列表",
          name: "advert_list",
        },
      ],
    },
    {
      id: 8,
      icon: "fa-user-circle-o",
      title: "菜单管理",
      name: "",
      children: [
        {
          id: 9,
          icon: "fa-user-circle",
          title: "菜单列表",
          name: "menu_list",
        },
      ],
    },
    {
      id: 10,
      icon: "fa-user-circle-o",
      title: "日志管理",
      name: "",
      children: [
        {
          id: 11,
          icon: "fa-user-circle",
          title: "日志列表",
          name: "log_list",
        },
      ],
    },
    {
      id: 12,
      icon: "fa-user-circle",
      title: "群聊消息",
      name: "chat_list",
      children: [],
    },
    {
      id: 13,
      icon: "fa-user-circle",
      title: "消息列表",
      name: "message_list",
      children: [],
    },
    {
      id: 14,
      icon: "fa-user-circle",
      title: "文章列表",
      name: "article_list",
      children: [],
    },
    {
      id: 22,
      icon: "fa-user-circle",
      title: "添加文章",
      name: "add_article",
      children: [],
    },
    {
      id: 15,
      icon: "fa-user-circle",
      title: "标签列表",
      name: "tag_list",
      children: [],
    },
    {
      id: 16,
      icon: "fa-user-circle",
      title: "系统管理",
      name: "",
      children: [
        {
          id: 17,
          icon: "fa-user-circle",
          title: "网站设置",
          name: "system_site",
        },
        {
          id: 18,
          icon: "fa-user-circle",
          title: "邮箱设置",
          name: "system_email",
        },
        {
          id: 19,
          icon: "fa-user-circle",
          title: "七牛云设置",
          name: "system_qiniu",
        },
        {
          id: 20,
          icon: "fa-user-circle",
          title: "qq设置",
          name: "system_qq",
        },
        {
          id: 21,
          icon: "fa-user-circle",
          title: "jwt设置",
          name: "system_jwt",
        },
      ],
    },
  ],
  openKeys: [],
});
const selectedKeys = ref([]);
const router = useRouter();
const route = useRoute();

function goto(item) {
  store.addTab({
    name: item.key.name,
    title: item.key.title,
  });

  router.push({
    name: item.key.name,
  });
}

function onOpenChange(openKeys) {
  const latestOpenKey = openKeys.find(
    (key) => data.openKeys.indexOf(key) === -1
  );
  data.openKeys = latestOpenKey ? [latestOpenKey] : [];
}

function loadRoute(name) {
  if (name === undefined) {
    name = route.name;
  }
  for (const menu of data.menuList) {
    if (menu.name === name) {
      selectedKeys.value = [menu];
      return;
    }
    for (const subMenu of menu.children) {
      if (subMenu.name === name) {
        selectedKeys.value = [subMenu];
        data.openKeys = [menu.id];
        return;
      }
    }
  }
}

onBeforeRouteUpdate((to, from, next) => {
  loadRoute(to.name);
  next();
});

loadRoute();
</script>

  <style>
.ant-menu {
  background-color: var(--slide_bg);
  color: white;
}

.ant-menu-submenu-arrow {
  color: white;
}

.ant-menu-sub.ant-menu-inline {
  background-color: var(--slide_sub_bg);
}

.ant-menu-submenu-selected {
  color: inherit;
}

/* .ant-menu-inline .ant-menu-item {
  margin-top: 0;
  margin-bottom: 0;
} */
</style>