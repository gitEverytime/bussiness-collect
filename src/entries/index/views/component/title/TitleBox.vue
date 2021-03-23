<template>
    <div id="sortable">
        <div
            class="title-box ui-state-default"
            v-for="(title,index) in title_data"
            :key="index"
            @click.stop="handleClickTitle(title,index)"
        >
            <!--        主标题-->
            <comp-main-title v-if="title.type === 'main'" :title="title" :index="index" :keyValue="keyValue"></comp-main-title>
            <!--        副标题-->
            <comp-sub-title v-if="title.type === 'sub'" :title="title" :index="index"></comp-sub-title>
        </div>
    </div>
</template>

<script>
import CompMainTitle from './MainTitle.vue'
import CompSubTitle from './SubTitle.vue'
import CompTitlePopup from './TitlePopup.vue'
import $ from 'jquery'
// import 'jquery-ui-dist/jquery-ui'
// import 'jquery-ui-dist/jquery-ui.min.css'

export default {
    name: "TitleBox",
    components:{
        CompMainTitle,
        CompSubTitle,
        CompTitlePopup
    },
    props:{
        title_data:{
            type:Array
        }
    },
    data(){
        let vm = this;
        return{
            popupData:{},
            popupStatus:{
                show:false
            },
            keyValue:null
        }
    },
    created() {
    },
    mounted() {
        let vm = this;
        // vm.$nextTick(() => {
        //     $( "#sortable" ).sortable();
        //     $( "#sortable" ).disableSelection();
        // })
    },
    methods:{

        /**
         * 双击进入编辑
         */
        handleClickTitle(title,index){
            let vm = this;
            title.edit = true;
            vm.keyValue = index;
        }
    },
    beforeDestroy() {
    }
}
</script>

<style scoped>

</style>