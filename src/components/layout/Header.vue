<template>
  <header :class="{ mobile: isMobile }">
    <ul class="row header_nav">
      <li class="header_nav-row1">
        <ul>
          <li class="search_section">
            <button @click="search_on">
              <input type="search" class="search_box" placeholder="검색하기" />
              <i class="fa-solid fa-magnifying-glass search_icon"></i>
            </button>
          </li>
          <li class="logo_section">
            <router-link to="/"
              ><img src="@/../public/image/logo_default.png" alt="지엠팜"
            /></router-link>
          </li>
          <li class="myPage_section">
            <div v-if="!isMobile">
              <button>
                <router-link to="/cart">
                  <i
                    class="fa-heart goToCart_BT"
                    :class="{
                      'fa-regular': !cartsCount,
                      'fa-solid': cartsCount,
                    }"
                  >
                    <span v-if="cartsCount != 0" class="cartsCount">
                      {{ cartsCount }}
                    </span>
                  </i>
                </router-link>
              </button>
              <button><i class="fa-regular fa-user"></i></button>
            </div>
            <div v-else>
              <button @click="showNav" class="bars_icon">
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </li>
        </ul>
      </li>
      <li class="header_nav-row2">
        <ul v-if="isMobile" class="top_section">
          <li>마이페이지 / 장바구니</li>
          <li>
            <button class="mobile_x_btn" @click="closeNav">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </li>
        </ul>
        <ul>
          <li class="depth1">
            <router-link to="/aboutus">지엠팜</router-link>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#">상품보기</a><i class="fa-solid fa-chevron-down"></i>
            <ul class="depth2">
              <li>
                <router-link to="/shopping">쇼핑하기</router-link>
              </li>
              <li><router-link to="/regulardelivery">정기배송</router-link></li>
            </ul>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#">함께하는</a><i class="fa-solid fa-chevron-down"></i>
            <ul class="depth2">
              <li><router-link to="/gmpharmcare">지엠팜케어</router-link></li>
              <li><router-link to="/pilldoc">필독상식</router-link></li>
              <li><router-link to="/teuni">트니프렌즈</router-link></li>
            </ul>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#">커뮤니티</a><i class="fa-solid fa-chevron-down"></i>
            <ul class="depth2">
              <li><router-link to="/event">이벤트</router-link></li>
              <li><router-link to="/board">자유게시판</router-link></li>
              <li><router-link to="/pregnancy">임밍아웃</router-link></li>
              <li><router-link to="/ambassador">엠버서더</router-link></li>
              <li><router-link to="/magazine">매거진</router-link></li>
              <li><router-link to="/pharmacist">약사전문칼럼</router-link></li>
            </ul>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#">고객센터</a><i class="fa-solid fa-chevron-down"></i>
            <ul class="depth2">
              <li><router-link to="/guideline">섭취가이드</router-link></li>
              <li><router-link to="/membership">맴버십 안내</router-link></li>
              <li><router-link to="/questions">자주묻는질문</router-link></li>
              <li><router-link to="/inquiry">1:1 문의</router-link></li>
              <li><router-link to="/contact">기업제휴문의</router-link></li>
              <li><router-link to="/notice">공지사항</router-link></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    showNav() {
      this.$el.querySelector(".header_nav-row2").classList.add("click");
    },
    closeNav() {
      this.$el.querySelector(".header_nav-row2").classList.remove("click");
    },
    header_menu_enter(event) {
      event.currentTarget.classList.add("active");
    },
    header_menu_leave(event) {
      event.currentTarget.classList.remove("active");
    },
    header_menu_click(event) {
      event.currentTarget.classList.toggle("active");
    },
    search_on() {
      this.$el.querySelector(".search_section").classList.add("active");
    },
  },
  computed: {
    cartsCount() {
      let set = new Set(this.$store.state.cartItem);
      let items = [...set];
      return items.length;
    },
    ...mapState(["isMobile"]),
  },
  watch: {
    $route(to, from) {
      this.$el.querySelector(".header_nav-row2").classList.remove("click");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: white;
  width: 100%;
  padding: 0 2%;
  position: relative;
  z-index: 9999;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  button {
    padding: 8px;
  }
  .header_nav {
    margin: 0 auto;
    .header_nav-row1 {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          width: 30%;
          padding: 20px 0;
          .search_box {
            width: 0;
            border: 1px solid transparent;
            opacity: 0;
            border-radius: 50px;
            transition: 0.5s;
          }
          &.search_section.active {
            .search_box {
              width: 90%;
              opacity: 1;
              border: 1px solid gray;
            }
            .search_icon {
              width: 10%;
            }
          }
          &.logo_section {
            display: flex;
            justify-content: center;
            img {
              height: 20px;
              object-fit: contain;
            }
          }
          &.myPage_section {
            display: flex;
            justify-content: end;
            .goToCart_BT.fa-solid {
              color: var(--main-color);
              position: relative;
              span {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 6px;
                color: white;
              }
            }
            .bars_icon {
              // z-index: 9999;
              // position: relative;
            }
          }
        }
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .header_nav-row2 {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li.depth1 {
          padding: 20px 0;
          position: relative;

          & > i {
            font-size: 12px;
            margin-left: 8px;
            color: lightslategrey;
            transition: all 0.3s ease-in-out;
          }
          ul.depth2 {
            visibility: hidden;
            opacity: 0;
            display: none;
            justify-content: center;

            position: absolute;
            background-color: var(--main-color);

            color: white;

            width: max-content;
            padding: 4px 8px;
            border-radius: 50px;
            top: 80%;

            left: calc(50% - 6px);
            transform: translateX(-50%);
            transition: opacity 0.3s ease, visibility 0.3s ease;

            li {
              display: inline-block;
              padding: 8px;
              margin: 0 8px;
              flex: none;
              a {
                display: inline-block;
              }
              &:not(:last-child):after {
                content: "";
                display: inline-block;
                width: 5px;
                height: 5px;
                background-color: white;
                top: 50%;
                left: 18.5px;
                transform: translateY(-50%);
                position: relative;
              }
            }
          }
          &:last-child ul.depth2 {
            right: 0;
            left: unset;
            transform: unset;
          }
          &.active {
            & > i {
              transform: rotate(180deg) translateY(1.5px);
            }
            ul.depth2 {
              visibility: visible;
              opacity: 1;
              display: flex;
              transition: opacity 0.3s ease, visibility 0.3s ease;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: var(--mobile-width)) {
    background-color: red;
  }
}

header.mobile {
  // position: fixed;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  .header_nav-row2 {
    background-color: whitesmoke;
    position: fixed;
    width: 95%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 999;

    opacity: 0;
    visibility: hidden;

    transform: translateX(100%);
    transition: all 0.5s ease-in-out;
    &.click {
      transform: translateX(0);
      box-shadow: -8px 0 20px 20px rgba(0, 0, 0, 0.5);
      opacity: 1;
      visibility: visible;
    }
    .top_section {
      background-color: var(--main-color);
      height: 25%;
      padding: 4%;
    }
    ul {
      flex-direction: column;
      padding: 4%;
      align-items: flex-start;
      li.depth1 {
        padding: 8px;
        ul.depth2 {
          background-color: transparent;
          position: relative;
          visibility: hidden;
          display: none;
          li {
            padding: 8px 12px;
            line-height: 1em;
            margin-bottom: 4px;
            background-color: var(--main-color);
            border-radius: 50px;
            &:not(:last-child):after {
              display: none;
            }
          }
        }
        &.active {
          ul.depth2 {
            visibility: visible;
            display: flex;
          }
        }
      }
    }
  }
}
</style>
