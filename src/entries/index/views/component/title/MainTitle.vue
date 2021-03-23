<template>
   <div>
        <div
            class="van-cell__value van-field__value"
            :style="{
                marginTop: form.edit && index === keyValue ? '10px' : '0',
                borderTop:form.edit && index === keyValue ? page.common_data.text_color ? page.common_data.text_color + ' solid 2px' : '#3a74c5 solid 2px' : '',
                backgroundColor:form.edit && index === keyValue ? 'rgba(255,255,255,0.8)' : page.common_data.layout_back_url ? '' :  '#ffffff',

            }"
            :class="form.edit && index === keyValue ? 'box-shadow' : ''"
        >
            <!--        可视区域-->
            <div
                    class="van-field__body"
                    :style="{
                        padding:page.common_data.form_padding ? page.common_data.form_padding + 'px' : '15px'
                    }"
            >
                <textarea
                    name="username"
                    placeholder="请您输入主标题"
                    class="van-field__control"
                    v-model="form.text"
                    :readonly="!form.edit && $route.params.status !== '2' ? 'readonly' : false"
                    :style="{
                        color:form.color,
                        fontSize:form.fontsize + 'px',
                        textAlign:form.textalign,
                         'color':page.common_data.text_color ? page.common_data.text_color : '#323233',
                    }"
                >
                </textarea>
            </div>
            <!--        编辑区域-->
            <div class="tools-box" v-if="form.edit && index === keyValue">
                <van-icon name="ellipsis" size="24px" @click.stop="handleClickEdit"/>
                <p class="edit-box">
<!--                    <span style="margin-right: 20px">-->
<!--                        <van-radio-group v-model="form.textalign" class="small-radio" icon-size="12px" direction="horizontal">-->
<!--                            <van-radio name="left" >左</van-radio>-->
<!--                            <van-radio name="center" >中</van-radio>-->
<!--                            <van-radio name="right" >右</van-radio>-->
<!--                        </van-radio-group>-->
<!--                    </span>-->
<!--                    <span>-->
<!--                        <van-radio-group v-model="form.fontsize" class="small-radio" icon-size="12px" direction="horizontal">-->
<!--                            <van-radio name="24" >大</van-radio>-->
<!--                            <van-radio name="18" >中</van-radio>-->
<!--                            <van-radio name="14" >小</van-radio>-->
<!--                        </van-radio-group>-->
<!--                    </span>-->
                    <span class="delete-box" @click="handleClickDelete">
                        <van-icon name="delete-o" size="18px"/>
                        <label>删除</label>
                    </span>
                </p>
            </div>
        </div>
        <div
               class="insert-box"
               v-if="form.edit && index === keyValue"
               :style="{
                    color:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
               }"
        >
            <van-icon name="add-o" />
            <span
                style="margin-left: 10px"
                @click.stop="handleClickInsert"
            >
                添加组件
            </span>
        </div>
        <!--        编辑工具-->
        <comp-popup-tools
                :title="form"
                :actions="actions"
                :toolsData="page.form_data"
                :index="index"
        ></comp-popup-tools>
   </div>
</template>
<!--:readonly="$route.params['status'] !== '2' ? 'readonly' : ''"-->
<script>
import CompPopupTools from '../popup/PopupTools.vue'
import page from '../../../js/page.js'
import { Dialog } from 'vant';
export default {
    name: "MainTitle",
    components:{
        CompPopupTools
    },
    props:{
        form:{
            type:Object,
        },
        index:{
            type:Number
        },
        keyValue:{
            type:Number
        }
    },
    data(){
        let vm = this;
        return{
            i:0,
            show:true,
            actions: [
                { name: '复制' },
                { name: '高级设置' },
            ],
            page:page[`${vm.$route.params.type}`],
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        /**
         * body事件
         */
        document.body.addEventListener('click',function(){
            vm.form.edit = false;
        })
    },
    methods:{

        handleClickEdit(){
            let vm = this;
            vm.form.edit = false;
            vm.form.sheetdialog = true;
        },
        /**
         * 删除
         */
        handleClickDelete(){
            let vm = this;
            Dialog.confirm({
              title: '',
              message: '确认删除此题目？',
            })
            .then(() => {
                vm.page.form_data.splice(vm.index,1);
            })
            .catch(() => {
            // on cancel
            });
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">
    .van-cell__value{
        position: relative;
        transition: all .2s ease-in;
    }
    .van-field__body{
    }
    .ellipsis-btn{
        position: absolute;
        top: 15px;
        right: 10px;
    }
    .tools-box{
        border-top: #e9e9e9 solid 1px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .van-field__control{
         caret-color:#3a74c5;
    }
    input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #b2b2b2;
    }
    input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #b2b2b2;
    }
    input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #b2b2b2;
    }
    input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #b2b2b2;
    }
    .van-field__body{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    .ellipsis-icon{
        transform: rotate(90deg);
        font-size: 18px;
        margin-top: 5px;
    }
    .edit-box{
        display: flex;
    }
    .delete-box{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        color: #ff0000;
    }
    .box-shadow{
         -moz-box-shadow:0px 2px 7px -1px #C4C4C4;
         -webkit-box-shadow:0px 2px 7px -1px #C4C4C4;
         box-shadow:0px 2px 7px -1px #C4C4C4;
    }
    .insert-box{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        font-size: 14px;
    }
    ::v-deep .small-radio{
        .van-radio--horizontal{
            margin-right: 7px;
        }
        .van-radio__label{
            font-size: 12px;
            margin-left: 5px;
        }
    }
</style>