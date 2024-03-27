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
                        <div class="infoBox_1">
                            <div><img src="/image/custom_2716877566803974.png" alt=""></div>
                            <div><img src="/image/custom_1116487034051360.png" alt=""></div>
                            <p>
                                [지엠팜더칼슘디]/1개월분 (유소아 / 어린이 칼슘) 칼슘 마그네슘
                            </p>
                        </div>
                       <div class="infoBox_2">
                            <p>
                                25,000원
                            </p>
                            <div v-for="(item,index) in images" :key="index">
                                <img :src="item.img" :alt="item.alt">
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
=======
                    <div class="product_1">
                        <div class="box">
                            <div class="num_1"> 
                            <span>Best<br>01</span>
                            </div>
                            <router-link to="/membership">
                                <img src="/image/RDV_m1_p14.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="product">
                      <div class="box_2">
                            <div class="num_2"> 
                            <span>Best<br>02</span>
                            </div>
                            <router-link to="/membership">
                                <img src="/image/RDV_m1_p12.png" alt="">
                            </router-link>
                      </div>
                    </div>
                    <div  class="product">
                        <div class="box_2">
                            <div class="num_2"> 
                            <span>Best<br>03</span>
                            </div>
                            <router-link to="/membership">
                                <img src="/image/RDV_m1_p09.png" alt="">
                            </router-link>
                        </div>
                    </div>
                  <div class="product">
                    <div class="box_2">
                        <div class="num_2"> 
                            <span>Best<br>04</span>
                            </div>
                            <router-link to="/membership">
                                <img src="/image/RDV_m1_p03.png" alt="">
                            </router-link>
                    </div>
>>>>>>> origin/main
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
    data(){
        return{
            images:[
                {img:'./image/prd_list_cart.png', imgBF : './image/prd_list_cart.png', imgAF:'prd_list_cart_h.png', alt:'장바구니'}
            ]
        }
    }
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
            img{
                padding: 30px;
            }
            .detail{
                border: 1px solid #fff;
                background: #fff;
                border-radius: 15px;
                padding: 30px;
                .infoBox_1{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-end;
                }
                .infoBox_2{
                    display: flex;
                    justify-content: space-between;
<<<<<<< HEAD
                    align-items: flex-end
                }
            }
                    align-items: flex-end;
                    font-size: 18px;
                }
<<<<<<< HEAD
=======
            justify-content: space-between;
           
            .product_1{
                border:10px solid #f7f7f7;
                background: #ffff;
                border-radius: 15px;
                margin: 10px;
                padding: 20px;
                .box{
                    position: relative;
                .num_1{
                background: #88c3e5;
                border-radius: 50px;
                width: 60px;
                height: 60px;
                color:#fff;
                border-bottom-right-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                position: absolute;
                text-align: center;
            }
            img{
                width: 80%;
                display: block;
                margin: auto;
                padding: auto;
                transition: all 0.5s;
                &:hover{
                    scale: (1.1);
                }
            }
        }
            }
>>>>>>> origin/main
            .product{
                border:1px solid #f7f7f7;
                background: #f7f7f7;
                border-radius: 15px;
                margin: 10px;
<<<<<<< HEAD
            }
        }
=======
                padding: 20px;
                border:10px solid #f7f7f7;
                .box_2{
                    position: relative;
                .num_2{
                background: #747474;
                border-radius: 50px;
                width: 60px;
                height: 60px;
                color:#fff;
                border-bottom-right-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                position: absolute;
                text-align: center;
            }
            img{
                width: 80%;
                display: block;
                margin: auto;
                padding: auto;
                transition: all 0.5s;
                &:hover{
                    scale: (1.1);
                }
            }
            }
            }
        }
        
>>>>>>> origin/main
    }
</style>