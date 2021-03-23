const form_config = {
    title:{
        text:'',
        type:'main',
        fontsize:'24',
        color:'#666666',
        isbold:true,
        placeholder:'点击输入主标题',
        paddingtop:0,
        textalign:'left',
        sheetdialog:false,
        edit:false
    },
    text:{
        name:'填空',
        key:'',
        value:'',
        type:'text',
        rows:'1',
        required:false,
        disabled:false,
        placeholder:'',
        border:false,
        bordercolor:'#999999',
        readonly:true,
        autofocus:false,
        autosize:false,
        size:'',
        desc:'',
        sheetdialog:false,
        edit:false,
        regularprompt:''
    },
    mobile_phone:{
        name:'手机号',
        key:'',
        value:'',
        type:'text',
        rows:'1',
        required:false,
        disabled:false,
        placeholder:'',
        border:false,
        bordercolor:'#999999',
        readonly:true,
        autofocus:false,
        autosize:false,
        size:'',
        desc:'',
        sheetdialog:false,
        edit:false,
        regularprompt:'手机号'
    },
    idcard:{
        name:'身份证号',
        key:'',
        value:'',
        type:'text',
        rows:'1',
        required:false,
        disabled:false,
        placeholder:'',
        border:false,
        bordercolor:'#999999',
        readonly:true,
        autofocus:false,
        autosize:false,
        size:'',
        desc:'',
        sheetdialog:false,
        edit:false,
        regularprompt:'身份证'
    },
    age:{
        name:'年龄',
        key:'',
        value:'',
        type:'text',
        rows:'1',
        required:false,
        disabled:false,
        placeholder:'',
        border:false,
        bordercolor:'#999999',
        readonly:true,
        autofocus:false,
        autosize:false,
        size:'',
        desc:'',
        sheetdialog:false,
        edit:false,
        regularprompt:'纯数字'
    },
    phone:{
        name:'电话号码',
        key:'',
        value:'',
        type:'text',
        rows:'1',
        required:false,
        disabled:false,
        placeholder:'',
        border:false,
        bordercolor:'#999999',
        readonly:true,
        autofocus:false,
        autosize:false,
        size:'',
        desc:'',
        sheetdialog:false,
        edit:false,
        regularprompt:'电话号码'
    },
    sex:{
        name:'性别',
        key:'',
        value:'',
        type:'radio',
        rows:'1',
        required:false,
        disabled:true,
        placeholder:'',
        border:false,
        readonly:true,
        bordercolor:'#999999',
        size:'',
        enumops:'',
        sheetdialog:false,
        edit:false,
        options:[
            {
                text:'男',
                sname:'',
                value:'1'
            },
            {
                text:'女',
                sname: '',
                value:'2'
            }
        ]
    },
    multiple:{
        name:'复选框',
        key:'',
        value:[],
        type:'checkbox',
        rows:'1',
        required:false,
        disabled:true,
        placeholder:'',
        border:false,
        readonly:true,
        bordercolor:'#999999',
        size:'',
        enumops:'',
        sheetdialog:false,
        edit:false,
        options:[
            {
                text:'',
                sname:'选项1',
                value:'1'
            },
            {
                text:'',
                sname: '选项2',
                value:'2'
            }
        ]
    },
    single:{
        name:'单选框',
        key:'',
        value:'',
        type:'radio',
        rows:'1',
        required:false,
        disabled:true,
        placeholder:'',
        border:false,
        readonly:true,
        bordercolor:'#999999',
        size:'',
        enumops:'',
        sheetdialog:false,
        edit:false,
        options:[
            {
                text:'',
                sname:'选项1',
                value:'1'
            },
            {
                text:'',
                sname: '选项2',
                value:'2'
            }
        ]
    },
    select:{
        name:'下拉选择',
        key:'',
        value:'',
        type:'select',
        rows:'1',
        required:false,
        disabled:false,
        placeholder:'',
        border:false,
        bordercolor:'#999999',
        readonly:true,
        autofocus:false,
        autosize:false,
        size:'',
        showpicker:false,
        enumops:'',
        sheetdialog:false,
        edit:false,
        options:[
            {
                text:'',
                sname:'选项1',
                value:'1'
            },
            {
                text:'',
                sname: '选项2',
                value:'2'
            }
        ]
    },
    button:{
        text:'提 交',
        type:'button',
        fontsize:'24',
        color:'#666666',
        isbold:true,
        paddingtop:0,
        textalign:'left',
        sheetdialog:false,
        edit:false,
    },
    regular_text:{
        text:'',
        type:'regular_text',
        fontsize:'16',
        color:'#666666',
        isbold:true,
        placeholder:'点击输入规则文字',
        paddingtop:0,
        textalign:'left',
        sheetdialog:false,
        edit:false
    }
};
export default form_config;