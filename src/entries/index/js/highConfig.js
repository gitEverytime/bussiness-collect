const config  = [
    {
        name:'收集数据流向',
        type:'tree',
        activeIds:[],
        options:[
            {
                text:'流向对象',
                value:'',
                children:[
                    {
                        text:'平台',
                        value:'平台',
                        id:0
                    },
                    {
                        text:'发起人',
                        value:'发起人',
                        id:1
                    },
                    {
                        text:'自己',
                        value:'自己',
                        id:2
                    },
                ]
            },
        ],
        desc:'',
        value:'',
    },
    {
        name:'是否记录发展人',
        type:'switch',
        activeIds:[],
        options:[
            {
                text:'记录发展人',
                value:'记录发展人',
                 children:[
                    {
                        text:'电信用户',
                        value:'电信用户',
                        id:0
                    },
                ]
            },

        ],
        desc:'',
        value:false,
    },
    {
        name:'是否记录分享人',
        type:'switch',
        activeIds:[],
        options:[
            {
                text:'记录分享人',
                value:'记录分享人',
                children:[
                    {
                        text:'客户',
                        value:'客户',
                        id:0
                    },
                ]
            },
        ],
        desc:'',
        value:true,
    },
    {
        name:'使用范围',
        type:'tree',
        activeIds:[],
        options:[
            {
                text:'使用范围',
                value:'使用范围',
                children:[
                    {
                        text:'电信全员',
                        value:'电信全员',
                        id:0
                    },
                    {
                        text:'电渠',
                        value:'电渠',
                        id:1
                    },
                ]
            },
        ],
        desc:'',
        value:'',
    }
];
export default config;