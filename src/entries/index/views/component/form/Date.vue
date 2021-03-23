<template>
    <div>
        <div
                class="text-box"
                :style="{
                    marginTop: form.edit && index === keyValue ? '10px' : '0',
                    borderTop:form.edit && index === keyValue ? '#3a74c5 solid 2px' : '',
                    backgroundColor:form.edit && index === keyValue ? 'rgba(255,255,255,0.8)' : '#ffffff'
                }"
                :class="form.edit && index === keyValue ? 'box-shadow' : ''"
        >
            <div class="van-field-box">
                <div style="display: flex; align-items: center" class="text-left">
                    <span v-if="form.required" style="color: #ff0000">*</span>
                    <van-field v-model="form.name"  label="" :readonly="!form.edit ? 'readonly' : false"/>
                </div>
                <van-field
					:disabled="!form.edit && $route.params.status !== '2' ? 'disabled' : false"
                    :readonly="true"
					clickable
					name="calendar"
					v-model="form.value"
					label=""
                    class="input-box"
					:name="String(form.tab)"
					:placeholder="!form.disabled ? '点击选择'+form.name : ''"
					:rules="[{ required: form.required, message: '请点击选择'+form.name }]"
					@click="handleClickDate(index)"
				/>

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
                    color:$store.state.common_back_color
               }"
        >
            <van-icon name="add-o" /><span style="margin-left: 10px"  @click.stop="handleClickInsertItem">添加组件</span>
        </div>
        <!--        编辑工具-->
        <comp-popup-tools
                :title="form"
                :actions="actions"
                :toolsData="form_data"
                :index="index"
        ></comp-popup-tools>
        <!-- 时间选择器 -->
		<van-calendar
			v-model="form.showcalendar"
			:color="$store.state.common_back_color"
			:min-date="minDate"
			:max-date="maxDate"
			@confirm="onConfirmDate"
			@open="handleClickOpen(index)"
		/>
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
                actions: [
                    { name: '复制' },
                    { name: '绑定服务' },
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
		computed: {
		    maxDate(){
		        let curDate = (new Date()).getTime();
		        let one = 365 * 24 * 3600 * 1000 * 10;
		        let oneYear = curDate + one;
		        return new Date(oneYear);
		    },
			minDate(){
		        let curDate = (new Date()).getTime();
				let one = 365 * 24 * 3600 * 1000 * 10;
				let oneYear = curDate - one;
		        return new Date(oneYear);
		    },
		 },
		methods:{
            /**
			 * 日历弹层open时触发
			 */
			handleClickOpen (index) {
				let vm = this;
				vm.index = index;
			},
			/**
			 * 点击日期
			 */
			handleClickDate(){
				let vm = this;
				if(vm.$route.params.status !== '2') return
				vm.form.showcalendar = true;
			},
			/**
			 * 日期选择完成
			 */
			onConfirmDate (date) {
				let vm = this;
				let month = null;
				let day = null;
				date.getMonth() + 1 <= 9 ? month = `0${date.getMonth() + 1}` : month = `${date.getMonth() + 1}`;
				date.getDate() + 1 <= 10 ? day = `0${date.getDate()}` : day = `${date.getDate()}`;
				vm.form.value = `${date.getFullYear()}-${month}-${day}`;
				vm.form.showcalendar = false;
			},
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
        background: #ffffff;
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
    .van-field-box{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10px;
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
</style>
