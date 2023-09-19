<script setup>
const activities = [

  {
    content: "全局Scss，黑色主题Mixin；完善Mine页面，Log页面",
    timestamp: "2023-09-19",
  },
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
      <template v-for="(item, index) in activities" :key="index">
        <el-timeline-item :timestamp="item.timestamp" placement="top" >
          <el-card>
            <h4>{{ item.content }}</h4>
            <p>{{ item.timestamp }}</p>
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss">
.log {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 12.0625rem);
  margin: 0 auto;
  max-width: 81rem;

  .el-timeline {
    width: 100%;
    .el-timeline-item {
      padding: 1rem 0;
      :deep(.el-timeline-item__wrapper) {
        // padding: 1rem 0;
        .el-card {
          padding: 1rem;
          background: linear-gradient(
            120deg,
            rgba(91, 39, 255, 1) 0%,
            rgba(0, 212, 255, 1) 100%
          );
          color: #fff;
        }
      }
    }
  }
}
</style>
