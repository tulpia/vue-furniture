<template>
  <header>
    <article class="header__logo-container">
      <div class="header__logo-container__logo"></div>
    </article>
    <nav class="nav-responsive">
      <a href="#">Menu</a>
    </nav>
    <nav class="header-nav">
      <ul>
        <li v-for="(item, index) in header" :key="index">
          <a href="">{{ item }}</a>
        </li>
      </ul>
    </nav>
    <section class="header__cta">
      <ul>
        <li class="account"><a href=""></a></li>
        <li class="search"><a href=""></a></li>
        <li class="shopping"><a href=""></a></li>
      </ul>
    </section>
  </header>
</template>

<script>
export default {
  name: "header",
  data: function() {
    return {
      header: [
        "New In",
        "Furniture",
        "Rest",
        "Decoration",
        "Outdoor",
        "Magazine",
        "Magazine",
        "Outlet"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
header {
  width: 85vw;
  margin: 0 auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  .header__logo-container {
    height: 40px;
    width: auto;

    .header__logo-container__logo {
      height: 100%;
      background: url("../assets/svg/logo.svg") no-repeat center;
      width: 100px;
      background-size: auto;
    }
  }
  .nav-responsive {
    display: none;
    @media (max-width: $laptop) {
      display: flex;
      a {
        color: $color-dark;
        font-family: $font-semiBold;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }
  .header-nav {
    @media (max-width: $laptop) {
      display: none;
    }
    ul {
      display: flex;
      li {
        list-style-type: none;
        margin: 0 30px;
        &:first-child {
          margin-left: 0px;
        }
        &:last-child {
          margin-right: 0px;
        }
        a {
          color: $color-darkGrey;
          font-size: 14px;
          font-family: $font-medium;
          text-decoration: none;
        }
      }
    }
  }
  .header__cta {
    display: flex;
    ul {
      height: auto;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        list-style-type: none;
        height: 40px;
        width: 40px;
        background-size: auto;
        &:nth-child(2) {
          margin: 0 40px;
        }
        a {
          text-decoration: none;
        }
        &.account {
          background: url("../assets/svg/account.svg") no-repeat center;
        }
        &.search {
          background: url("../assets/svg/search.svg") no-repeat center;
        }

        &.shopping {
          background: url("../assets/svg/shopping.svg") no-repeat center;
        }
      }
    }
  }
}
</style>
