<template>
    <div
        class="comp_title title_fixed"
        id="comp_title title_fixed"

    >
        <ul class="foot-box">
            <li>
                 <a
                         href="javascript:;"
                         class="insert-btn"
                         @click.stop="onClickBackPreview"
                         :style="{
                              color:$store.state.common_back_color
                         }"
                 >
                    上一步
                </a>
                <a
                        href="javascript:;"
                        class="next-btn"
                        @click.stop="onClickNextStep"
                        :style="{
                              backgroundColor:$store.state.common_back_color
                         }"
                >
                    下一步
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components:{

    },
    props:{
        titleData:Object
    },
    data(){
        let vm = this;
        return{
        }
    },
    mounted() {
        let vm = this;
        /**
         * 判断当前环境为沉浸式状态栏模式
         */
        var immersed = 0;
        var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
        if(ms&&ms.length>=3){ // 当前环境为沉浸式状态栏模式
            immersed=parseFloat(ms[2]);// 获取状态栏的高度
            /**
             * 获取title的top
             */
            var t_top = document.querySelector('.comp_title').offsetTop;
            document.getElementById('comp_title').style.top = (immersed + t_top)+'px';
        }
    },
    methods:{
        /**
         * 返回
         */
        onClickLeft(){

        },
        /**
         * 退出预览
         */
        onClickBackPreview(){
            let vm = this;
            vm.$router.go(-1);
        },
        /**
         * next of step
         */
        onClickNextStep(){
            let vm = this;
            vm.$router.push('/poster/page/source1/0/2')
        }
    }
}
</script>

<style lang="scss" scoped>
.comp_title{
    ::v-deep .van-nav-bar .van-icon,
    ::v-deep .van-nav-bar__title
    {
        color: #FFFFFF;
    }
    .saveBtn{
        color: #FFFFFF;
    }
    background: #FFFFFF;
}
.title_fixed{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2001;
    width: 100%;
}
::v-deep .van-button--info{
    background-color: transparent;
    border:none;
    font-size: 14px;
}
.code{
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    i{
        font-size: 20px;
    }
    label{
        font-size: 10px;
    }
}
    .foot-box{
        padding: 10px 10px;
        display: flex;
        flex-direction: row;
        li:nth-of-type(1){
            display: flex;
            width: 100%;
            .insert-btn{
                width: 60%;
                background: #f4f7fc;
                border-radius: 4px;
                margin-right: 10px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
            }
            .next-btn{
                width: 40%;
                color: #FFFFFF;
                border-radius: 4px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
            }
        }
    }
</style>

