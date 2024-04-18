<template>
  <div class="base_view index_view">
    <GVBNav></GVBNav>
    <GVBBanner></GVBBanner>
    <div class="gvb_base_container">
      <div class="gvb_inner_container gvb_index_main">
        <div class="left">
          <GVBNews></GVBNews>
          <GVBArticleCalendar style="margin-top: 20px;"></GVBArticleCalendar>
          <GVBArticleList style="margin-top: 20px;"></GVBArticleList>
        </div>
        <div class="right">
            <GVBAdvert></GVBAdvert>
            <GVBInfo style="margin-top: 20px;"></GVBInfo>
            <GVBTag style="margin-top: 20px;"></GVBTag>
            <GVBSite style="margin-top: 20px;"></GVBSite>
            <GVBFeedBack style="margin-top: 20px;"></GVBFeedBack>
        </div>
      </div>
    </div>
    <GVBFooter></GVBFooter>
  </div>
</template>

<script setup>
import GVBNav from "@/components/gvb_nav.vue";
import GVBBanner from "@/components/gvb_banner.vue";
import GVBNews from "@/components/index/gvb_news.vue";
import GVBArticleCalendar from "@/components/index/gvb_article_calendar.vue";
import GVBTag from "@/components/index/gvb_tag.vue";
import GVBSite from "@/components/index/gvb_site.vue";
import GVBFeedBack from "@/components/index/gvb_feed_back.vue";
import GVBAdvert from "@/components/index/gvb_advert.vue"
import GVBInfo from "@/components/index/gvb_info.vue";
import GVBFooter from "@/components/gvb_footer.vue";
import GVBArticleList from "@/components/index/gvb_article_list.vue";
</script>

<style lang="scss">


.index_view {
  .gvb_inner_container {
    display: flex;
    justify-content: space-between;
  }
  .gvb_index_main {
    .left {
      width: calc(100% - 416px);
    }
    .right {
      width: 396px;
    }
  }
  
}
</style>