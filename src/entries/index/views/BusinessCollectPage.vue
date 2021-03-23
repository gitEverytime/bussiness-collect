<template>
    <div
            class="business-collect-box"
            :style="{
                backgroundColor:$store.state.layout_back_color
            }"
    >
<!--        head-->
        <div
                class="collect-head"
                :style="{
                    backgroundColor:$store.state.common_back_color
                }"
        >
            <div class="head-box-left">
                <img src="../../../assets/images/head.jpeg">
                <p>
                    <span>樊文强</span>
                    <label>管理员</label>
                </p>
            </div>
            <div class="head-box-right">
                <div class="make-btn" @click="handleClickMake">
                    制作商机单
                </div>

            </div>
        </div>
<!--        content-->
        <div
                class="content-box"
        >
            <div
                    class="cont-abs"
            >
                <!--                all-->
                <div class="all">
                    <span>全部</span>
                    <label>
                        <i
                             class="iconfont icon-Group"
                         >
                         </i>
                    </label>
                </div>
                <div class="collect-order">
                    <h4>商机单数</h4>
                    <ul>
                        <li>
                            <span>250</span>
                            <label>总单数</label>
                        </li>
                        <li>
                            <span>111</span>
                            <label>今日新增</label>
                        </li>
                        <li>
                            <span>98</span>
                            <label>待处理</label>
                        </li>
                    </ul>
                </div>
                <!--                tools-->
                <div class="tools-box">
                     <h4>工具</h4>
                     <ul>
                         <li v-for="(tool,index) in tools" :key="index">
                             <i
                                     class="iconfont"
                                     :class="tool.icon"
                                     :style="{
                                         color:tool.color,
                                         fontSize:tool.fontSize + 'px'
                                     }"
                             >
                             </i>
                             <span>{{tool.name}}</span>
                         </li>
                     </ul>
                </div>
                <!--                动态-->
                <div class="dynamic-box">
                    <h4>成员动态</h4>
                    <ul>
                        <li
                                v-for="(person,index) in persons"
                                :key="index"
                        >
                            <img :src="person.headImg">
                            <span>{{person.name}}</span>
                            <label
                                    :style="{
                                        color:'#666666'
                                    }"
                            >
                                {{person.text}}
                            </label>
                        </li>
                    </ul>
                </div>
                <!--                统计-->
                <div class="statistics-box">
                    <h4>成员单量统计<label></label></h4>
                </div>
                <!--                foot-->
                <comp-business-collect-foot>

                </comp-business-collect-foot>
            </div>
        </div>
    </div>
</template>

<script>
    import CompBusinessCollectFoot from './component/foot/BusinessCollectFoot.vue'
    export default {
        name: "BusinessCollectPage",
        components:{
            CompBusinessCollectFoot
        },
        data(){
            return{
                tools:[
                    {
                        name:'「联系我」',
                        icon:'icon-kuaijie',
                        fontSize:18,
                        color:'#59a772'
                    },
                    {
                        name:'欢迎语',
                        icon:'icon-send',
                        fontSize:16,
                        color:'#59a772'
                    },
                    {
                        name:'群发助手',
                        icon:'icon-lianxiwomen',
                        fontSize:16,
                        color: '#e7b228'
                    },
                    {
                        name:'快捷回复',
                        icon:'icon-tool',
                        fontSize:16,
                        color: '#e7b228'
                    },
                    {
                        name:'聊天工具栏',
                        icon:'icon-tianchongxing',
                        fontSize:16,
                        color: '#3a74c5'
                    },
                    {
                        name:'商品图册',
                        icon:'icon-huanyingye',
                        fontSize:16,
                        color: '#3a74c5'
                    },
                ],
                persons:[
                    {
                        headImg:require('../../../assets/images/head1.jpeg'),
                        name:'杨能香',
                        text:'23单'
                    },
                    {
                        headImg:require('../../../assets/images/head2.jpeg'),
                        name:'樊文强',
                        text:'119单'
                    },
                    {
                        headImg:require('../../../assets/images/head.jpeg'),
                        name:'刘学志',
                        text:'44单'
                    },
                    {
                        headImg:require('../../../assets/images/head3.jpeg'),
                        name:'任忡',
                        text:'99单'
                    },
                ]
            }
        },
        methods:{
            handleClickMake(){
                let vm = this;
                vm.$router.push('/select/pages')
            }
        }
    }
