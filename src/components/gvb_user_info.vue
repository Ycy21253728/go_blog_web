<template>
  <div class="gvb_user_info">
    <div class="avatar" v-if="props.isAvatar">
      <img
        src="https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E4%B8%81%E7%9C%9F&step_word=&lid=6508397515978103629&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=493045856,2313472125&os=140252281,18818410&simid=493045856,2313472125&pn=15&rn=1&di=7264239678495129601&ln=1723&fr=&fmq=1707404008726_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=1e&objurl=https%3A%2F%2Fp5.itc.cn%2Fq_70%2Fimages03%2F20210104%2Faa3c6f6b159c46bebd60f6952ef793f9.jpeg&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwxLDMsMiw2LDQsNSw4LDcsOQ%3D%3D"
      />
    </div>
    <div class="drop_menu">
      <a-dropdown placement="bottomRight">
        <a class="ant-dropdown-link" @click.prevent>
          易烊丁真
          <i class="fa fa-angle-down"></i>
        </a>
        <template #overlay>
          <a-menu @click="menuClick">
            <a-menu-item key="user_center">
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item key="my_messages">
              <a href="javascript:;">我的消息</a>
            </a-menu-item>
            <a-menu-item key="article_list">
              <a href="javascript:;">文章列表</a>
            </a-menu-item>
            <a-menu-item key="login">
              <a href="javascript:;">用户登录</a>
            </a-menu-item>
            <a-menu-item key="logout">
              <a href="javascript:;">注销退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRoute,useRouter } from "vue-router";
import { logoutApi } from "@/api/user_api";

const router = useRouter();
const route = useRoute();
const props = defineProps({
  isAvatar: {
    type: Boolean,
    default: false,
  },
});

async function menuClick({ key }) {
  if (key === "logout") {
    let res = await logoutApi()
    if(res.code){
        message.error(res.msg)
    }else{
      message.success(res.msg)
    }
    await router.push({name:"login"})
    return
  }
  if (key === "login") {
    router.push({
    name: key,
    query:{
      redirect_url: route.path
    }
  });
    return;
  }
  router.push({
    name: key,
  });
}
</script>

<style>
.gvb_user_info {
  display: flex;
  align-items: center;
}
</style>