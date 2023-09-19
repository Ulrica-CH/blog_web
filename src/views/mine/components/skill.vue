<script setup >
const tableData = [
  {
    date: 'Html',
    name: 'TypeScript',
    address: '工程化，构建，脚手架',
  },
  {
    date: 'Css',
    name: 'Vue3',
    address: '框架原理，编译原理',
  },
  {
    date: 'JavaScript',
    name: 'React',
    address: ' JavaScript 手写，原理',
  },
  {
    date: 'Vue2',
    name: 'Nest',
    address: '大前端',
  },
  {
    date: 'Node',
    name: '数据结构与算法',
    address: 'Go',
  },
  {
    date: 'Weboack 基础',
    name: '',
    address: '',
  },
]
</script>

<template>
  <div class="skill">
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>个人技能</span>
        <!-- <el-button class="button" text>Operation button</el-button> -->
      </div>
    </template>
    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="已掌握"  />
    <el-table-column prop="name" label="正在学习" />
    <el-table-column prop="address" label="未来可期" />
  </el-table>
  </el-card>
    </div>
</template>

<style scoped lang="scss"> 
.skill{
    .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
}
</style>