<template>
  <footer>
    <section class="footer__upper-part">
      <div class="footer-menu">
        <div class="footer-menu__container footer-menu__helplinks">
          <p class="footer-title">Helpful links</p>
          <nav class="footer-menu__nav">
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Delivery and Returns policy</a></li>
              <li><a href="#">Helps & FAQ</a></li>
              <li><a href="#">Service for professionals</a></li>
            </ul>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Delivery and Returns policy</a></li>
              <li><a href="#">Helps & FAQ</a></li>
              <li><a href="#">Service for professionals</a></li>
            </ul>
          </nav>
        </div>
        <div class="footer-menu__container footer-menu__contact">
          <p class="footer-title">Contact Info</p>
          <nav class="footer-menu__nav">
            <ul>
              <li>Oxford (UK)</li>
              <li>1-3 Abbey Street</li>
              <li>Eynsham</li>
              <li>Oxford</li>
              <li>OX29 4TB</li>
            </ul>
            <ul>
              <li>Walnut, CA (USA)</li>
              <li>340 S Lemon Ave #3358</li>
              <li>Walnut</li>
              <li>California 91789</li>
              <li>USA</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer-newsletter">
        <p class="footer-title">Sign Up Now</p>
        <form class="footer-newsletter__container">
          <div class="line">
            <input type="text" placeholder="Name" name="name" class="inputs" />
          </div>
          <div class="line">
            <input
              type="email"
              placeholder="Email"
              name="email"
              class="inputs"
            />
          </div>
          <div class="line btn-submit-sign">
            <input type="submit" value="Sign up now" />
          </div>
        </form>
      </div>
    </section>
    <section class="footer__lower-part">
      <p>© 2018 Furniture. Adapted from a design by Tran Mau Tri Tam</p>
      <div class="icons-container">
        <span class="icon-facebook"></span>
        <span class="icon-twitter"></span>
        <span class="icon-instagram"></span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
footer {
  width: 100%;
  margin-bottom: 40px;
  .footer__upper-part {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
    border-bottom: 1px solid $color-coolGrey;
    .footer-title {
      font-family: $font-semiBold;
      color: $color-dark;
      font-size: 18px;
      margin-bottom: 60px;
    }
    .footer-menu {
      display: flex;
      a,
      li {
        text-decoration: none;
        color: $color-grey;
        font-size: 14px;
        font-family: $font;
      }
      li {
        list-style-type: none;
      }
      .footer-menu__container {
        &:first-child {
          margin-right: 100px;
        }
        .footer-menu__nav {
          display: flex;
          ul {
            &:first-child {
              margin-right: 60px;
            }
            li {
              margin: 10px 0;
            }
          }
        }
        &.footer-menu__contact {
          .footer-menu__nav {
            ul {
              li {
                margin: 2px 0;
                &:first-child {
                  font-family: $font-semiBold;
                  color: $color-dark;
                  margin-bottom: 15px;
                }
              }
            }
          }
        }
      }
    }
    .footer-newsletter {
      .footer-newsletter__container {
        width: 500px;
        .line {
          width: 100%;
          .inputs {
            width: 100%;
            height: 30px;
            outline: none;
            border: none;
            font-family: $font;
            color: $color-dark;
            padding-bottom: 10px;
            border-bottom: 1px solid $color-steelBlue;
          }
          &:not(:last-child) {
            margin-bottom: 25px;
          }
        }
      }
    }
  }
  .footer__lower-part {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    p {
      color: $color-grey;
      font-family: $font;
      font-size: 13px;
    }
    .icons-container {
      span {
        margin-left: 40px;
        font-size: 22px;
        opacity: 0.5;
      }
    }
  }
}
</style>
