<template>
  <article class="item-single">
    <article class="item-single__container">
      <div class="item-single__img-container">
        <img v-bind:src="item.image" alt="chair3" />
      </div>
      <div class="item-single__description-container">
        <div class="description-container__title-container">
          <div class="title-container__left">
            <p class="item-title">{{ item.title }}</p>
          </div>
          <div class="title-container__right">
            <p class="item-price">{{ item.price }}</p>
          </div>
        </div>
        <div class="description-container__content-container">
          <p class="availability">Within {{ item.availability }} days.</p>
          <p class="text description">{{ item.description }}</p>
          <a href="#" class="btn-addtocart">buy now</a>
        </div>
      </div>
    </article>
  </article>
</template>

<script>
export default {
  name: "ItemSingle",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.item-single {
  width: 45%;
}

.item-single__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;

  .item-single__img-container {
    max-width: 35%;
    max-height: 180px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .item-single__description-container {
    width: 45%;

    .description-container__title-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .title-container__left {
        width: 70%;
        p {
          font-size: 18px;
          color: $color-darkGrey;
          line-height: 1.5;
          font-family: $font-semiBold;
        }
      }

      .title-container__right {
        p {
          font-size: 18px;
          font-family: $font-bold;
          color: $color-darkGrey;
        }
      }
    }

    .description-container__content-container {
      .availability {
        font-size: 12px;
        color: $color-lightGrey;
        font-family: $font-light;
        margin-bottom: 30px;
      }

      .description {
        font-size: 13px;
        line-height: 1.9;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
