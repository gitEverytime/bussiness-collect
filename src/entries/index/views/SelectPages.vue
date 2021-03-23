<template>
    <div class="select-pages">
        <!--    头部-->
<!--        <comp-title :titleData="titleData">-->

<!--        </comp-title>-->
        <!--    轮播-->
        <van-swipe :loop="false">
            <van-swipe-item v-for="(image, index) in images" :key="index" @click="handleClick(index)">
                <img v-lazy="image" style="width: 100%; height: 100%"/>
            </van-swipe-item>
        </van-swipe>
        <!--    底部-->
        <comp-foot :titleData="footData">

        </comp-foot>
    </div>
</template>

<script>
import CompTitle from './component/head/Head.vue'
import CompFoot from './component/foot/SelectPagesFoot.vue'
export default {
    name: "SelectPages",
    components: {
        CompTitle,
        CompFoot
    },
    data(){
        return{
            images: [
                require('../../../assets/images/page1.png'),
                'https://img.yzcdn.cn/vant/apple-2.jpg',
            ],
            titleData:{
                text:'选择样式',
                offsetTop:0
            },
            footData:{
                text:'确认选择'
            }
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        /**
         * 点击当前的轮播图
         */
        handleClick(index){
            let vm = this;
            vm.$router.push('/make/page/source1/0');
        }
    }
}
</script>

<style scoped lang="scss">
    ::v-deep .van-swipe__indicator{
        width: 20px;
        height: 20px;
        border: #000000 solid 1px;
    }
    .select-pages{
        height: 100%;
    }
</style>