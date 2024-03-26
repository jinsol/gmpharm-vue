<template>
    <div id="hotKeyword" class="row">
        <section-title title="Hot Keyword" /> 
        <div class="Btn">
            <button>{{ PrdMenu.menu1 }}</button>
            <button>{{ PrdMenu.menu2 }}</button>
            <button>{{ PrdMenu.menu3 }}</button>
            <button>{{ PrdMenu.menu4 }}</button>
            <button>{{ PrdMenu.menu5 }}</button>
            <button>{{ PrdMenu.menu6 }}</button>
            <button>{{ PrdMenu.menu7 }}</button>
            <button>{{ PrdMenu.menu8 }}</button>
        </div>
        <div class="slideInner">
            <swiper class="slide" :options="keywordSlide">
                <swiper-slide v-for="{item,index} in PrdImg" :key="index">
                    <img :src="item.image" :alt="item.alt">
                </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/myswiper.css'

export default {
    components:{
        Swiper,
        SwiperSlide,
        SectionTitle,
    },
    data(){
        return{
            PrdMenu:{
                menu1:'유소아 · 어린이',
                menu2:'임신 · 출산',
                menu3:'성인건강',
                menu4:'이너뷰티',
                menu5:'오메가3',
                menu6:'유산균',
                menu7:'칼슘',
                menu8:'면역력',
            },
            PrdImg:[
                {image:'./image/RDV_m1_p04.png', alt:'제품사진', link:'/',},
                {image:'./image/RDV_m1_p04.png', alt:'제품사진', link:'/',},
                {image:'./image/RDV_m1_p10.png', alt:'제품사진', link:'/',},
                {image:'./image/RDV_m1_p09.png', alt:'제품사진', link:'/',},
                {image:'./image/4be2ea3e0945be86acfd1e2af41d2488.png', alt:'제품사진', link:'/',},
                {image:'./image/6db1fdba294eef08a5770727f48f7c81.png', alt:'제품사진', link:'/',},
                {image:'./image/0ea7e312b54255c56fe38800791860d4.png', alt:'제품사진', link:'/',},
                {image:'./image/7849293f0d59512abaff2cab6462ff80.png', alt:'제품사진', link:'/',},
                {image:'./image/f7aada54d7b297ae5ebedbeb494d55f1.png', alt:'제품사진', link:'/',},
                {image:'./image/RDV_m1_p06.png', alt:'제품사진', link:'/',},
                {image:'./image/RDV_m1_p14.png', alt:'제품사진', link:'/',},
            ],
            keywordSlide:{
                slidesPerView:5,
                spaceBetween:20,
                effect:"slide",
                autoplay:{
                    delay:3000
                },
                loop:true, 
                navigation:{
                        prevEl:'.swiper-button-prev',
                        nextEl:'.swiper-button-next'
                    },
            },
        }
    }
}

</script>

<style lang="scss" scoped>

</style>