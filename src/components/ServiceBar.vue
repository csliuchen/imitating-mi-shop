<template>
  <div class="service">
    <!-- container文字会自动居中 -->
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>预约损坏服务
        </li>
        <li>
          <span class="icon-7day"></span>7天有理由退款
        </li>

        <li>
          <span class="icon-15day"></span>15天收费换货
        </li>

        <li>
          <span class="icon-shipping"></span>满150不包邮
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "service-bar"
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.service {
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  //text-align: center;
  li {
    display: inline-block;
    width: 24.9%; //比设计稿稍微小一点
    text-align: center;
    border-right: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle; //?
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-shipping {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>