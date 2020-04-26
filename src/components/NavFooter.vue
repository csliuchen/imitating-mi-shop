<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href>微博</a>
      <span>|</span>
      <a href>微博</a>
      <span>|</span>
      <a href>微博</a>
      <span>|</span>
      <a href>微博</a>
      <span>|</span>
      <a href>微博</a>
      <span>|</span>
    </div>
    <div class="copyright">
      copycopyrightcopycopyright
      <span class="cutie">你越喜欢我越可爱</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .cutie {
      color: #ff6600;
    }
  }
}
</style>