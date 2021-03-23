<template>
    <van-action-sheet
          v-model="$store.state.insertPopup"
          title=""
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
    >
        <div class="content">
            <van-tabs v-model="active">
            <van-tab title="常用组件">
                <ul>
                    <li
                            v-for="(use,index) in useData"
                            :key="index"
                            @click="handleClickUse(use)"
                    >
                        <van-icon :name="use.name" /><span>{{use.text}}</span>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="自定义组件">
                <ul>
                    <li
                            v-for="(custom,index) in customData"
                            :key="index"
                            @click="handleClickUse(custom)"
                    >
                        <van-icon :name="custom.name" /><span>{{custom.text}}</span>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
        </div>
    </van-action-sheet>
</template>

<script>
    import page from "@/entries/index/js/page";
    import form_config from "../../../js/formConfig";
    export default {
        name: "PopupInsertSubject",
        components:{

        },
        props:{
            insertPopup:{
                type:Object
            }
        },
        data(){
            let vm = this;
            return{
                form_data:page[`${vm.$route.params.type}`].form_data,
                active:'常用题库',
                useData:[
                    {
                        name:'phone-o',
                        text:'手机号'
                    },
                    {
                        name:'idcard',
                        text:'验证码'
                    },
                    {
                        name:'description',
                        text:'规则说明'
                    },
                    {
                        name:'passed',
                        text:'协议组件'
                    },
                    {
                        name:'user-o',
                        text:'按钮'
                    },
                    {
                        name:'contact',
                        text:'性别'
                    },
                    {
                        name:'idcard',
                        text:'身份证'
                    },
                    {
                        name:'phone-circle-o',
                        text:'电话号码'
                    },
                    {
                        name:'user-o',
                        text:'年龄'
                    },
                ],
                customData:[
                    {
                        name:'user-o',
                        text:'轮播图'
                    },
                    {
                        name:'user-o',
                        text:'标题'
                    },
                    {
                        name:'user-o',
                        text:'填空'
                    },
                    {
                        name:'user-o',
                        text:'单选'
                    },
                    {
                        name:'user-o',
                        text:'多选'
                    },
                    {
                        name:'user-o',
                        text:'下拉框'
                    },
                    {
                        name:'user-o',
                        text:'上传文件'
                    },
                    {
                        name:'user-o',
                        text:'大文本'
                    },
                ],
                form_config:form_config
            }
        },
        created() {

        },
        mounted() {
        },
        methods:{
            onCancel() {

            },
            /**
             * 点击常用题库
             */
            handleClickUse(item){
                let vm = this;
                switch (item.text) {
                    case '手机号':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.mobile_phone);
                        break;
                    case '身份证':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.idcard);
                        break;
                    case '年龄':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.age);
                        break;
                    case '性别':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.sex);
                        break;
                    case '多选':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.multiple);
                        break;
                    case '单选':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.single);
                        break;
                    case '填空':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.text);
                        break;
                    case '标题':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.title);
                        break;
                    case '下拉选择':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.select);
                        break;
                    case '规则说明':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.regular_text);
                        break;
                    case '按钮':
                        vm.$set(vm.form_data,vm.form_data.length,vm.form_config.button);
                        break;
                }
                vm.$store.commit('SetInsertPopup',false);
            }
        }
    }
</script>

<style scoped lang="scss">
    .content{
        ul{
            height: 300px;
            min-height: 300px;
            overflow-y: scroll;
            border-bottom: #e9e9e9 solid 1px;
            border-top: #e9e9e9 solid 1px;
            li{
                padding: 15px 20px;
                display: flex;
                align-items: center;
                span{
                    margin-left: 5px;
                }
            }
        }
    }
</style>