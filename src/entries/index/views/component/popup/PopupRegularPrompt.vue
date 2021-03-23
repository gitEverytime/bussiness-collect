<template>
    <van-action-sheet
          v-model="regularPopup.show"
          title=""
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
    >
        <div class="content">
            <van-tabs v-model="active">
            <van-tab title="数据验证">
                <ul>
                    <li v-for="(item,index) in regularText" :key="index" @click="onSelect(item)">
                       <span>{{item.name}}</span>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
        </div>
    </van-action-sheet>
</template>

<script>
    export default {
        name: "PopupInsertSubject",
        components:{

        },
        props:{
            regularPopup:{
                type:Object
            },
            title:{
                type:Object
            }
        },
        data(){
            return{
                active:'数据验证',
                regularText:[
                    {
                        name:'无'
                    },
                    {
                        name:'手机号'
                    },
                    {
                        name:'身份证'
                    },
                    {
                        name:'电话号码'
                    },
                    {
                        name:'纯数字'
                    },
                ]
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
             * 选中
             */
            onSelect(action){
                let vm = this;
                vm.title.regularprompt = action.name;
                vm.regularPopup.show = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .content{
        ul{
            height: 250px;
            min-height: 250px;
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