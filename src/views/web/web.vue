<template>
    <router-view></router-view>
</template>

<script>
import { useStore } from '@/stores/store';

const store = useStore()
store.loadNavList()
store.loadSiteInfo()
</script>

<style lang="scss">
.base_view {
  background-color: var(--bg);
  

  .gvb_base_container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .gvb_inner_container {
      min-height: 1000px;
      width: 1200px;
      margin-top: 20px;
    }
  }
}
</style>