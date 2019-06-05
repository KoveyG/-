var pubPros=['item','sbool','cindex'];
function cop(typ){
    var copGroup={
        opcolor:'<div class="opbox"><colorpicker v-model="item.widget.colors"></colorpicker></div>',
        opfontfamily:'<select name=""id="" v-model="item.widget.fontFamily"><option v-for="kovey in list" :value="kovey.name">{{kovey.name}}</option></select>',
        opfontsize:'<i class="iconfont icon-ziti"></i><select name=""id="" v-model="item.widget.fontSize"><option v-for="kovey in list" :value="kovey.name">{{kovey.name}}</option></select>',
        opfontline:'<i class="iconfont icon-hanggao"></i><select name=""id="" v-model="item.widget.fontLine"><option v-for="kovey in list" :value="kovey.name">{{kovey.name}}</option></select>',
        opfontletter:'<i class="iconfont icon-zijianju"></i><select name=""id="" v-model="item.widget.fontLetter"><option v-for="kovey in list" :value="kovey.name">{{kovey.name}}</option></select>',
        optext:'<div class="ctrlbt"><button @click="fweight"><i :class="item.widget.fontWeight == \'normal\'?\'\':\'active\'" class="iconfont icon-zitijiacu"></i></button><button @click="fstyle"><i :class="item.widget.fontStyle == \'normal\'?\'\':\'active\'" class="iconfont icon-zitixieti"></i></button><button @click="textdecoration"><i :class="item.widget.textDecoration == \'none\'?\'\':\'active\'" class="iconfont icon-ziti-xiahuaxian"></i></button></div>',
        opalign:'<div class="ctrlbt"><button @click="textl"><i :class="item.widget.textAlign == \'left\'?\'active\':\'\'" class="iconfont icon-juzuo-w"></i></button><button @click="textc"><i :class="item.widget.textAlign == \'center\'?\'active\':\'\'" class="iconfont icon-juzhong"></i></button><button @click="textr"><i :class="item.widget.textAlign == \'right\'?\'active\':\'\'" class="iconfont icon-juyou"></i></button></div>',
        opcontrol:'<div class="ctrlbt" @click.self="getCindex"><button @click="indexcon"><i class="iconfont icon-layers"></i></button><button @click.stop="copyCom"><i class="iconfont icon-fuzhi"></i></button><button @click.stop="delCom"><i class="iconfont icon-shanchu"></i></button><div class="ctrllayer" v-show="indexshow"><div value="" @click="iup"><i class="iconfont icon-jiantou"></i>上移一层</div><div value="" @click="idown"><i class="iconfont icon-xiajiantou"></i>下移一层</div><div value="" @click="iupmax"><i class="iconfont icon-dingceng"></i>置于顶层</div><div value="" @click="idownmax"><i class="iconfont icon-diceng"></i>置于底层</div></div></div>',
        };
    var cbaseop='<div class="op">'+copGroup[typ]+'</div>';
    return cbaseop;
}
const OpColors = Vue.extend({
    data:function(){
        return {
            color:'#000'
        }
    },
    props:pubPros,
    template:cop('opcolor'),
    methods:{
        
    }
});
const OpFontFamily = Vue.extend({
    data:function(){
        return {
            list:[
                {name:'微软雅黑'},
                {name:'华文彩云'},
                {name:'方正舒体'},
                {name:'方正姚体'},
                {name:'华文细黑'},
                {name:'华文新魏'},
                {name:'仿宋'},
                {name:'隶书'},
                {name:'幼圆'},
                {name:'楷体'},
                {name:'宋体'},
                {name:'黑体'}
            ]
        }
    },
    props:pubPros,
    template:cop('opfontfamily'),
    methods:{
        
    }
});
const OpFontSize = Vue.extend({
    data:function(){
        return {
            list:[
                {name:'12px',id:1},
                {name:'14px',id:2},
                {name:'16px',id:3},
                {name:'18px',id:4},
                {name:'20px',id:5},
                {name:'22px',id:6},
                {name:'24px',id:7},
                {name:'26px',id:8},
                {name:'28px',id:9},
                {name:'30px',id:10},
                {name:'32px',id:11},
                {name:'34px',id:12},
                {name:'36px',id:13}
            ]
        }
    },
    props:pubPros,
    template:cop('opfontsize'),
    methods:{
        
    }
});
const OpFontline = Vue.extend({
    data:function(){
        return {
            list:[
                {name:'12px',id:1},
                {name:'14px',id:2},
                {name:'16px',id:3},
                {name:'18px',id:4},
                {name:'20px',id:5},
                {name:'24px',id:6},
                {name:'30px',id:7},
                {name:'36px',id:8}
            ]
        }
    },
    props:pubPros,
    template:cop('opfontline'),
    methods:{
        
    }
});
const OpFontletter = Vue.extend({
    data:function(){
        return {
            list:[
                {name:'2px',id:1},
                {name:'4px',id:2},
                {name:'6px',id:3},
                {name:'8px',id:4},
                {name:'10px',id:5},
                {name:'12px',id:6},
                {name:'14px',id:7},
                {name:'16px',id:8}
            ]
        }
    },
    props:pubPros,
    template:cop('opfontletter'),
    methods:{
        
    }
});
const OpText = Vue.extend({
    data:function(){
       return {
            'color':'标题'
        }
    },
    props:pubPros,
    template:cop('optext'),
    methods:{
        fweight:function(){
            var fw = this.item.widget.fontWeight;
            fw = (fw == 'normal')? 'bold':'normal';
            this.item.widget.fontWeight = fw;
        },
        fstyle:function(){
            var fsy = this.item.widget.fontStyle;
            fsy = (fsy == 'normal')? 'italic':'normal';
            this.item.widget.fontStyle = fsy;
        },
        textdecoration:function(){
            var td = this.item.widget.textDecoration;
            td = (td == 'none')? 'underline':'none';
            this.item.widget.textDecoration = td;
        }
    }
});
const OpAlign = Vue.extend({
    data:function(){
       return {
            'color':'标题'
        }
    },
    props:pubPros,
    template:cop('opalign'),
    methods:{
        textl:function(){
            var tl = this.item.widget.textAlign;
            tl = 'left';
            this.item.widget.textAlign = tl;
        },
        textc:function(){
            var tc = this.item.widget.textAlign;
            tc = 'center';
            this.item.widget.textAlign = tc;
        },
        textr:function(){
            var tr = this.item.widget.textAlign;
            tr = 'right';
            this.item.widget.textAlign = tr;
        }
    }
});
const OpControl = Vue.extend({
    data:function(){
       return {
            'OpControl':'删除复制',
            indexshow:false
        }
    },
    props:pubPros,
    template:cop('opcontrol'),
    methods:{
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        copyCom:function(){
            this.$emit('copycx',this.item);
        },
        indexcon:function(){
            this.indexshow = !this.indexshow
        },
        iup:function(){
            var index = this.$parent.sIndex;
            if (index > 0) {
                var temp = this.$parent.comlist[index-1];
                Vue.set(this.$parent.comlist, index-1, this.$parent.comlist[index]);
                Vue.set(this.$parent.comlist, index, temp)
                this.$parent.sIndex = index-1;
            }
        },
        idown:function(){
            var index = this.$parent.sIndex;
            if (index < this.$parent.comlist.length-1) {
                var temp = this.$parent.comlist[index+1];
                Vue.set(this.$parent.comlist, index+1, this.$parent.comlist[index]);
                Vue.set(this.$parent.comlist, index, temp)
                this.$parent.sIndex = index+1;
            }
        },
        iupmax:function(){
            var index = this.$parent.sIndex;
            var temp = this.$parent.comlist[index];
            this.$parent.comlist.splice(index,1);
            this.$parent.comlist.splice(0,0,temp);
            this.$parent.sIndex = 0;
        },
        idownmax:function(){
            var index = this.$parent.sIndex;
            var num = this.$parent.comlist.length;
            var temp = this.$parent.comlist[index];
            this.$parent.comlist.splice(index,1);
            this.$parent.comlist.splice(num,0,temp);
            this.$parent.sIndex = num-1;
        },
    }
});