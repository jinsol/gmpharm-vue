<template>
    <div class="row">
        <section-title title="Best Product" sub_title="건강과 행복을 위한 시작, 지금 가장 인기있는 상품을 만나보세요." />
        <div>
            <div class="event">
                <div class="bestMain">
                    <router-link to="/membership">
                        <img src="/image/RDV_m1_p14.png" alt="">
                    </router-link>
                    <div class="detail">
                        <p>
                            [지엠팜더칼슘디]/1개월분 (유소아 / 어린이 칼슘) 칼슘 마그네슘
                        </p>
                        <p>
                            25,000원
                        </p>
                    </div>
                </div>
                <div class="best">
                    <div class="product">
                        <router-link to="/membership">
                            <img src="/image/RDV_m1_p14.png" alt="">
                        </router-link>
                    </div>
                    <div class="product">
                        <router-link to="/membership">
                            <img src="/image/RDV_m1_p12.png" alt="">
                        </router-link>
                    </div>
                    <div  class="product">
                        <router-link to="/membership">
                            <img src="/image/RDV_m1_p09.png" alt="">
                        </router-link>
                    </div>
                  <div class="product">
                        <router-link to="/membership">
                            <img src="/image/RDV_m1_p03.png" alt="">
                        </router-link>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue"
    export default {
        components:{
        SectionTitle,
    },
    }
</script>

<style lang="scss" scoped>
    .event{
        display: flex;
        justify-content: center;
        .bestMain{
            background: #eff5f8;
            flex: 0 0 45%;
            border: 1px solid #eff5f8;
            border-radius: 15px;
            text-align: center;
            padding: 30px;
            .detail{
                border: 1px solid #fff;
                background: #fff;
                border-radius: 15px;
                padding: 30px;
            }
        }
        .best{
            display: flex;
            flex-wrap: wrap;
            .product{
                border:1px solid #f7f7f7;
                background: #f7f7f7;
                border-radius: 15px;
                margin: 10px;
            }
        }
    }
</style>