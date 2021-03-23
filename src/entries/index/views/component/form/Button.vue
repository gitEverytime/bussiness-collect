<template>
    <div>
        <div
            class="text-box"
            :style="{
                marginTop: form.edit && index === keyValue ? '10px' : '0',
                borderTop:form.edit && index === keyValue ? page.common_data.text_color ? page.common_data.text_color + ' solid 2px' : '#3a74c5 solid 2px' : '',
                backgroundColor:form.edit && index === keyValue ? 'rgba(255,255,255,0.8)' : page.common_data.layout_back_url ? '' :  '#ffffff',
                'padding':page.common_data.form_padding ? '0 ' + page.common_data.form_padding + 'px' : '0 15px'
            }"
            :class="form.edit && index === keyValue ? 'box-shadow' : ''"
        >
            <div class="van-field-box">
                <Button
                        class="submitBtn"
                        :style="{
                            backgroundColor: page.common_data.btn_back_color ? page.common_data.btn_back_color : '#ffffff',
                            'color':page.common_data.text_color ? page.common_data.text_color : '#323233',
                            '-moz-box-shadow':'0px 2px 7px -1px #C4C4C4',
                            '-webkit-box-shadow':'0px 2px 7px -1px #C4C4C4',
                            ' box-shadow':'0px 2px 7px -1px #C4C4C4'
                        }"
                >{{form.text}}</Button>
            </div>
            <!--            描述-->
            <div class="desc-box" v-if="form.edit && index === keyValue">
                <van-field v-model="form.desc" label="" placeholder="添加问题描述" />
            </div>
            <!--        编辑区域-->
            <div class="tools-box" v-if="form.edit && index === keyValue">
                <div style="display: flex;">
                    <van-icon name="ellipsis" size="24px" @click.stop="handleClickEdit"/>
                    <p class="regular-prompt" style="margin-left: 20px" v-if="form.regularprompt">
                        (验证{{form.regularprompt}})
                    </p>
                </div>
                <p class="edit-box">
                    <span >
                        <van-checkbox v-model="form.required" class="small-checkbox" icon-size="12px">必填</van-checkbox>
                    </span>
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
                :toolsData="form_data"
                :index="index"
        ></comp-popup-tools>
    </div>
</template>

<script>
	import regular from '../../../../../assets/js/regular.js'
    import page from "@/entries/index/js/page";
    import {Dialog} from "vant";
    import CompPopupTools from '../popup/PopupTools.vue'
	export default{
        // eslint-disable-next-line no-mixed-spaces-and-tabs
	    components:{
	        CompPopupTools
        },
		props:{
            // eslint-disable-next-line no-mixed-spaces-and-tabs
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
                text:'',
                readonly:false,
                form_data:page[`${vm.$route.params.type}`].form_data,
                page:page[`${vm.$route.params.type}`],
                actions: [
                    { name: '复制' },
                    { name: '数据验证',subname: '' },
                ],
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
            /**
             * 表单验证正则函数
             */
			validator(val) {
                let vm = this;
                let prompt = vm.form.regularprompt;
                switch (prompt) {
                    case "手机号":
                        return regular.number().test(val);
                        // eslint-disable-next-line no-unreachable
                        break;
                    case "身份证":
                        return regular.idCard().test(val);
                        // eslint-disable-next-line no-unreachable
                        break;
                    case "纯数字":
                        return regular.num().test(val);
                        // eslint-disable-next-line no-unreachable
                        break;
                    case "电话号码":
                        return regular.number().test(val);
                        // eslint-disable-next-line no-unreachable
                        break;
                    case "无":
                        return regular.number().test(val);
                        // eslint-disable-next-line no-unreachable
                        break;
                }
			},
            /**
             * 三小点点击事件处理
             */
            handleClickEdit(){
                let vm = this;
                vm.form.edit = false;
                vm.actions[1].subname = `(当前验证：${vm.form.regularprompt})`;
                vm.form.sheetdialog = true;
            },
            /**
             * 删除事件处理
             */
            handleClickDelete(){
                let vm = this;
                Dialog.confirm({
                  title: '',
                  message: '确认删除此题目？',
                })
                .then(() => {
                    vm.form_data.splice(vm.index,1);
                })
                .catch(() => {
                // on cancel
                });
            },
            /**
             * 添加题目
             */
            handleClickInsert() {
                let vm = this;
                vm.$store.commit('SetInsertPopup',true);
            }
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../assets/scss/minix";
    .submitBtn{
        margin-top: 10px;
        padding: 8px 0;
        font-size: 20px;
        width: 100%;
        background: transparent;
        border-radius: 20px;
        font-weight: bold;
    }
    .text-box{
        position: relative;
        transition: all .2s ease-in;
        .text-left{
            width: 8.2em;
        }
        .clear-form-btn{
            position: absolute;
            top: 10px;
            right: 0;
            z-index: 100;
        }
    }
    .van-field-box{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    ::v-deep .van-checkbox{
        margin-right: 10px;
    }
	::v-deep .van-icon-star{
		color: #ee0a24;
		font-size: 12px;
	}
	::v-deep .van-uploader{
		padding: 16px;
	}
    ::v-deep .van-cell{
        padding: 10px 10px 10px 0;
        background: transparent;
        &:after{
            border-bottom: none;
        }
    }
    ::v-deep .van-field__control{
         caret-color:#3a74c5;
    }
    ::v-deep .input-box{
        .van-cell__value{
            .van-field__body{
                border: #d8d8d8 solid 1px;
                padding: 5px;
                border-radius: 2px;
            }
        }
    }
    .tools-box{
        border-top: #e9e9e9 solid 1px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
    }
    .desc-box{
        padding: 0 10px;
    }
    ::v-deep .small-checkbox{
        margin-right: 10px;
        .van-checkbox__label{
            font-size: 12px;
        }
    }
</style>
