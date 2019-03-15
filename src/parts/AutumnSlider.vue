<template>
  <section class="autumn-slider">
    <section class="autumn-slider__container">
      <article class="img-slider">
        <div class="title-container">
          <p>Autumn Collection</p>
        </div>
        <img src="@/assets/images/image-1-slider.png" alt="img-slider-1" />
        <div class="pagination-container">
          <p>01</p>
        </div>
      </article>
      <article class="img-slider img-slider--active">
        <div class="title-container">
          <p>Autumn Collection</p>
        </div>
        <img src="@/assets/images/main-image-slider.png" alt="img-slider-1" />
        <div class="pagination-container">
          <p>01</p>
        </div>
      </article>
      <article class="img-slider">
        <div class="title-container">
          <p>Autumn Collection</p>
        </div>
        <img src="@/assets/images/image-2-slider.png" alt="img-slider-1" />
        <div class="pagination-container">
          <p>01</p>
        </div>
      </article>
    </section>
    <article class="slider-controller slider-controller--horizontal">
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
      <label>
        <input type="radio" name="photo" />
        <span class="checkmark"></span>
      </label>
    </article>
  </section>
</template>

<script>
export default {
  name: "AutumnSlider"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.autumn-slider {
  position: relative;
  width: 100vw;
  height: 600px;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-bottom: 70px;
  margin-bottom: 80px;

  .autumn-slider__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    .img-slider {
      height: 80%;
      width: 27%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .title-container {
        position: absolute;
        top: 0;
        right: 0;
        background: white;
        display: none;
        justify-content: center;
        align-items: center;
        display: none;

        p {
          font-family: $font-semiBold;
          font-size: 28px;
          padding: 50px 80px;
        }
      }

      .pagination-container {
        position: absolute;
        bottom: 0;
        left: 0;
        background: $color-steelBlue;
        width: 100px;
        height: 100px;
        display: none;
        align-items: center;
        justify-content: center;

        p {
          font-family: $font-light;
          color: white;
          font-size: 26px;
        }
      }

      &.img-slider--active {
        height: 100%;
        width: 40%;
        .title-container,
        .pagination-container {
          display: flex;
        }
      }
    }
  }
}
</style>
