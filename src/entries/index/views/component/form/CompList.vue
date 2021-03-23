<template>
    <div>
         <!--        主标题-->
        <comp-main-title v-if="form.type === 'main'" :form="form" :index="index" :keyValue="keyValue"></comp-main-title>
        <!--        副标题-->
        <comp-sub-title v-if="form.type === 'sub'" :form="form" :index="index"></comp-sub-title>
        <!--   输入框-->
<!--        <comp-text v-if="form.type === 'text'" :form="form" :index="index" :keyValue="keyValue"></comp-text>-->
        <!--   电话号码-->
        <comp-phone v-if="form.type === 'text'" :form="form" :index="index" :keyValue="keyValue"></comp-phone>
        <!--   身份证号-->
        <comp-i-dcard v-if="form.type === 'idcard'" :form="form" :index="index" :keyValue="keyValue"></comp-i-dcard>
        <!--   邮箱-->
        <comp-email v-if="form.type === 'email'" :form="form" :index="index" :keyValue="keyValue"></comp-email>
        <!--   日期-->
        <comp-date v-if="form.type === 'date'" :form="form" :index="index" :keyValue="keyValue"></comp-date>
        <!--   验证码-->
        <comp-code v-if="form.type === 'code'" :form="form" :index="index" :keyValue="keyValue"></comp-code>
        <!--   下拉框-->
        <comp-select v-if="form.type === 'select'" :form="form" :index="index" :keyValue="keyValue"></comp-select>
        <!--   单选框-->
        <comp-radio v-if="form.type === 'radio'" :form="form" :index="index" :keyValue="keyValue"></comp-radio>
        <!--   复选框-->
        <comp-check-box v-if="form.type === 'checkbox'" :form="form" :index="index" :keyValue="keyValue"></comp-check-box>
        <!--   上传组件-->
        <comp-upload v-if="form.type === 'upload'" :form="form" :index="index" :keyValue="keyValue"></comp-upload>
        <!--   规则说明-->
        <comp-regular-text v-if="form.type === 'regular_text'" :form="form" :index="index" :keyValue="keyValue"></comp-regular-text>
        <!--   按钮-->
        <comp-button v-if="form.type === 'button'" :form="form" :index="index" :keyValue="keyValue"></comp-button>
        <!--   同意协议-->
        <comp-check-agree v-if="form.type === 'check_agree'" :form="form" :index="index" :keyValue="keyValue"></comp-check-agree>
    </div>
</template>

<script>
import CompAdd from "@/entries/index/views/component/form/Add";
import CompText from "@/entries/index/views/component/form/Text";
import CompPhone from "@/entries/index/views/component/form/Phone";
import CompIDcard from "@/entries/index/views/component/form/IDcard";
import CompEmail from "@/entries/index/views/component/form/Email";
import CompDate from "@/entries/index/views/component/form/Date";
import CompCode from "@/entries/index/views/component/form/Code";
import CompSelect from "@/entries/index/views/component/form/Select";
import CompRadio from "@/entries/index/views/component/form/Radio";
import CompCheckBox from "@/entries/index/views/component/form/CheckBox";
import CompUpload from "@/entries/index/views/component/form/Upload";
import CompMainTitle from '../title/MainTitle.vue'
import CompSubTitle from '../title/SubTitle.vue'
import CompRegularText from '../form/RegularText.vue'
import CompButton from '../form/Button.vue'
import CompCheckAgree from '../form/CheckAgree.vue'
export default {
    name: "CompList",
    components:{
        CompAdd,
        CompText,
        CompPhone,
        CompIDcard,
        CompEmail,
        CompDate,
        CompCode,
        CompSelect,
        CompRadio,
        CompCheckBox,
        CompUpload,
        CompMainTitle,
        CompSubTitle,
        CompRegularText,
        CompButton,
        CompCheckAgree
    },
    props:{
        form:{
            type:Object
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

        }
    },
    created() {
    },
    mounted() {
    },
    methods:{

    },
    beforeDestroy() {
    }
}
</script>

<style scoped lang="scss">

</style>