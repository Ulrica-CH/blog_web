<script setup >
import skillPage from './components/skill'
</script>

<template>
  <div class="mine">
    <div class="author-card">
      <div class="author-card-desc">简介</div>
      <div class="author-card-subtitle">您好，很高兴认识你👋</div>
      <div class="author-card-title">我是 MichstaBe</div>
      <div class="author-card-subtitle2">
        是一名 前端开发工程师
      </div>
    </div>

    <skillPage/>
  </div>
</template>

<style scoped lang="scss">
.mine {
  margin: 1rem auto;
  max-width: 81rem;
  height: calc(100vh - 13.6rem);
  .author-card {
    width: 100%;
    background: linear-gradient(
      120deg,
      rgba(91, 39, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-radius: 1rem;

    .author-card-desc {
        padding: 1rem 0;
      font-size: 80%;
      opacity: 0.8;
      color: #fff;
    }
    .author-card-title {
        padding: 1rem 0;
      font-size: 2rem;
      font-weight: bold;
      
    }
    .author-card-subtitle2{
        padding:0 0 1rem;
    }
  }
}
</style>
