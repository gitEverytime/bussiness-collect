<template>
   <div>
        <div
            class="van-cell__value van-field__value"
            :style="{
                marginTop: form.edit && index === keyValue ? '10px' : '0',
                borderTop:form.edit && index === keyValue ? page.common_data.text_color ? page.common_data.text_color + ' solid 2px' : '#3a74c5 solid 2px' : '',
                backgroundColor:form.edit && index === keyValue ? 'rgba(255,255,255,0.8)' : page.common_data.layout_back_url ? '' : '#ffffff'
            }"
            :class="form.edit && index === keyValue ? 'box-shadow' : ''"
        >
            <div
                   class="regular-text"
                   v-if="!form.edit || index !== keyValue"
                   v-html="form.text ? form.text : '请输入规则文案'"
                   :style="{
                       'padding':page.common_data.form_padding ? '10px ' +page.common_data.form_padding + 'px' : '15px',
                       'color':page.common_data.regular_color ? page.common_data.regular_color : '#000000',
                   }"
            >
            </div>
            <div v-else style="text-align: left">
                <!--        可视区域-->
                <quill-editor
                    class="editor"
                    ref="myTextEditor"
                    :value="form.text"
                    :options="editorOption"
                    @change="onEditorChange"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                />
            </div>
            <!--        编辑区域-->
            <div class="tools-box" v-if="form.edit && index === keyValue">
                <van-icon name="ellipsis" size="24px" @click.stop="handleClickEdit"/>
                <p class="edit-box">
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
            <van-icon name="add-o" /><span style="margin-left: 10px">添加组件</span>
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
import { quillEditor } from 'vue-quill-editor'
import page from '../../../js/page.js'
import { Dialog } from 'vant';
// import theme style
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
export default {
    name: "MainTitle",
    components:{
        CompPopupTools,
        quillEditor
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
            ],
            page:page[`${vm.$route.params.type}`],
            editorOption: {
                placeholder: "请输入规则文案",
                modules: {
                    // 可以自定义配置，toolbar内的每个二级数组为一个小组模块
                    // 根据需求可以删除不需要的配置
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                       // ['blockquote', 'code-block'],
                        //[{ 'header': 1 }, { 'header': 2 }],
                        //[{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        //[{ 'script': 'sub' }, { 'script': 'super' }],
                        //[{ 'indent': '-1' }, { 'indent': '+1' }],
                        //[{ 'direction': 'rtl' }],
                       // [{ 'size': ['small', false, 'large', 'huge'] }],
                        //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        //[{ 'font': [] }],
                       // [{ 'color': [] }, { 'background': [] }],
                        //[{ 'align': [] }],
                        //['clean'],
                       // ['link', 'image', 'video']
                    ]
                }
            },
            content:''
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
        onEditorChange(value) {
            let vm = this;
            vm.form.text = value.html;
        },
        onEditorBlur(editor) {
           // console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
          //  console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
           // console.log('editor ready!', editor)
        },
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
    .regular-text{
        padding:10px;
        text-align:left;
    }
    .van-cell__value{
        position: relative;
        transition: all .2s ease-in;
    }
    .van-field__body{
        padding: 15px;
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