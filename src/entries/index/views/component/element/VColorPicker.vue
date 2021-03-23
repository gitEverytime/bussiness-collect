<template>
    <div>
        <colorPicker v-model="form[keyValue]" />
    </div>
</template>

<script>
    export default {
        name: "VColorPicker",
        components:{

        },
        props:{
            form:{
                type:Object
            },
            keyValue:{
                type:String
            }
        },
        data(){
            return{

            }
        },
        created() {
        },
        mounted() {
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>