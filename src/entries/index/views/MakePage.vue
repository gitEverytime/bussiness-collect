<template>
    <div
            class="make-page-box"
            id="make-page-box"
            :style="{
                background:page.common_data.layout_back_url ? 'url(' + page.common_data.layout_back_url + ') no-repeat' : $store.state.layout_back_color,
                backgroundSize:'100% 100%'
            }"
            @click="handleClickPage"
    >
         <!--        渲染banner-->
<!--        <comp-banner-box :banner_data="page.banner_data"></comp-banner-box>-->
        <div class="form-back-color">
             <!--        头部-->
            <!--<comp-title :titleData="titleData" @onClickLeft="handleClickLeft"></comp-title>-->
            <!--        渲染主、副标题-->
<!--            <comp-title-box :title_data="page.title_data"></comp-title-box>-->
            <!--        渲染表单-->
            <comp-form-box :form_data="page.form_data" :submit_data="page.submit_data"></comp-form-box>
            <comp-foot
                    :titleData="footData"
                    @onClickWatch="handleClickWatch"
                    @onClickInsertForm="handleClickInsertForm"
                    @onClickNextStep="handleClickNextStep"
            >
            </comp-foot>
        </div>
        <!--        添加题目-->
        <comp-popup-insert-subject :insertPopup="insertPopup"></comp-popup-insert-subject>
    </div>
</template>

<script>
import page from '../js/page.js'
import CompBannerBox from './component/banner/BannerBox.vue'
import CompTitleBox from './component/title/TitleBox.vue'
import CompFormBox from './component/form/FormBox.vue'
import CompTitle from './component/head/HeadForm.vue'
import CompFoot from './component/foot/Foot.vue'
import CompPopupInsertSubject from './component/popup/PopupInsertSubject.vue'
export default {
    name: "MakePage",
    components:{
        CompBannerBox,
        CompTitleBox,
        CompFormBox,
        CompTitle,
        CompFoot,
        CompPopupInsertSubject
    },
    data(){
        let vm = this;
        return{
            page:page[`${vm.$route.params.type}`],
            titleData:{
                text:'制作界面',
                offsetTop:0
            },
            footData:{
                text:'+ 添加组件'
            },
            closeEdit:{
                show:true
            },
            insertPopup:{
                show:false
            }
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        /**
         * 返回
         */
        handleClickLeft(){
            let vm = this;
            vm.$router.go(-1)
        },
        /**
         * 预览
         */
        handleClickWatch(){
            let vm = this;
            vm.page.form_data.forEach((form,index) => {
                form.edit = false;
            })
            vm.$router.push(`/preview/page/${vm.$route.params.type}/0/2`)
        },
        handleClickPage(){
            let vm = this;
        },
        /**
         * 添加题目
         */
        handleClickInsertForm(){
            let vm = this;
            vm.$store.commit('SetInsertPopup',true);
        },
        /**
         * next step
         */
        handleClickNextStep(){
            let vm = this;
            vm.$router.push('/highconfig/page/source1/0/2')
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .make-page-box{
        /*overflow: hidden;*/
        width: 100%;
        height: 100%;
        min-height: 100%;
        overflow-y: scroll;
        margin-bottom: 60px;
        .form-back-color{

        }
    }
</style>