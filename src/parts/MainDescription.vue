<template>
  <section class="main-description">
    <article class="main-description__description-container">
      <div class="description-container__title-container">
        <h3 class="subtitle">Description</h3>
        <h1 class="title title--underline">Bjorg chair.</h1>
      </div>
      <div class="description-container__description">
        <p class="text text-margin">
          All trend spaces have a common denominator: chairs that are icons.
        </p>
        <p class="text text-margin">
          And this chair has everything to become that, an icon of design.
        </p>
        <p class="text text-margin">
          Its legs and seat are made of solid beech wood ad its backrest, with
          rounded shapes, is made of polypropylene.
        </p>
        <p class="text text-margin">
          Its design favors comfort while adding great aesthetic value to any
          interior design.
        </p>
      </div>
    </article>
    <article class="main-description__img-container">
      <img src="@/assets/images/chair.png" alt="chair-description.png" />
    </article>
    <aside class="aside-article">
      <div class="aside-article__title-container">
        <p class="title title--small">5 ideas for choosing the perfect</p>
      </div>
      <div class="aside-article__content-container">
        <p class="text text--small">
          Choosing the right mattress is not so simple. We all sleep in a
          different way and we all want our mattress to adapt perfectly to our
          body.
        </p>
        <div class="credits-container">
          <div class="credits-container__img-container">
            <img src="@/assets/images/credits.png" alt="credits-article" />
          </div>
          <p class="credits-text text text--bold">Editorial staff</p>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  name: "MainDescription"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.main-description {
  margin-top: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;

  .main-description__description-container {
    width: 30%;

    .description-container__title-container {
      margin-bottom: 10px;
      position: relative;
      width: 100%;
    }
  }

  .main-description__img-container {
    height: 600px;

    img {
      height: 100%;
    }
  }

  .aside-article {
    width: 20%;
    align-self: center;

    .aside-article__title-container {
      position: relative;
      width: 100%;
      padding-bottom: 40px;
      margin-bottom: 40px;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: $color-steelBlue;
        height: 1px;
        width: 60px;
      }
    }

    .aside-article__content-container {
      width: 100%;
      > .text {
        margin-bottom: 40px;
      }

      .credits-container {
        width: 100%;
        display: flex;
        align-items: center;
        height: auto;

        .credits-container__img-container {
          height: 40px;
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 25px;

          img {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
