<script lang="ts">
export default {
  name: 'Director',
  props: {
    dir: String,
  },
  setup(props, ctx) {
    const dirClick = (dir) => {
      ctx.emit('dirClick', dir)
    }

    return {
      dirClick
    }
  }
}
</script>

<template>
  <div class="director dir-next" v-if="dir === 'next'">
    <a href="javascript:"
       @click="dirClick(dir)">&gt;</a>
  </div>
  <div class="director dir-prev" v-else-if="dir === 'prev'">
    <a href="javascript:"
       @click="dirClick(dir)">&lt;</a>
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';

.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: $l-carousel_director;
  background-color: $l-carousel_director-bg;

  a {
    color: $l-carousel_director;
    text-decoration: none;
    margin-top: -15px;
  }

  &.dir-next {
    right: 5px;
  }

  &.dir-prev {
    left: 5px;
  }
}
</style>
