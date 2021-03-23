<template>
    <div
            class="page-list-box"
            :style="{
                backgroundColor:$store.state.layout_back_color
            }"
    >
        <h4 class="title">新建</h4>
        <div class="new-build-box">
            <div class="btn">
                <van-icon name="plus" color="#e1bc47" size="40px"/>
                <label>空白揽收</label>
            </div>
        </div>
        <h4 class="title">防疫</h4>
    </div>
</template>

<script>
    export default {
        name: "PageList",
        components:{

        },
        data(){
            return{

            }
        },
        created() {
        },
        mounted() {
        },
        methods:{

        },
        beforeDestroy() {
        }
    }
</script>

<style scoped lang="scss">
    .page-list-box{
        height: 100%;
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        .title{
            color: #525157;
            font-size: 18px;
            font-weight: bold;
        }
        .new-build-box{
            padding: 10px 0 20px;
            .btn{
                width: 150px;
                padding: 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: #FFFFFF;
                label{
                    margin-top: 10px;
                }
            }
        }
    }
</style>