</script>

<style scoped lang="scss">
    .business-collect-box{
        height: 100%;
        width: 100%;
        .collect-head{
            padding: 20px 30px 50px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .head-box-left{
                display: flex;
                align-items: center;
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 4px;
                }
                p{
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: #ffffff;
                    span{
                        font-size: 16px;
                    }
                    label{
                        margin-top: 4px;
                        font-size: 12px;
                        color: rgba(255,255,255,0.8);
                    }
                }
            }
            .head-box-right{
                .make-btn{
                    padding: 0 10px;
                    height: 20px;
                    border-radius: 10px;
                    border:#ffffff solid 1px;
                    color: #ffffff;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .content-box{
            margin: 0 10px;
            position: relative;
            .cont-abs{
                position: absolute;
                top: -30px;
                left: 0;
                width: 100%;
                padding-bottom: 60px;
                .all{
                    padding: 15px;
                    background: #ffffff;
                    border-radius: 4px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                 .collect-order{
                     margin-top: 7px;
                     padding: 15px 15px 30px;
                     background: #ffffff;
                     border-radius: 4px;
                     h4{
                         color: rgba(0,0,0,0.8);
                         font-size: 14px;
                     }
                     ul{
                         display: flex;
                         flex-direction: row;
                         justify-content: space-around;
                         margin-top: 25px;
                         li{
                             display: flex;
                             flex-direction: column;
                             align-items: center;
                             span{
                                font-size: 25px;
                                 margin-bottom: 5px;
                             }
                             label{
                                 color: rgba(0,0,0,0.8);
                                 font-size: 14px;
                             }
                         }
                     }
                 }
                .tools-box{
                     margin-top: 7px;
                     padding:  0;
                     background: #ffffff;
                     border-radius: 4px;
                     h4{
                         color: rgba(0,0,0,0.8);
                         font-size: 14px;
                         padding: 10px 15px;
                     }
                     ul{
                         display: flex;
                         flex-direction: row;
                         flex-wrap: wrap;
                         li{
                             padding: 15px;
                             width: 50%;
                             box-sizing: border-box;
                             border-top: #f7f7f7 solid 1px;
                             display: flex;
                             align-items: center;
                             span{
                                 margin-left: 15px;
                             }
                         }
                         li:nth-of-type(odd) {
                              border-right: #f7f7f7 solid 1px;
                         }
                     }
                }
                .dynamic-box{
                     margin-top: 7px;
                     padding: 15px 15px 30px;
                     background: #ffffff;
                     border-radius: 4px;
                     h4{
                         color: rgba(0,0,0,0.8);
                         font-size: 14px;
                     }
                     ul{
                         display: flex;
                         margin-top: 10px;
                         width: 100%;
                        overflow-x: scroll;
                        li{
                            width: 90px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding: 15px 0;
                            background: #f6f6f6;
                            margin-right: 10px;
                            img{
                                width: 30px;
                                height: 30px;
                                border-radius: 50% 50%;
                                margin-bottom: 10px;
                            }
                            span{
                                width: 90px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                text-align: center;
                            }
                            label{
                                font-size: 12px;
                                margin-top: 5px;
                            }
                        }
                    }
                    ul::-webkit-scrollbar {display:none}
                }
                .statistics-box{
                     margin-top: 7px;
                     padding: 15px 15px;
                     background: #ffffff;
                     border-radius: 4px;
                     h4{
                         color: rgba(0,0,0,0.8);
                         font-size: 14px;
                     }
                }
            }
        }
    }
</style>