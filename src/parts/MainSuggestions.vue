<template>
  <section class="suggestions-container">
    <section class="suggestions-container__title-container">
      <h3 class="subtitle">Our Suggestions</h3>
      <h1 class="title title--underline">You may also like</h1>
    </section>
    <section class="suggestions-container__content-container">
      <aside class="search-container">
        <div class="search-container__title-container">
          <p class="text text--small">Filter</p>
        </div>
        <article class="search-container__filters">
          <ul class="first-list">
            <li class="first-list-item">
              <span class="text text--bold">New In</span>
              <ul class="second-list">
                <li class="second-list-item">
                  <label>
                    Item 1
                    <input
                      type="checkbox"
                      name="item1"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Item 2
                    <input
                      type="checkbox"
                      name="item2"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="first-list-item">
              <span class="text text--bold">Materials</span>
              <ul class="second-list">
                <li class="second-list-item">
                  <label>
                    Synthetic skin (6)
                    <input
                      type="checkbox"
                      name="synthetic"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Metal (88)
                    <input
                      type="checkbox"
                      name="metal"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Wooden (158)
                    <input
                      type="checkbox"
                      name="Wooden"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Fabric (254)
                    <input
                      type="checkbox"
                      name="Fabric"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Polyurethane (25)
                    <input
                      type="checkbox"
                      name="Polyurethane"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Viscoelastic (36)
                    <input
                      type="checkbox"
                      name="Viscoelastic"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Natural fiber (36)
                    <input
                      type="checkbox"
                      name="natural-fiber"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Synthetic fiber (36)
                    <input
                      type="checkbox"
                      name="synthetic-fiber"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Natural skin (36)
                    <input
                      type="checkbox"
                      name="natural-skin"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li class="second-list-item">
                  <label>
                    Foam (36)
                    <input
                      type="checkbox"
                      name="foam"
                      class="filter-checkbox"
                    />
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </li>
            <li class="first-list-item">
              <span class="text text--bold">Sale off</span>
            </li>
          </ul>
        </article>
      </aside>
      <section class="items-container">
        <app-itemSingle
          v-for="(chair, index) in chairs"
          :key="index"
          v-bind:item="chair"
        ></app-itemSingle>
      </section>
    </section>
  </section>
</template>

<script>
import ItemSingle from "../components/ItemSingle.vue";

export default {
  name: "MainSuggestions",
  components: {
    "app-itemSingle": ItemSingle
  },
  data: function() {
    return {
      chairs: [
        {
          title: "Patio Armchair, blue",
          price: 386,
          availability: 10,
          description:
            "Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.",
          image: require("@/assets/images/chair-conf.png")
        },
        {
          title: "Patio Armchair, blue",
          price: 386,
          availability: 10,
          description:
            "Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.",
          image: require("@/assets/images/weird-chair.png")
        },
        {
          title: "Patio Armchair, blue",
          price: 386,
          availability: 10,
          description:
            "Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.",
          image: require("@/assets/images/work-chair.png")
        },
        {
          title: "Patio Armchair, blue",
          price: 386,
          availability: 10,
          description:
            "Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.",
          image: require("@/assets/images/chair.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.suggestions-container {
  margin-top: 120px;
  width: 100%;

  .suggestions-container__content-container {
    width: 100%;
    display: flex;
    margin-top: 80px;

    .search-container {
      width: 15%;

      .search-container__title-container {
        width: 100%;
        padding-bottom: 5px;
        margin-bottom: 30px;
        position: relative;
        border-bottom: 1px solid $color-verylightGrey;

        &:after {
          content: "";
          position: absolute;
          top: 35%;
          transform: translateY(-50%);
          background: $color-coolGrey;
          width: 15px;
          height: 2px;
          right: 0;
        }
        p {
          font-family: $font-semiBold;
          color: $color-coolGrey;
        }
      }

      .search-container__filters {
        width: 100%;

        li {
          list-style-type: none;
        }

        .first-list {
          .first-list-item {
            .text {
              font-size: 12px;
              cursor: pointer;
            }
            margin-bottom: 25px;

            .second-list {
              margin-top: 20px;
              padding-left: 30px;

              .second-list-item {
                position: relative;

                label {
                  display: block;
                  position: relative;
                  cursor: pointer;
                  color: $color-lightGrey;
                  font-family: $font-semiBold;
                  line-height: 20px;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                  font-size: 12px;

                  input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                  }

                  .checkmark {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 15px;
                    width: 15px;
                    background: transparent;
                    border: 2px solid $color-verylightGrey;

                    &:after {
                      content: "";
                      position: absolute;
                      display: none;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      width: 50%;
                      height: 50%;
                      background: $color-steelBlue;
                      opacity: 1;
                    }
                  }
                }

                label input:checked ~ .checkmark {
                  &:after {
                    display: block;
                  }
                }

                &:not(:last-child) {
                  margin-bottom: 15px;
                }
              }
            }
          }
        }
      }
    }

    .items-container {
      margin-left: 5%;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
