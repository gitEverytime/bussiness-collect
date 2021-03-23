<template>
    <div
        class="comp_title title_fixed"
        id="comp_title title_fixed"

    >
        <ul class="foot-box">
            <li>
                <van-icon name="browsing-history-o" @click.stop="$emit('onClickWatch')"/>
                <span>预览</span>
            </li>
            <li>
                 <a
                         href="javascript:;"
                         class="insert-btn"
                         @click.stop="$emit('onClickInsertForm')"
                         :style="{
                              color:$store.state.common_back_color
                         }"
                 >
                    {{titleData.text}}
                </a>
                 <a
                        href="javascript:;"
                        class="theme-btn"
                        @click.stop="handleClickThemeSet"
                        :style="{
                              color:$store.state.common_back_color
                         }"
                >
                    主题设置
                </a>
                <a
                        href="javascript:;"
                        class="next-btn"
                        @click.stop="$emit('onClickNextStep')"
                        :style="{
                              backgroundColor:$store.state.common_back_color
                         }"
                >
                    下一步
                </a>
            </li>
        </ul>
        <!--        主题设置弹层-->
        <comp-popup-theme-set :themePopup="themePopup">

        </comp-popup-theme-set>
    </div>
</template>

<script>
import CompPopupThemeSet from '../popup/PopupThemeSet.vue'
export default {
    components:{
        CompPopupThemeSet
    },
    props:{
        titleData:Object
    },
    data(){
        let vm = this;
        return{
            themePopup:{
                show:false
            }
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
         * 主题设置
         */
        handleClickThemeSet(){
            let vm = this;
            vm.themePopup.show = true;
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
            width: 20%;
            display: flex;
            border-right: #eff2f7 solid 1px;
            margin-right: 10px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            span{
                color: #616161;
                font-size: 12px;
            }
        }
        li:nth-of-type(2){
            display: flex;
            width: 80%;
            a{
                padding: 10px 0;
            }
            .insert-btn{
                width: 33.33%;
                box-sizing: border-box;
                background: #f4f7fc;
                border-radius: 4px;
                margin-right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .theme-btn{
                width: 33.33%;
                box-sizing: border-box;
                background: #f4f7fc;
                border-radius: 4px;
                margin-right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .next-btn{
                width: 33.33%;
                color: #FFFFFF;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>

