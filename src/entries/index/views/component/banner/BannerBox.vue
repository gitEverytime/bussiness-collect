<template>
    <div class="swipe-box"
          v-if="banner_data['type'] === 'banner1'"
         :style="{
             height:banner_data.height + 'px',
             color:'#ffffff',
             backgroundColor:$store.state.common_back_color
         }"
         @click="handleClick"
    >
        <comp-banner :banner_data="banner_data">
        </comp-banner>
        <label v-if="$route.params['status'] !== '2'"> Banner(点击编辑)</label>
    </div>
</template>

<script>
import CompBanner from './Banner.vue'
export default {
    name: "BannerBox",
    components:{
        CompBanner
    },
    props:{
        banner_data:{
            type:Object
        }
    },
    data(){
        let vm = this;
        return{

        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        /**
         * 点击编辑轮播
         */
        handleClick(){
            let vm = this;
            //
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .swipe-box{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>