<template>
  <section class="main-slider">
    <article class="slider-controller">
      <label>
        <input type="radio" name="photo" />
        <span class="checkmark"></span>
      </label>
      <label>
        <input type="radio" name="photo" />
        <span class="checkmark"></span>
      </label>
      <label>
        <input type="radio" name="photo" />
        <span class="checkmark"></span>
      </label>
    </article>
    <section class="main-product--container">
      <article class="main-image--container">
        <div class="img-container">
          <img src="@/assets/images/chair.png" alt="main-product--image" />
        </div>
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </article>
    </section>
    <aside class="product-description--container">
      <article class="product-description">
        <h2>153€</h2>
        <h1 class="title">Bjorg chair. <br />white plastic</h1>
        <p>
          Armchair in polypropylene. Seat and legs in solid natural beech wood.
        </p>
        <form>
          <div>
            <label>
              <input type="radio" name="color" />
              <span class="checkmark blue"></span>
            </label>
            <label>
              <input type="radio" name="color" />
              <span class="checkmark dark-blue"></span>
            </label>
            <label>
              <input type="radio" name="color" />
              <span class="checkmark light-blue"></span>
            </label>
            <label>
              <input type="radio" name="color" />
              <span class="checkmark orange"></span>
            </label>
          </div>
          <label class="btn-submit">
            <input type="submit" value="ADD TO CART" />
          </label>
        </form>
        <a href="#" class="share-link">Share product</a>
      </article>
      <section class="image-container">
        <article>
          <img src="@/assets/images/chair2.png" alt="chair-img-1" />
        </article>
        <article>
          <img src="@/assets/images/chair3.jpg" alt="chair-img-2z" />
        </article>
      </section>
    </aside>
  </section>
</template>

<script>
export default {
  name: "MainSlider",
  data: function() {
    return {
      menu: ["Description", "Info", "Collection", "Review"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.main-slider {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: $tablet) {
    flex-direction: column;
  }

  .main-product--container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1430px) {
      align-items: center;
    }

    @media (max-width: $tablet) {
      justify-content: center;
    }

    .main-image--container {
      img {
        height: 800px;

        @media (max-width: 1430px) {
          height: 600px;
        }
      }
      ul {
        margin-top: 40px;
        li {
          list-style-type: none;
          display: inline;

          &:not(:last-child) {
            margin-right: 50px;
          }

          a {
            font-family: $font-semiBold;
            font-size: 12px;
            color: $color-dark;
            text-decoration: none;
            text-transform: uppercase;

            &#active {
              color: $color-steelBlue;
            }
          }
        }
      }
    }
  }

  .product-description--container {
    margin-top: 80px;
    display: flex;
    height: auto;
    justify-content: space-between;

    @media (max-width: 1430px) {
      margin-top: 40px;
    }
    .product-description {
      h2 {
        font-size: 30px;
        color: $color-steelBlue;
        font-family: $font-semiBold;
        margin-bottom: 5px;
      }

      p {
        font-family: $font;
        color: $color-grey;
        font-size: 16px;
        width: 400px;
        margin-bottom: 40px;
      }

      form {
        div {
          display: flex;
          margin-bottom: 60px;
          label {
            position: relative;
            cursor: pointer;

            &:not(:last-child) {
              margin-right: 50px;
            }

            .checkmark {
              display: block;
              position: relative;
              height: 14px;
              width: 14px;
              background: $color-steelBlue;
              border-radius: 10px;
              transition: transform 250ms $curve;
              z-index: 1;

              &:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                width: 40%;
                height: 40%;
                background: white;
                border-radius: 50%;
                transition: transform 500ms $curve;
              }

              &.blue {
                background: #7faadb;
              }

              &.dark-blue {
                background: $color-steelBlue;
              }

              &.light-blue {
                background: #9ce0d8;
              }

              &.orange {
                background: #ffb585;
              }
            }

            &:hover {
              .checkmark {
                transform: scale(1.4);
                transition: transform 250ms $curve;
              }
            }

            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;

              &:checked ~ .checkmark {
                &:after {
                  transform: translate(-50%, -50%) scale(1);
                  transition: transform 150ms $curve;
                }
              }
            }
          }
        }

        .btn-submit {
          width: 376px;
          height: 96px;
          background: $color-steelBlue;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          margin-bottom: 80px;

          &:after {
            content: "";
            position: absolute;
            top: 50%;
            right: 40px;
            transform: translate(0, -50%);
            background: url("../assets/svg/arrow.svg") no-repeat center;
            background-size: auto;
            width: 20px;
            height: 20px;
            transition: transform 350ms $curve;
          }

          &:before {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            width: 40px;
            height: 2px;
            background: white;
            transform: translate(-380px, -50%);
            transition: transform 250ms $curve, width 350ms $curve;
          }

          input {
            background: none;
            border: none;
            padding-left: 40px;
            color: white;
            font-family: $font-bold;
            font-size: 12px;
            letter-spacing: 2px;
            cursor: pointer;
            transform: translate(0%, 0);
            transition: transform 250ms $curve;
          }

          &:hover {
            &:after {
              transform: translate(350%, -50%);
              transition: transform 350ms $curve;
            }

            input {
              transform: translate(20%, 0);
              transition: transform 350ms $curve;
            }

            &:before {
              transform: translate(-320px, -50%);
              width: 15px;
              transition: transform 450ms $curve, width 600ms $curve;
            }
          }
        }
      }

      .share-link {
        font-size: 11px;
        color: $color-dark;
        letter-spacing: 1.83px;
        text-transform: uppercase;
        font-family: $font-bold;
        opacity: 0.5;
        text-decoration: none;
      }
    }

    .image-container {
      margin-right: 40px;
      margin-left: 120px;

      @media (max-width: 1700px) {
        margin-left: 0px;
        margin-right: 0px;
      }

      @media (max-width: 1640px) {
        display: none;
      }
      article {
        height: 240px;
        width: 240px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        transition: box-shadow 250ms linear;

        &:hover {
          box-shadow: 0px 15px 62px 0px rgba(0, 0, 0, 0.05);
          transition: box-shadow 250ms linear;
        }

        img {
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
