<template>
    <van-form
        id="form-box sortable"
        @submit="onSubmit"
        class="list-group col"
        :style="{
            paddingTop:page.common_data.form_margin_top ? page.common_data.form_margin_top + 'px' : '0'
        }"
    >
        <div
                id="example1"
                :style="{
                    marginTop:page.common_data.formvalue_margin_top ? page.common_data.formvalue_margin_top + 'px' : '0',
                    background:page.common_data.cont_background ? page.common_data.cont_background : 'transparent',
                    border:page.common_data.cont_border ? '#947f65 solid ' + page.common_data.cont_border + 'px' : 'none',
                    borderRadius:page.common_data.cont_borderRadius ? page.common_data.cont_borderRadius + 'px' : '0',
                    padding:page.common_data.cont_padding ? page.common_data.cont_padding + 'px 0' : '0',
                    margin:page.common_data.cont_margin ? '0 ' + page.common_data.cont_margin + 'px' : '0',
                }"
        >
            <div
                id="child"
                v-for="(form,index) in form_data"
                :key="index"
                @click.stop="handleClickTitle(form,index)"
                class="list-group col"
            >
            <comp-comp-list :form="form" :index="index"  :keyValue="keyValue"></comp-comp-list>
        </div>
        </div>
        <!--  Submit-->
    </van-form>
</template>

<script>
import CompAdd from './Add.vue'
import CompSubmit from './Submit.vue'
import page from "@/entries/index/js/page";
import CompCompList from "@/entries/index/views/component/form/CompList";
import $ from 'jquery'
import Sortable from 'sortablejs'
var timer = null;

export default {
    name: "FormBox",
    components:{
        CompAdd,
        CompCompList,
        CompSubmit
    },
    props:{
        form_data:{
            type:Array
        },
        submit_data:{
            type:Object
        }
    },
    data(){
        let vm = this;
        return{
            keyValue:null,
            isEdit:true,
            page:page[`${vm.$route.params.type}`],
        }
    },
    computed:{
        form_data_str(){
            let vm = this;
            return JSON.stringify(vm.form_data)
        }
    },
    watch:{
       form_data_str(newData,oldData){
           let vm = this;
           if(newData !== oldData) {
               // vm.sortAbleFunc();
           }
       }
    },
    created() {
    },
    mounted() {
        let vm = this;
        if(vm.$route.params.status !== '2') vm.sortAbleFunc();
    },
    methods:{
        sortAbleFunc(){
            let vm = this;
            vm.$nextTick(() => {
                var example1 = document.getElementById('example1');
                new Sortable(example1, {
                    animation: 150,
                    delay:100,
                    delayOnTouchOnly: false,
                    ghostClass: 'blue-background-class',
                    scroll: false, // or HTMLElement
                    scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
                    scrollSpeed: 10, // px
                    bubbleScroll: false, // apply autoscroll to all parent elements, allowing for easier movement
                    /**
                     * 元素被选中
                     * @param evt
                     */
                    onChoose: function( /**Event*/ evt) {
                        vm.isEdit = false;
                    },
                    /**
                     * 开始拖拽的时候
                     * @param evt
                     */
                    onStart: function( /**Event*/ evt) {

                    },
                    /**
                     * 结束拖拽的时候
                     * @param evt
                     */
                    onEnd: function( /**Event*/ evt) {
                        vm.isEdit = false;
                        //vm.form_data = vm.swapArr(vm.form_data,evt.oldIndex,evt.newIndex);
                    },
                    /**
                     * 元素未被选中的时候（从选中到未选中）
                     * @param evt
                     */
                    onUnchoose: function( /**Event*/ evt) {
                    }
                });
            })
        },
        /**
         * 提交
         */
        onSubmit(){
            let vm = this;

        },
        swapArr(arr, index1, index2) {
            arr[index1] = arr.splice(index2, 1, arr[index1])[0];
            return arr;
        },
        /**
         * 双击进入编辑
         */
        handleClickTitle(form,index){
            let vm = this;
            if(vm.$route.params.status === '2') return;
            setTimeout(() => {
                form.edit = true;
                vm.keyValue = index;
            },300)
        }
    },
    beforeDestroy() {
    }
}
</script>

<style lang="scss">
    .ui-state-default{
        /*position: absolute;*/
    }
    .sortable-drag{
         background: rgba(255,255,255,0.8);
         -moz-box-shadow:0px 2px 7px -1px #C4C4C4;
         -webkit-box-shadow:0px 2px 7px -1px #C4C4C4;
         box-shadow:0px 2px 7px -1px #C4C4C4;
    }
</style>