<script setup >
const activities = [

  {
    content: "Github Actions 自动化部署，首页样式调整",
    timestamp: "2023-09-18",
  },
  {
    content: "init 初始化博客",
    timestamp: "2023-09-16",
  },
];
</script>

<template>
  <div class="log">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss">
.log {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: calc(100vh - 12.0625rem);
}
</style>
