<template>
    <aside class="gvb_aside">
        <div class="gvb_aside_header flex">
            <div class="gvb_aside_logo flex">
                <img src="https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2F1f178a82b9014a906f8b228f3d0fbf1fb21beed5.jpeg%40f_auto%3Ftoken%3D4a9cd3a415c1103772f86fa7710d7f6c&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1707498000&t=c284776c790f6fdd9c6b28b7267a215c" alt="">
            </div>
            <div class="gvb_aside_title">后台系统</div>
        </div>
        <div class="gvb_aside_body flex">
            <GVBAsideMenu></GVBAsideMenu>
        </div>
    </aside>
</template>

<script setup>
import GVBAsideMenu from "./gvb_aside_menu.vue"
</script>

<style lang="scss">
.gvb_aside {
    width: 240px;
    height: 100vh;
    background-color: var(--slide);

    .gvb_aside_header{
        width: 100%;
        height: 180px;
        flex-direction: column;
    }

    .gvb_aside_logo {
        // background-color: #606060;
        padding: 10px;
        img{
            width: 80%;
        }

        // &::after {
        //     content: "logo图片";
        //     display: flex;
        //     color: white;
        // }
    }

    .gvb_aside_title{
        font-size: 20px;
        color: white;
    }
  }
</style>