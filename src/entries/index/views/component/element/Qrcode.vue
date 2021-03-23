<template>
    <div class="qrcode-box" ref="qrcode" >
        <div class="qrcode" ref="qrCodeUrl"></div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2'
    export default {
        name: "Qrcode",
        components:{

        },
        props:{
            posterImg:{
                type:Object
            }
        },
        data(){
            return{

            }
        },
        mounted() {
            let vm = this;
            vm.$nextTick(() => {
                let qrcode = vm.$refs.qrcode;
                qrcode.addEventListener('touchmove',function (e) {
                    let width = document.getElementById('poster').offsetWidth - qrcode.offsetWidth;
                    let height = document.getElementById('poster').offsetHeight - qrcode.offsetHeight;
                    let element = e || event;
                    let touch = element.targetTouches[0];
                    let pageX = touch.pageX - 50;
                    let pageY = touch.pageY - 50;
                     /**
                     * 边界处理方法
                     * @type {number}
                     */
                    if(pageX <= 0) pageX = 0;
                    if(pageY <= 0) pageY = 0;
                    if(pageX >= width) pageX = width;
                    if(pageY >=height) pageY = height;
                    qrcode.style.left = pageX + 'px';
                    qrcode.style.top =  pageY + 'px';
                })
            })
        },
        created() {
            let vm = this;
            vm.$nextTick(() => {
                 vm.creatQrCode();
            })
        },
        methods:{
            /**
             * 生成二维码
             */
            creatQrCode() {
                let vm = this;
                let qrcode = new QRCode(vm.$refs.qrCodeUrl, {
                    text: 'xxxx', // 需要转换为二维码的内容
                    width: 60,
                    height: 60,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    .qrcode-box{
        width: 70px;
        height: 70px;
        background: #ffffff;
        position: absolute;
        box-sizing: border-box;
        top: 50px;
        left: 50px;
        z-index: 100;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>