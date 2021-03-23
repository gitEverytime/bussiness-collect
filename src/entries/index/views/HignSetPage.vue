<template>
    <div
            class="hign-set-box"
            :style="{
                backgroundColor:$store.state.layout_back_color
            }"
    >
        <div class="hign-box">
            <comp-comp-list
             :form="form"
             :index="Number($route.params.index)"
             :keyValue="9999"
            >
            </comp-comp-list>
        </div>
        <div  class="set-box" >
            <van-field name="checkbox" label="当前组件主题">
                <template #input>
                    <v-color-picker :form="form" keyValue="color"></v-color-picker>
                </template>
            </van-field>
        </div>
        <div class="set-box">
            <van-field name="checkbox" label="文本位置">
                <template #input>
                    <van-radio-group v-model="form.textalign" class="small-radio" icon-size="12px" direction="horizontal">
                        <van-radio name="left" >居左</van-radio>
                        <van-radio name="center" >居中</van-radio>
                        <van-radio name="right" >居右</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
        </div>
        <div  class="set-box">
            <van-field name="checkbox" label="字体大小">
                <template #input>
                    <van-radio-group v-model="form.fontsize" class="small-radio" icon-size="12px" direction="horizontal">
                        <van-radio name="24" >大</van-radio>
                        <van-radio name="18" >中</van-radio>
                        <van-radio name="14" >小</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
        </div>
<!--        <div  class="set-box" >-->
<!--            <van-field name="checkbox" label="当前组件主题">-->
<!--                <template #input>-->
<!--                    <v-color-picker :form="form" keyValue="color"></v-color-picker>-->
<!--                </template>-->
<!--            </van-field>-->
<!--        </div>-->
        <comp-hign-set-foot></comp-hign-set-foot>
    </div>
</template>

<script>
    import CompCompList from "@/entries/index/views/component/form/CompList";
    import VColorPicker from "./component/element/VColorPicker";
    import CompHignSetFoot from './component/foot/HignSetFoot.vue'
    import page from "../js/page";
    export default {
        name: "HignSetPage",
        components:{
            CompCompList,
            VColorPicker,
            CompHignSetFoot
        },
        data(){
            let vm = this;
            return{
                page:page[`${vm.$route.params.type}`],
                form:page[`${vm.$route.params.type}`].form_data[Number(vm.$route.params.index)]
            }
        },
        created() {
        },
        mounted() {
            let vm = this;
            console.log(Number(vm.$route.params.index),vm.page.form_data)
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    .hign-set-box{
        height: 100%;
        width: 100%;
        .title{
            color: rgba(0,0,0,0.8);
        }
        .hign-box{
            background: #FFFFFF;
        }
        .set-box{
            padding: 0;
            background: #FFFFFF;
            margin: 10px 10px 0;
            overflow: inherit;
        }
        ::v-deep .van-cell{
            overflow: inherit;
        }
    }
</style>