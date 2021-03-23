<template>
    <div style="width: 100%; height: 100%" id="poster">
        <div
            class="poster-box"
            id="posterHtml"
            v-if="$route.params.status === '2'"
            :style="{
                backgroundColor:$store.state.layout_back_color
            }"
        >
            <!--        二维码-->
            <comp-qrcode :posterImg="posterImg"></comp-qrcode>
            <!--        canvas大小-->
            <canvas id="myCanvas1" style="display: none"></canvas>
            <!--        foot-->
            <comp-poster-foot></comp-poster-foot>
        </div>
        <img v-else :src="poster.banner.img" style="width: 100%; height: 100%">
    </div>
</template>
<script>
    import CompQrcode from './component/element/Qrcode.vue'
    import CompPosterFoot from './component/foot/PosterFoot.vue'
    import poster from "../js/poster";
    export default {
        name: "PosterPage",
        components:{
            CompQrcode,
            CompPosterFoot
        },
        data(){
            return{
                posterImg:{
                    src:''
                },
                poster:poster
            }
        },
        created() {
        },
        mounted() {
            let vm = this;

        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    .poster-box{
        width: 100%;
        height: 100%;
       // background: url("../../../assets/images/post.png") no-repeat;
        background-size: 100% 100%;
    }
</style>