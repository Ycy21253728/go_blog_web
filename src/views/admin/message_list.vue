<template>
    <div>
  
      <GVBTable
          :columns="data.columns"
          base-url="/api/messages_all"
          like-title="搜索消息名称"
          ref="gvbTable"
          :is-add="false"
          :is-edit="false"
          :is-delete="false"
          default-delete
      >
        <template #cell="{column, record}">
          <template v-if="column.key === 'send_user_avatar'">
            <img :src="record.send_user_avatar" alt="" style="width: 30px;height: 30px;border-radius: 50%">
          </template>
          <template v-if="column.key === 'rev_user_avatar'">
            <img :src="record.rev_user_avatar" alt="" style="width: 30px;height: 30px;border-radius: 50%">
          </template>
          <template v-if="column.key === 'is_read'">
            <a-tag v-if="record.is_read" color="blue">已读</a-tag>
            <a-tag v-else color="red">未读</a-tag>
          </template>
        </template>
        <template #filters>
  
        </template>
      </GVBTable>
  
    </div>
  
  </template>
  
  <script setup>
  import GVBTable from "@/components/admin/gvb_table.vue"
  import {reactive, ref} from "vue";

  const gvbTable = ref(null)
  
  const data = reactive({
    columns: [
      {title: 'id', dataIndex: 'id', key: 'id'},
      {title: '发送人昵称', dataIndex: 'send_user_nick_name', key: 'send_user_nick_name'},
      {title: '发送人头像', dataIndex: 'send_user_avatar', key: 'send_user_avatar'},
      {title: '内容', dataIndex: 'content', key: 'content'},
      {title: '昵称', dataIndex: 'rev_user_nick_name', key: 'rev_user_nick_name'},
      {title: '头像', dataIndex: 'rev_user_avatar', key: 'rev_user_avatar'},
      {title: '是否已读', dataIndex: 'is_read', key: 'is_read'},
      {title: '日志时间', dataIndex: 'created_at', key: 'created_at'},
    ],
  })
  </script>