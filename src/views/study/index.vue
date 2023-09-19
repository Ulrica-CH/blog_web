<script setup></script>

<template>
  <div class="study">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>学习计划</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <div class="item">
        <div>10月 - 11月</div>
        <div>
            1、
        </div>
        <div>
            2、
        </div>
        <div>
            3、
        </div>
    </div>
      <div class="item">2、11月 - 12月</div>
      <div class="item">3、12月 - 1月</div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.study {
  @include pageStyle();

  .el-card {
    // margin: 1rem 0;
    width: 100%;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }
    }
    :deep(.el-card__body) {
      padding: 1rem !important;

      .item{
        margin-bottom: 1rem;
        padding: 1rem !important;
        border: 1px solid #ccc;
        border-radius: 0.625rem;
      }
    }
  }
}
</style>
