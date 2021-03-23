<template>
    <div>
        <van-popup
            v-model="themePopup.show"
            position="left"
            :style="{
                height: '100%',
                width:'40%'
            }"
        >
            <div class="theme-box">
                <h4>主题配置</h4>
                <div class="set-box">
                    <h3>上传背景:</h3>
                    <div class="upload-box">
                        <van-uploader
                                :after-read="afterRead"
                                preview-size="57px"
                                v-model="fileList"
                                multiple
                                :max-count="2"
                        />
                    </div>
                </div>
                <div class="set-box">
                    <h3>主题色:</h3>
                    <v-color-picker :form="page.common_data" keyValue="text_color"></v-color-picker>
                </div>

                <div class="set-box">
                    <h3>内容颜色:</h3>
                    <v-color-picker :form="page.common_data" keyValue="regular_color"></v-color-picker>
                </div>

                <div class="set-box">
                    <h3>按钮颜色:</h3>
                    <v-color-picker :form="page.common_data" keyValue="btn_back_color"></v-color-picker>
                </div>

                <div class="set-box">
                    <h3>内容上下内边距:</h3>
                    <van-slider
                            v-model="page.common_data.cont_padding"
                            :min="1"
                            :max="50"
                            :active-color="page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color"
                            bar-height="4px"
                            button-size="18px">
                        <template #button>
                            <div
                                    class="custom-button"
                                    :style="{
                                        backgroundColor:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
                                    }"
                            >{{ page.common_data.cont_padding }}</div>
                        </template>
                    </van-slider>
                </div>

                <div class="set-box">
                    <h3>内容左右外边距:</h3>
                    <van-slider
                            v-model="page.common_data.cont_margin"
                            :min="1"
                            :max="50"
                            :active-color="page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color"
                            bar-height="4px"
                            button-size="18px">
                        <template #button>
                            <div
                                    class="custom-button"
                                    :style="{
                                        backgroundColor:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
                                    }"
                            >{{ page.common_data.cont_margin }}</div>
                        </template>
                    </van-slider>
                </div>

                <div class="set-box">
                    <h3>内容圆角:</h3>
                    <van-slider
                            v-model="page.common_data.cont_borderRadius"
                            :min="1"
                            :max="50"
                            :active-color="page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color"
                            bar-height="4px"
                            button-size="18px">
                        <template #button>
                            <div
                                    class="custom-button"
                                    :style="{
                                        backgroundColor:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
                                    }"
                            >{{ page.common_data.cont_borderRadius }}</div>
                        </template>
                    </van-slider>
                </div>
                <div class="set-box">
                    <h3>内容边框:</h3>
                    <van-slider
                            v-model="page.common_data.cont_border"
                            :min="1"
                            :max="10"
                            :active-color="page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color"
                            bar-height="4px"
                            button-size="18px">
                        <template #button>
                            <div
                                    class="custom-button"
                                    :style="{
                                        backgroundColor:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
                                    }"
                            >{{ page.common_data.cont_border }}</div>
                        </template>
                    </van-slider>
                </div>

                <div class="set-box">
                    <h3>组件外左右边距:</h3>
                    <van-slider
                            v-model="page.common_data.form_padding"
                            :min="1"
                            :max="50"
                            :active-color="page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color"
                            bar-height="4px"
                            button-size="18px">
                        <template #button>
                            <div
                                    class="custom-button"
                                    :style="{
                                        backgroundColor:page.common_data.text_color ? page.common_data.text_color : $store.state.common_back_color
                                    }"
                            >{{ page.common_data.form_padding }}</div>
                        </template>
                    </van-slider>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import page from "../../../js/page";
    import VColorPicker from "../element/VColorPicker";
    export default {
        name: "PopupThemeSet",
        components:{
            VColorPicker
        },
        props:{
            themePopup:{
                type:Object
            }
        },
        data(){
            let vm = this;
            return{
                page:page[`${vm.$route.params.type}`],
                fileList: [
                    {
                        url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
                        message: '上传中...',
                    },
                ],
            }
        },
        created() {
        },
        mounted() {
        },
        methods:{
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .van-popup{
        overflow-y: inherit;
    }
    .theme-box{
        box-sizing: border-box;
        h4{
            padding: 10px 10px 0;
        }
        .set-box{
            margin-top: 10px;
            padding: 0 10px 10px;
            border-bottom: #eff2f7 solid 1px;
            h3{
                font-size: 14px;
                margin-bottom: 10px;
                color: #646566;
            }
            .custom-button {
                width: 26px;
                color: #fff;
                font-size: 10px;
                line-height: 18px;
                text-align: center;
                border-radius: 100px;
            }
        }
    }
    .upload-box{
        display: flex;
        flex-direction: row;
    }
</style>