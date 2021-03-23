<template>
    <div
            class="high-config-box"
            :style="{
                backgroundColor:$store.state.layout_back_color
            }"
    >
        <h3 class="title">填写设置</h3>
        <p class="list-box">
            <van-field v-model="page.title" label="文本" placeholder="请输入标题" :border="false"/>
        </p>
        <p class="list-box">
            <van-field name="radio" label="是否发布">
                <template #input>
                    <van-radio-group v-model="page.release" direction="horizontal">
                        <van-radio name="1">否</van-radio>
                        <van-radio name="2">是</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
        </p>
        <p class="list-box">
            <van-field
                  readonly
                  clickable
                  name="picker"
                  :value="page.type"
                  label="收集表类型"
                  placeholder="点击选择类型"
                  @click="showPicker = true"
            />

        </p>
        <ul>
            <li
                    v-for="(conf,index) in config"
                    :key="index"
                    @click="handleClickConfig(conf,index)"
            >
                <span>{{conf.name}}</span>
                <p v-if="conf.type === 'tree'">
                    <label class="choose-value">{{conf.value}}</label>
                    <van-icon name="arrow" color="#b3b3b5" />
                </p>
                <p v-if="conf.type === 'switch'">
                     <van-switch v-model="conf.value" size="20" />
                </p>
            </li>
        </ul>
        <!--        收集数据流向-->
        <comp-popup-collect :collectPopup="collectPopup" :conf="conf">

        </comp-popup-collect>
        <!--        foot-->
        <comp-high-config-foot></comp-high-config-foot>
        <!--        收集表类型选择器-->
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>
    </div>
</template>

<script>
    import config from '../js/highConfig.js'
    import CompPopupCollect from './component/popup/PopupCollect.vue'
    import CompHighConfigFoot from './component/foot/HighConfigFoot.vue'
    import page from "../js/page";

    export default {
        name: "HighConfigPage",
        components:{
            CompPopupCollect,
            CompHighConfigFoot
        },
        data(){
            let vm = this;
            return{
                config:config,
                options:[

                ],
                showpicker:false,
                index:null,
                collectPopup:{
                    show:false
                },
                conf:{},
                page:page[`${vm.$route.params.type}`],
                 value: '',
                 columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
                 showPicker: false,
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{
             /**
			 * 下拉选择
			 */
			onConfirmSeclect(data){
				let vm = this;
				config[vm.index].value = data.value;
				vm.showpicker = false;
			},
            /**
             * 下拉选择完成触发
             */
            onConfirm(value) {
			    let vm = this;
                vm.value = value;
                vm.showPicker = false;
            },
            /**
             * 选择对应的下拉
             * @param conf
             */
            handleClickConfig(conf,index){
                let vm = this;
                let type = conf.type;
                switch (type) {
                    case 'tree':
                        vm.conf = conf;
                        vm.collectPopup.show = true;
                        break;
                    case 'switch':

                        break;
                    case 'share':
                        break;
                    case 'range':
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .high-config-box{
        width: 100%;
        height: 100%;
        .title{
            display: flex;
            justify-content: center;
            padding: 15px 0;
        }
        .list-box{
            margin: 0 10px 8px;
            padding: 5px 0;
            background: #FFFFFF;
            border-radius: 4px;
        }
        ul{
            margin: 0 10px;
            li{
                background: #ffffff;
                padding: 15px 12px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 8px;
                border-radius: 4px;
                span{
                    font-size: 14px;
                    color: #646566;
                }
                p{
                    display: flex;
                    align-items: center;
                }
            }
        }
        .choose-value{
            color: #b3b3b5;
        }
    }
</style>