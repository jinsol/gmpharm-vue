<template>
    <div>
        <div>
            <div v-for="(item,index) in images" :key="index">
                <img :src="item.img" :alt="item.alt">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                images:[
                    {img:'./image/main_banner_slide.jpg', alt:'배너1'},
                    {img:'./image/main_banner_slide (1).jpg', alt:'배너2'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>