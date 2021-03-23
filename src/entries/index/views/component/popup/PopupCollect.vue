<template>
    <van-action-sheet
          v-model="collectPopup.show"
          title=""
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
    >
        <div class="content">
            <van-tree-select
                :items="conf.options"
                :active-id.sync="conf.activeIds"
                :main-active-index.sync="activeIndex"
            />
        </div>
    </van-action-sheet>
</template>

<script>
    export default {
        name: "PopupCollect",
        components:{

        },
        props:{
            collectPopup:{
                type:Object
            },
            conf:{
                type:Object
            }
        },
        data(){
            return{
                active:'数据验证',
                activeIndex: 0,
            }
        },
        computed:{
            activeIds(){
                let vm = this;
                return JSON.stringify(vm.conf.activeIds)
            }
        },
        watch:{
            activeIds(data) {
                let vm = this;
                let values = [];
                if(data) {
                    vm.conf.activeIds.forEach((id) => {
                        values.push(vm.conf.options[0].children[id].value);
                    })
                }
                values.length ? vm.conf.value = values.join(',') : vm.conf.value = '';
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
</style>s