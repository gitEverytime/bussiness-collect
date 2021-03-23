<template>
    <div>
        <van-action-sheet
          v-model="title.sheetdialog"
          :actions="actions"
          cancel-text="取消"
          description=""
          close-on-click-action
          @cancel="onCancel"
          @select="onSelect"
        />
        <!--        验证提示-->
        <comp-popup-regular-prompt
                :regularPopup="regularPopup"
                :title="title"

        >
        </comp-popup-regular-prompt>
    </div>
</template>

<script>
    import page from '../../../js/page.js'
    import CompPopupRegularPrompt from './PopupRegularPrompt.vue'
    export default {
        name: "PopupTools",
        components:{
            CompPopupRegularPrompt
        },
        props:{
            title:{
                type:Object
            },
            actions:{
                type: Array
            },
            index:{
                type:Number
            },
            toolsData:{
                type:Array
            }
        },
        data(){
            let vm = this;
            return{
                page:page[`${vm.$route.params.type}`],
                regularPopup:{
                    show:false
                }
            }
        },
        methods:{
            /**
             * 关闭时触发
             */
            onCancel(){
                let vm = this;
                vm.title.sheetdialog = false;
                return false;
            },
            /**
             * 选中触发
             */
            onSelect(active,index){
                let vm = this;
                switch (active.name) {
                    case '复制':
                        let obj = JSON.parse(JSON.stringify(vm.title));
                        obj.sheetdialog = false;
                        vm.toolsData.splice(vm.index + 1,0,obj);
                        break;
                    case '数据验证':
                        vm.regularPopup.show = true;
                        break;
                    case '高级设置':
                        vm.$router.push(`/hignset/page/${vm.$route.params.type}/${vm.index}/2`)
                        break;
                }
                return false;
            }
        }
    }
</script>

<style scoped>

</style>