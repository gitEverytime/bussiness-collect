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
                <div style="display: flex; align-items: center" class="text-left">
                    <span v-if="form.required" style="color: #ff0000">*</span>
                    <van-field
                            v-model="form.name"
                            label=""
                            :style="{
                                'color':page.common_data.text_color ? page.common_data.text_color : '#323233'
                            }"
                            :readonly="!form.edit ? 'readonly' : false"
                    />
                </div>
                <van-field
                        style="width:100%"
                    name="radios"
                    label=""
                    :readonly="form.readonly"
                    :disabled="form.disabled"
                    :name="String(form.tab)"
                    v-if="!form.edit || index !== keyValue  "
                    :rules="[{ required: form.required, message: '请点击选择' + form.name }]"
                >
                    <template #input>
                        <van-radio-group v-model="form.value" readonly  @change="handleChange">
                            <van-radio
                                icon-size="16px"
                                v-for="(radio,index) in form.options"
                                :key="index"
                                :name="radio.value"
                                :readonly="!form.edit && $route.params.status !== '2' ? 'readonly' : false"
                                :checked-color="page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color"
                                :disabled="!form.edit && $route.params.status !== '2' ? 'disabled' : false"
                            >
                                <span
                                        :style="{
                                            color:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
                                        }"
                                >
                                     {{radio.text ? radio.text : radio.sname}}
                                </span>
                            </van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <!--                编辑状态radio显示样式-->
                <div v-else style="width: 100%">
                    <ul  class="radios-box">
                    <li
                            v-for="(radio,index) in form.options"
                            :key="index"
                    >
                        <van-icon
                                name="close"
                                size="16px"
                                style="margin-right: 10px"
                                @click="handleClickDeleteItem(index)"
                        />
                        <van-field
                                v-model="radio.text"
                                label=""
                                placeholder="请输入选项名称"
                        />
                    </li>
                </ul>
                <a
                        href="javascript:;"
                        class="insertItem"
                        :style="{
                            'color':$store.state.common_back_color
                        }"
                        @click="handleClickInsert"
                >+ 新增选项</a>
                </div>
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
                    <span style="width: 54px">
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
	import page from "@/entries/index/js/page";
    import CompPopupTools from '../popup/PopupTools.vue'
    import {Dialog} from "vant";
    export default{
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
                text:'',
                readonly:false,
                form_data:page[`${vm.$route.params.type}`].form_data,
                page:page[`${vm.$route.params.type}`],
                actions: [
                    { name: '复制' },
                    { name: '选择数据源' },
                    { name: '高级设置' },
                ],
            }
        },
		created() {

		},
		mounted() {
			let vm = this;
			if(vm.form.enumops) vm.getRadioList(vm.form.enumops);
			/**
             * body事件
             */
            document.body.addEventListener('click',function(){
                vm.form.edit = false;
            })
		},
		methods:{
			/**
			 * 列表获取
			 */
			getRadioList: async function(enumops) {
			    let vm = this;
			    let params = {
					enumops: enumops
			    }
			    const res = await vm.http.get(vm.api.OPTIONS,params);
			    if(!res){
			        return
			    }
				let result = res.data;
				vm.form.options = result;
			},
			/**
			 * @param {Object} index radio change
			 */
			handleChange(data){
				let vm = this;
			},
             /**
             * 三小点点击事件处理
             */
            handleClickEdit(){
                let vm = this;
                vm.form.edit = false;
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
            handleClickDeleteItem(index){
                 let vm = this;
                 Dialog.confirm({
                  title: '',
                  message: '确认删除此项目？',
                })
                .then(() => {
                    vm.form.options.splice(index,1);
                })
                .catch(() => {
                // on cancel
                });
            },
            /**
             * radios insert of item
             */
            handleClickInsert() {
                let vm = this;
                vm.$set(vm.form.options,vm.form.options.length,{
                    text:'',
                    sname: '选项' + (vm.form.options.length + 1),
                    value:`${vm.form.options.length + 1}`
                })
            },
             /**
             * 添加题目
             */
            handleClickInsertItem() {
                let vm = this;
                vm.$store.commit('SetInsertPopup',true);
            }
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../assets/scss/minix";
	::v-deep .van-icon-star{
		color: #ee0a24;
		font-size: 12px;
	}
	::v-deep .van-field__control:disabled{
		color: #000000;
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
            right: 0px;
            z-index: 100;
        }
    }
    ::v-deep .van-cell{
        padding:10px;
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
    .tools-box{
        border-top: #e9e9e9 solid 1px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .van-field-box{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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
        .van-checkbox__label{
            font-size: 12px;
        }
    }
    .radios-box{
        width: 100%;
        margin-top: 10px;
        li{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom:10px;
            ::v-deep .van-cell{
                padding: 0;
            }
        }
    }
    ::v-deep .van-radio{
        margin-bottom: 10px;
    }
    ::v-deep .van-radio:last-of-type{
        margin-bottom: 0;
    }
     .van-field__control{
         caret-color:#3a74c5;
    }
    ::v-deep .van-cell__value--alone,.van-cell__value{
        color: inherit;
    }
    ::v-deep .van-field__control{
        color: inherit;
    }
</style>
