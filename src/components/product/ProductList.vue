<template>
  <div class="product__list row" :class="{ mobile: isMobile }">
    <ul class="list_header">
      <li>
        총
        <b>{{ totalItems }}</b>
        개 상품
      </li>
    </ul>
    <ul class="list_main">
      <li class="product_list">
        <ul v-for="(item, index) in displayedProducts" :key="index">
          <li class="product_image">
            <img :src="item.image_src" :alt="item.name" />
          </li>
          <li class="product_tag">
            <span
              v-for="(item, index) in item.tag"
              :key="index"
              :class="{
                adult: item === adult,
                eye: item === eye,
                child: item === child,
                energy: item === energy,
                pregnancy: item === pregnancy,
                stomach: item === stomach,
                redGinseng: item === redGinseng,
                immunity: item === immunity,
                growth: item === growth,
              }"
            >
              {{ item }}
            </span>
          </li>
          <li class="product_name">{{ item.name }}</li>
          <li class="product_desc">{{ item.desc }}</li>
          <li v-if="item.stock">
            {{ item.price }}원
            <button @click="addCart(item)">
              <i
                class="fa-heart"
                :class="{
                  'fa-regular': !$store.state.isAddedToCart[item.id],
                  'fa-solid': $store.state.isAddedToCart[item.id],
                }"
              ></i>
              {{ $store.state.isAddedToCart[item.id] }}
            </button>
          </li>
          <li v-else>품절</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      adult: "성인건강",
      eye: "눈건강",
      child: "유소아건강",
      energy: "에너지UP",
      pregnancy: "임신건강",
      stomach: "장건강",
      redGinseng: "어린이홍삼",
      immunity: "유소아면역",
      growth: "유소아성장",
    };
  },
  props: {
    productList: { type: Array, required: true },
    currentPage: { type: Number, required: true },
    itemsPerPage: { type: Number, required: true },
    totalItems: { type: Number, required: true },
  },
  computed: {
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.productList.slice(startIndex, endIndex);
    },

    ...mapState(["isMobile"]),
  },
  methods: {
    addCart(item) {
      this.$store.commit("add__Cart", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.product__list {
  .list_header {
    font-size: 13px;
    margin: 2% 0;
    color: lightgray;
    b {
      font-weight: bolder;
      color: black;
      text-emphasis: unset;
    }
  }
  .list_main {
    .product_list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      ul {
        display: flex;
        flex-direction: column;
        // flex-basis: 20%;
        width: 18.4%;
        margin-right: 2%;
        margin-bottom: 2%;
        &:nth-child(5n) {
          margin-right: 0;
        }

        .product_image {
          width: 100%;
          aspect-ratio: 1/1;
          min-height: 200px;
          background-color: whitesmoke;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            width: 70%;
            transition: all 0.3s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        .product_tag {
          height: 24px;
          margin: 4% 0 2%;
          span {
            display: inline-block;
            width: 100%;
            text-align: center;
            width: max-content;
            font-size: 11px;

            padding: 6px 8px 2px;
            color: white;
            border-radius: 50px;
            background-color: var(--main-color);

            margin-right: 2%;
            &.adult {
              background-color: #2b66c7;
            }
            &.eye {
              background-color: #039ef7;
            }
            &.child {
              background-color: #f7cb19;
            }
            &.energy {
              background-color: #fd844e;
            }
            &.pregnancy {
              background-color: #fc99a0;
            }
            &.stomach {
              background-color: #1bbad2;
            }
            &.redGinseng {
              background-color: #f11212;
            }
            &.immunity {
              background-color: #ff9b4b;
            }
            &.growth {
              background-color: #8fc9dc;
            }
          }
        }
        .product_name {
          font-size: 16px;
          height: 50px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .product_desc {
          color: lightgrey;
          text-overflow: ellipsis;
          font-size: 13px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}

.product__list.mobile {
  .list_main {
    .product_list {
      ul {
        width: 49%;

        margin-right: 2%;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
