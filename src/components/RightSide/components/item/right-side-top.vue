<template>
  <div class="info-background" v-image :data-src="configDetail.avatar_bg">
    <el-image
      fit="cover"
      style="width: 100%; height: 6.25rem"
      :src="configDetail.avatar_bg"
    >
      <template #error>
        <svg-icon name="image" :width="10" :height="10"></svg-icon>
      </template>
    </el-image>
  </div>
  <div class="info-avatar">
    <router-link to="/">
      <!-- <el-avatar :src="configDetail.blog_avatar || avatar" /> -->
    </router-link>
    <span class="blog-name">{{ configDetail.blog_name }} </span>
  </div>
  <!-- <div class="personal-say">{{ configDetail.personal_say }}</div> -->
  <div class="common-menu flex_r_between">
    <span class="flex_c_center menu_item" @click="operate('goToArchives')">
      <span class="common-menu__label to_pointer">文章</span>
      <span class="common-menu__value to_pointer">{{
        configDetail.articleCount
      }}</span>
    </span>
    <span class="flex_c_center menu_item" @click="operate('goToCategory')">
      <span class="common-menu__label to_pointer">分类</span>
      <span class="common-menu__value to_pointer">{{
        configDetail.categoryCount
      }}</span>
    </span>
    <span class="flex_c_center menu_item" @click="operate('goToTag')">
      <span class="common-menu__label to_pointer">标签</span>
      <span class="common-menu__value to_pointer">{{
        configDetail.tagCount
      }}</span>
    </span>
  </div>
  <!-- <div class="git-ee flex_r_around">
    <span class="git-ee__item button-animated" @click="operate('openLink', configDetail.git_ee_link)">
      <i class="iconfont icon-gitee2"> </i>
      <span class="git-ee__item-text"> My Gitee</span>
    </span>
  </div> -->
  <div class="personal-link flex_r_around">
    <i
      class="iconfont icon-bilibili-line to_pointer"
      @click="operate('openLink', configDetail.bilibili_link)"
    ></i>
    <i
      class="iconfont icon-github-fill to_pointer"
      @click="operate('openLink', configDetail.github_link)"
    ></i>

    <el-popover placement="top" trigger="hover">
      <el-image
        style="width: 100%; height: 100%"
        :src="configDetail.we_chat_link"
      ></el-image>
      <template #reference>
        <i class="iconfont icon-weixin1 to_pointer"></i>
      </template>
    </el-popover>
    <el-popover placement="top" trigger="hover">
      <el-image
        style="width: 100%; height: 100%"
        :src="configDetail.qq_link"
      ></el-image>
      <template #reference>
        <i class="iconfont icon-QQ1 to_pointer"></i>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import blogAvatar from '@/assets/img/blogAvatar.png';

const router = useRouter();
const avatar = ref(blogAvatar); // 博客头像

const props = defineProps({
  configDetail: {
    type: Object,
    default: () => {},
  },
});

/* operate start */
const operate = (op, val) => {
  switch (op) {
    case 'goToCategory':
      router.push('/category');
      break;
    case 'goToTag':
      router.push('/tag');
      break;
    case 'goToArchives':
      router.push('/archives');
      break;
    case 'openLink':
      window.open(val);
      break;
  }
};
</script>
<style lang="scss" scoped>
.info-background {
  // height: 8rem;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 90%;
  padding: 0.6rem 0;
  background-color: #f2f6fc;
  border-radius: 0.625rem;

  .blog-name {
    // padding: 0.5rem 0 0 0.5rem;
    color: #222;
    font-size: 20px;
  }
}

.personal-say {
  color: var(--font-color-title);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 90%;
  padding: 0.6rem 0;
  background-color: #f2f6fc;
  border-radius: 0.625rem;
  font-size: 1.145rem;
  text-align: center;
  letter-spacing: 0.15rem;
}

.common-menu {
  font-size: 1rem;
  color: #1f2d3d;
  font-weight: 1.4rem;
  margin: 1rem auto;
  width: 90%;

  .menu_item {
    background-color: #f2f6fc;
    border-radius: 0.625rem;
    margin: 0 0.625rem;
    padding: 0.625rem 1.425rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #3275b1;
      color: #fff;
    }
  }

  &__label {
    color: #533737;
    font-size: 1rem;
    font-weight: 400;
  }

  &__value {
    margin-top: 0.3rem;
    color: var(--text-highlight-color);
    font-size: 1.4rem;
  }
}

.git-ee {
  padding: 0 2rem;

  &__item {
    width: 100%;
    line-height: 1.6;
    text-align: center;
    background-color: #533737;
    border-radius: 3px;

    .iconfont {
      color: #fff;
      font-size: 1.2rem;
    }

    &-text {
      font-size: 1.2rem;
      color: #fff;
      padding-left: 0.5rem;
    }
  }
}

.button-animated {
  position: relative;
  z-index: 1;
  transition: color 1s;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: var(--primary);
    content: '';
    transition: transform 0.5s ease-out;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }

  &:hover {
    &:before {
      transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
      transform: scaleX(1);
    }
  }
}

.personal-link {
  padding: 1rem 5rem;

  .iconfont {
    font-size: 1.8rem;
  }

  .icon-QQ1 {
    font-size: 1.6rem;
  }
}
</style>
