<template>
    <GVBCard title="文章日历" class="article_calendar_card">
      <GvbArticleCalendar :is-title="false"></GvbArticleCalendar>
    </GVBCard>
  </template>
  
  <script setup>
  import GVBCard from "@/components/gvb_card.vue"
  import GvbArticleCalendar from "@/components/charts/article_calendar.vue"
  
  </script>