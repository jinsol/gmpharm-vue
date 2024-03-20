<template>
    <div class="row">
        <div class="event">
            <div>
                <img src="/image/4.png" alt="banner">
            </div>
            <div class="slide">
                <div class="slideOuter">
                   <div class="slideInner">
                       <div v-for="(item, index) in images" :key="index" class="slide-item" :class="{ active: index === currentIndex }">
                           <img :src="item.img" :alt="item.alt">
                       </div>
                   </div>
                </div>
                <div class="dots">
                    <span v-for="(image, index) in images" :key="index" class="dot" :class="{ active: index === currentIndex }" @click="changeSlide(index)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            images:[
                {img: './image/main-event-banner02.png',     alt: 'Image 1'},
                {img: './image/main-event-banner02 (1).png', alt: 'Image 1'},
                {img: './image/main-event-banner02 (2).png', alt: 'Image 1'},
                {img: './image/main-event-banner02 (3).png', alt: 'Image 1'},
            ],
            currentIndex: 0,
      intervalId: null // interval ID 저장할 변수 추가
            }
        },
        mounted() {
    this.startSlider(); // 슬라이드 자동 전환을 시작하는 함수 호출
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
    },
    changeSlide(index) {
      this.currentIndex = index;
    },
    startSlider() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000); // 3초마다 슬라이드 전환
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // 컴포넌트가 파괴되기 전에 interval 정리
  }
    }
</script>

<style lang="scss" scoped>
.row {
    .event {
        display: flex;
        justify-content: space-between;
    }

    .slide {
        text-align: center;
        position: relative;
        .dots {
            position: absolute;
            top: 5%;
            left: 90%;
            transform: translateX(-50%);
            position: absolute;
        }

        .dot {
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            display: inline-block;
            margin: 0 2px;
            cursor: pointer;
            border: 1px solid #fff;
        }

        .dot.active {
            background:rgba(255,255,255,0);
            border: 1.5px solid #fff;
        }

        .slideOuter {
            width: 100%;
            margin: 0 auto;
            position: relative;
        }

        .slideInner {
            display: flex;
        }

        .slide-item {
            display: none;
            justify-content: center;
            align-items: center;
        }

        .slide-item.active {
            display: flex;
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>