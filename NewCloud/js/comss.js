var pubPros=['item','sbool','cindex'];
function cHm(typ){
    var chmGroup={
        fontFamily:'<div class="formbox fontfams"><label for="">字体</label><div class="fams"><div class="radio-box" v-for="(diss,index) in radios" :key="diss.id" :class="{\'on\':diss.label \=\= item.widget.fontFamily}"><span class="radio"></span><input :value="diss.value" class="input-radio" @click="check(index)" type="radio">{{diss.label}}</div></div></div>',
        btnstyle:'<div class="formbox btnstyle"><label for="">选择按钮样式</label><div class="btns"><div v-for="(diss,index) in radios" class="radio-box btn" :key="diss.id" :class="{\'on\':diss.label \=\= item.widget.btnstyle}"><span :class="diss.label">button</span><input :value="diss.value" class="input-radio" @click="check(index)" type="radio"/></div></div></div>',
        fontSize:'<div class="formbox fontsize"><div class="ftsel fz"><span>字号 </span><select name="" id="" v-model="item.widget.fontSize"><option v-for="diss in list" :value="diss.name">{{diss.name}}</option></select></div><div class="fzbt"><button @click="fzadd"><i class="iconfont icon-zihaojia"></i></button><button @click="fzminus"><i class="iconfont icon-zihaojian"></i></button></div></div>',
        fontLine:'<div class="formbox fontline"><div class="ftsel flht"><span>行距 </span><select name="" id="" v-model="item.widget.fontLine"><option v-for="diss in line" :value="diss.name">{{diss.name}}</option></select></div><div class="ftsel fspc"><span>字距 </span><select name="" id="" v-model="item.widget.fontLetter"><option value="12px" v-for="diss in letter" :value="diss.name">{{diss.name}}</option></select></div></div>',
        colors:'<div class="formbox fcol"><div class="ftsel flht"><span>文字 </span><colorpicker v-model="item.widget.colors"></colorpicker></div><div class="ftsel fspc"><span>背景 </span><colorpicker v-model="item.widget.bgcolors"></colorpicker></div></div>',
        bordercolors:'<div class="formbox fcol"><div class="ftsel flht"><span>边框 </span><colorpicker v-model="item.widget.bordercolors"></colorpicker></div><div class="ftsel fspc"><span>按钮 </span><colorpicker v-model="item.widget.btcolors"></colorpicker></div></div>',
        fontStyle:'<div class="formbox ftsty"><div class="ftbiu"><button @click="fweight"><i class="iconfont icon-zitijiacu"></i></button><button @click="fstyle"><i class="iconfont icon-zitixieti"></i></button><button @click="textdecoration"><i class="iconfont icon-ziti-xiahuaxian"></i></button></div><div class="ftali"><button @click="textl"><i class="iconfont icon-juzuo-w"></i></button><button @click="textc"><i class="iconfont icon-juzhong"></i></button><button  @click="textr"><i class="iconfont icon-juyou"></i></button></div></div>',
        zindexs:'<div class="formbox ftlay"><span>图层位置 </span><button @click="iup"><i class="iconfont icon-jiantou"></i></button><button @click="idown"><i class="iconfont icon-xiajiantou"></i></button><button @click="iupmax"><i class="iconfont icon-dingceng"></i></button><button  @click="idownmax"><i class="iconfont icon-diceng"></i></button></div>',
        events:'<div class="formbox ftck"><span>点击事件 </span><select name="" id="" v-model="item.widget.events" @change="pointerevent" @click="clickevent"><option v-for="diss in evt" :value="diss.name">{{diss.name}}</option></select><div class="chooseevent" v-if="item.widget.urlshow"><input type="text" v-model="item.widget.eurl" :placeholder="item.widget.eventurl" /></div><div class="chooseevent" v-if="item.widget.locshow"><select v-model="item.widget.eurl"><option v-for="(kov,sindex) in this.loc">{{kov.name}}</option></select></div><div class="chooseevent" v-if="item.widget.telshow"><input type="text" v-model="item.widget.eurl" placeholder="请输入电话号码"/></div><div class="chooseevent" v-if="item.widget.smsshow"><input type="text" v-model="item.widget.eurl" placeholder="请输入电话号码" /></div></div>',
        img:'<div class="formbox imgchoose"><label for="">图片</label><span class="filepgbox" @click="changeimg"><img class="filebg" alt="" :src="item.widget.src"/></span><button @click="changeimg">更换图片</button><button @click="deleteimg">删 除</button></div>',
        size:'<div class="formbox imgsize"><div class="ftname">尺寸 </div><div class="ftcon"><div class="ftsel"><span>宽 </span><input type="text" v-model="item.widget.width"></div><div class="ftsel"><span>高 </span><input type="text" v-model="item.widget.height"></div></div></div>',
        loc:'<div class="formbox imgloc"><div class="ftname">位置 </div><div class="ftcon"><div class="ftsel"><span>X </span> <input type="text" v-model="item.widget.lefts"></div><div class="ftsel"><span>Y </span> <input type="text" v-model="item.widget.tops"></div></div></div>',
        text:'<div class="formbox ftck"><span>文本 </span><input type="" maxlength="8" class="textvalue" v-model="item.widget.value"></div>',
        videosrc:'<div class="formbox video"><label>视频地址</label><select name="" id="" v-model="item.widget.videotype"><option value="" v-for="kov in video" :value="kov.type">{{kov.name}}</option></select><input type="text" spellcheck="false" v-model="item.widget.videosrc" v-show="item.widget.videotype == \'src\'"><textarea type="text" spellcheck="false" v-model="item.widget.videostring" v-show="item.widget.videotype == \'iframe\'"></textarea></div>',
        audiosrc:'<div class="formbox audio"><label>音频地址</label><span v-text="item.widget.audioname"></span><button @click="chooseaudio">选音乐</button></div>',
        audiostyle:'<div class="formbox audiostyle"><label for="">选择播放器样式</label><div class="audios"><div class="radio-box" v-for="(kovey,index) in radios" :key="kovey.id" :class="{\'on\':kovey.ClassName \=\= item.widget.audiostyle}"><span class="radio"></span><input :value="kovey.value" class="input-radio" @click="check(index)" type="radio"><i :class="kovey.ClassName"></i></div></div></div>',
        audioauto:'<div class="bt-updown"><span>自动播放音乐</span><input type="checkbox" id="checkbox_c2" class="chk_3" checked v-model="item.widget.audioauto" @click="autocontrol"/><label for="checkbox_c2"></label></div>',
        opacity:'<div class="formbox opacity"><span>透明 </span><div class="slider" ref="slider"><div class="process" :style="{width}"></div><div class="thunk" ref="trunk" :style="{left}"><div class="block"></div></div></div><input type="text" v-model="item.widget.opacity"></div>',
        rotate:'<div class="formbox rotate"><span>旋转 </span><div class="slider" ref="slider"><div class="process" :style="{width}"></div><div class="thunk" ref="trunk" :style="{left}"><div class="block"></div></div></div><input type="text" v-model="item.widget.rotate"></div>',
        title:'<div class="formbox title"><label>页面标题</label><input type="text" v-model="item.widget.tit" :placeholder="item.widget.placeholder"></div>',
        form:'<draggable element="ul" v-model="item.widget.form" :options="{handle:\'.boxmain\'}"><li v-for="(kovey,index) in item.widget.form"><div class="formbox stext" v-if="kovey.type == \'stext\'"><div class="stextbox"><div class="boxmain"><span @click="showtime(index)">{{kovey.name}}</span><input type="text" v-model="kovey.val" /><i class="iconfont icon-bitian" v-show="kovey.must"></i><i class="iconfont icon-guanbi guanbi" @click="del(index)"></i></div><div class="zz" v-show="kovey.opshow"><div class="stextdata databox"><div class="title"><span class="ttext">单行文本</span><span @click.stop="close(index)" class="closebtn"><i class="iconfont icon-guanbi"></i></span></div><div class="input"><div class="tit"><span class="ltext">提示文字</span><span class="rtext"><input type="checkbox" v-model="kovey.must" /><span>必填</span></span></div><input type="text" placeholder="请输入文字" v-model="kovey.val"/></div><div class="validate"><span class="lvali">验证格式</span><span class="rvali"><input type="checkbox" :id="\'stext_c\'+index" class="chk_3" checked=""v-model="kovey.hasregx" @click="hasregx(index)" /><label :for="\'stext_c\'+index"></label></span></div><div class="datetype"><div class="radio-box" v-for="(radio,index) in stextradios" :key="radio.id" :class="{\'on\':radio.value \=\= kovey.regx}"><span class="radio"></span><input :value="radio.value" :id="radio.value" class="input-radio" :checked="\'radio.isChecked\'" @click="check(index,pindex)" type="radio" />{{radio.name}}</div></div></div></div></div></div><div class="formbox dbtext" v-if="kovey.type == \'dbtext\'"><div class="dbtextbox"><div class="boxmain"><span @click="showtime(index)">{{kovey.name}}</span><input type="text" v-model="kovey.val" /><i class="iconfont icon-bitian" v-show="kovey.must"></i><i class="iconfont icon-guanbi guanbi" @click="del(index)"></i></div><div class="zz" v-show="kovey.opshow"><div class="dbtextdata databox"><div class="title"><span class="ttext">多行文本</span><span @click.stop="close(index)" class="closebtn"><i class="iconfont icon-guanbi"></i></span></div><div class="input"><div class="tit"><span class="ltext">提示文字</span><span class="rtext"><input type="checkbox" v-model="kovey.must" /><span>必填</span></span></div><input type="text" placeholder="请输入文字" v-model="kovey.val" /></div><div class="linenum"><span>行数</span><input type="text" v-model="kovey.lnum" /></div></div></div></div></div><div class="formbox dbtext" v-if="kovey.type == \'radio\'"><div class="radiobox"><div class="boxmain"><span @click="showtime(index)">{{kovey.name}}</span><input type="text" v-model="kovey.cue" /><i class="iconfont icon-bitian" v-show="kovey.must"></i><i class="iconfont icon-guanbi guanbi" @click="del(index)"></i></div><div class="zz" v-show="kovey.opshow"><div class="radiodata databox"><div class="title"><span class="ttext">单选</span><span @click.stop="close(index)" class="closebtn"><i class="iconfont icon-guanbi"></i></span></div><div class="input"><div class="tit"><span class="ltext">提示文字</span><span class="rtext"><input type="checkbox" v-model="kovey.must" /><span>必填</span></span></div><input type="text" placeholder="请输入文字" v-model="kovey.cue" /></div><div class="optionbox"><div class="tit"><span>选项</span></div><div class="optbox" v-for="(list,pindex) in kovey.val"><input type="text" v-model="list.val" /><i class="iconfont icon-guanbi guanbi" @click="childdel(index,pindex)"></i></div><button @click="addlist(index)"></button></div></div></div></div></div><div class="formbox checkbox" v-if="kovey.type == \'checkbox\'"><div class="checkboxbox"><div class="boxmain"><span @click="showtime(index)">{{kovey.name}}</span><input type="text" v-model="kovey.cue" /><i class="iconfont icon-bitian" v-show="kovey.must"></i><i class="iconfont icon-guanbi guanbi" @click="del(index)"></i></div><div class="zz" v-show="kovey.opshow"><div class="checkboxdata databox"><div class="title"><span class="ttext">多选</span><span @click.stop="close(index)" class="closebtn"><i class="iconfont icon-guanbi"></i></span></div><div class="input"><div class="tit"><span class="ltext">提示文字</span><span class="rtext"><input type="checkbox" v-model="kovey.must" /><span>必填</span></span></div><input type="text" placeholder="请输入文字" v-model="kovey.cue" /></div><div class="optionbox"><div class="tit"><span>选项</span></div><div class="optbox" v-for="(list,pindex) in kovey.val"><input type="text" v-model="list.val" /><i class="iconfont icon-guanbi guanbi" @click="childdel(index,pindex)"></i></div><button @click="addlist(index)"></button></div></div></div></div></div></li></draggable>',
        addform:'<div class="formbox addform"><button class="sumbtn" @click="choosetype"></button><div class="sumtype" v-show="typeshow"><div class="sumtext type"><span class="rborder" @click="kstext">单行文本</span><span @click="kdbtext">多行文本</span></div><div class="sumradio type"><span class="rborder" @click="kradio">单选</span><span @click="kcheckbox">多选</span></div></div></div>',
        imgroom:'<div class="alertbox imgroom" v-show="item.widget.imgroom"><div class="alertdiv"><div class="alertleft"><ul><li class="active">我的图片</li><li>素材库</li></ul></div><div class="alertright"><div class="alerttop"><div class="chooseimgbtn"><input type="file" @change="addimg" accept="image/gif,image/jpeg,image/x-png" /><span>上传图片</span></div><div class="capacity"><span>容量</span><div class="bar"><div class="barmain"><span>0.5M</span>/<span>20M</span></div><div class="bartent" style="width:20%"></div></div></div><div class="close" @click="close"><i class="iconfont icon-guanbi"></i></div></div><div class="alertdown img"><ul><li class="addimg"><input type="file" @change="addimg" accept="image/gif,image/jpeg,image/x-png" /></li><li class="pic" v-for="(kovey,index) in this.$parent.imglist"><img :src="kovey.src" alt="" /><span @click="chooseimg">使用图片</span><i @click="delimg(index)" class="iconfont icon-guanbi"></i></li></ul></div></div></div></div>',
        audioroom:'<div class="alertbox audioroom" v-show="item.widget.audioroom"><div class="alertdiv"><div class="alertleft"><ul><li class="active">系统音乐</li></ul></div><div class="alertright"><div class="alerttop"><div class="close" @click="close"><i class="iconfont icon-guanbi"></i></div></div><div class="alertdown audio"><ul><li v-for="(kovey,index) in this.$parent.audiolist" :class="{\'on\':kovey.src \=\= item.widget.audiosrc}"><audio :src="kovey.src" ref="audio"></audio><img src="./images/audiobg.jpg" @click="chooseaudio(index)"><p><span>{{kovey.name}}</span><i v-if="!kovey.playing" class="iconfont icon-bofang" @click="play(index)"></i><i v-if="kovey.playing" class="iconfont icon-zanting" @click="pause(index)"></i></p></li></ul></div></div></div></div>',
        locname:'<div class="formbox loc"><label>锚点名称</label><input type="text" v-model="item.widget.locname"></div>',
        aline:'<div class="formbox hbdq"><label>画布对齐</label><div class="ftbiu"><button @click="pgsl"><i class="iconfont icon-zuoduiqi"></i></button><button @click="pgsc"><i class="iconfont icon-duiqichuizhi"></i></button><button @click="pgsr"><i class="iconfont icon-youduiqi"></i></button></div><div class="ftali"><button @click="pgst"><i class="iconfont icon-dingduiqi"></i></button><button @click="pgsm"><i class="iconfont icon-duiqishuiping"></i></button><button @click="pgsb"><i class="iconfont icon-diduiqi"></i></button></div></div>',
    };
    var cbaseHm='<div class="cfg_box">'+chmGroup[typ]+'</div>';
    return cbaseHm;
}
const setfontfamily = Vue.extend({
    data:function(){
       return {
            radios:[
                {label:'微软雅黑',value:'1'},
                {label:'华文彩云',value:'2'},
                {label:'方正舒体',value:'3'},
                {label:'方正姚体',value:'4'},
                {label:'华文细黑',value:'5'},
                {label:'华文新魏',value:'6'},
                {label:'仿宋',value:'7'},
                {label:'隶书',value:'8'},
                {label:'幼圆',value:'9'},
                {label:'楷体',value:'10'},
                {label:'宋体',value:'11'},
                {label:'黑体',value:'12'}
            ]
        }
    },
    props:pubPros,
    template:cHm('fontFamily'),
    methods:{
        check(index) {
            if (!this.radios) {
                return
            }
            this.item.widget.fontFamily = this.radios[index].label;
        }
    }
});

const setbtnstyle = Vue.extend({
    data:function(){
       return {
            radios:[
                {label:'btn1',value:'1'},
                {label:'btn2',value:'2'},
                // {label:'btn3',value:'3'},
                {label:'btn4',value:'4'},
                // {label:'btn5',value:'5'},
                // {label:'btn6',value:'6'}
            ]
        }
    },
    props:pubPros,
    template:cHm('btnstyle'),
    methods:{
        check(index) {
            if (!this.radios) {
                return
            }
            if (index == 0) {
                this.item.widget.width = '150px';
                this.item.widget.height = '50px';
            }
            if (index == 1) {
                this.item.widget.width = '150px';
                this.item.widget.height = '50px';
            }
            if (index == 2) {
                this.item.widget.width = '60px';
                this.item.widget.height = '60px';
            }
            this.item.widget.btnstyle = this.radios[index].label;
        }
    }
});
const setfontsize = Vue.extend({
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
    template:cHm('fontSize'),
    methods:{
        fzadd:function(){
            if (parseInt(this.item.widget.fontSize) < 36) {
                var fzaddnum = parseInt(this.item.widget.fontSize);
                fzaddnum = fzaddnum+2;
                fzaddnum = fzaddnum +'px';
                this.item.widget.fontSize = fzaddnum;
            }else{
                return false;
            }
        },
        fzminus:function(){
            if (parseInt(this.item.widget.fontSize) > 12) {
                var fzaddnum = parseInt(this.item.widget.fontSize);
                fzaddnum = fzaddnum-2;
                fzaddnum = fzaddnum +'px';
                this.item.widget.fontSize = fzaddnum;
            }else{
                return false;
            }
        }
    }
});
const setfontline = Vue.extend({
    data:function(){
        return {
            line:[
                {name:'12px',id:1},
                {name:'14px',id:2},
                {name:'16px',id:3},
                {name:'18px',id:4},
                {name:'20px',id:5},
                {name:'24px',id:6},
                {name:'30px',id:7},
                {name:'36px',id:8}
            ],
            letter:[
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
    template:cHm('fontLine'),
    methods:{

    }
});
const setcolors = Vue.extend({
    data:function(){
        return {
            color:'#000'
        }
    },
    props:pubPros,
    template:cHm('colors'),
    methods:{
        
    }
});
const setbordercolors = Vue.extend({
    data:function(){
        return {
            color:'#000'
        }
    },
    props:pubPros,
    template:cHm('bordercolors'),
    methods:{
        
    }
});
const setindexs = Vue.extend({
    data:function(){
       return {
            'color':'标题'
        }
    },
    props:pubPros,
    template:cHm('zindexs'),
    methods:{
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
const setevents = Vue.extend({
    data:function(){
       return {
            evt:[
                {name:"请选择点击事件",cue:"",id:1},
                {name:"跳转网址",cue:"请输入网址",type:'',id:2},
                {name:"页内跳转",cue:"请输入锚点",type:'#',id:3},
                {name:"拨打电话",cue:"请输入电话号码",type:'tel:',id:4},
                {name:"发送短信",cue:"请输入电话号码",type:'sms:',id:5},
            ],
            loc:[
                {name:'请选择锚点',selected:'selected'},
            ]
        }
    },
    props:pubPros,
    template:cHm('events'),
    created:function(){
        console.log(this.item.widget.eurl)
        for(i=0;i<this.$parent.comlist.length;i++){
            if (this.$parent.comlist[i].widget.type == 'location') {
                var locname = this.$parent.comlist[i].widget.locname 
                var n = {value:locname,name:locname}
                this.loc.push(n)
            }
        }
    },
    methods:{
        pointerevent:function() {
            if (this.item.widget.events == '请选择点击事件') { 
                this.item.widget.eurl = 'javascript:void(0)'
                this.item.widget.urlshow = false
                this.item.widget.locshow = false
                this.item.widget.telshow = false
                this.item.widget.smsshow = false
            }
            else if (this.item.widget.events == '跳转网址') {
                this.item.widget.eventtype = 'http://';
                this.item.widget.eurl = '';
                this.item.widget.urlshow = true
                this.item.widget.locshow = false
                this.item.widget.telshow = false
                this.item.widget.smsshow = false
            }
            else if (this.item.widget.events == '页内跳转') {
                this.item.widget.eventtype = '#';
                this.item.widget.eurl = '请选择锚点';
                this.item.widget.urlshow = false
                this.item.widget.locshow = true
                this.item.widget.telshow = false
                this.item.widget.smsshow = false
            }
            else if (this.item.widget.events == '拨打电话') {
                this.item.widget.eventtype = 'tel:';
                this.item.widget.eurl = '';
                this.item.widget.urlshow = false
                this.item.widget.locshow = false
                this.item.widget.telshow = true
                this.item.widget.smsshow = false
            }
            else if (this.item.widget.events == '发送短信') {
                this.item.widget.eventtype = 'sms:';
                this.item.widget.eurl = '';
                this.item.widget.urlshow = false
                this.item.widget.locshow = false
                this.item.widget.telshow = false
                this.item.widget.smsshow = true
            }
        },
        clickevent:function(){
            if (this.item.widget.events == '请选择点击事件') { 
                this.urlshow = false
                this.locshow = false
                this.telshow = false
                this.smsshow = false
            }
            else if (this.item.widget.events == '跳转网址') {
                this.urlshow = true
                this.locshow = false
                this.telshow = false
                this.smsshow = false
            }
            else if (this.item.widget.events == '页内跳转') {
                this.urlshow = false
                this.locshow = true
                this.telshow = false
                this.smsshow = false
            }
            else if (this.item.widget.events == '拨打电话') {
                this.urlshow = false
                this.locshow = false
                this.telshow = true
                this.smsshow = false
            }
            else if (this.item.widget.events == '发送短信') {
                this.urlshow = false
                this.locshow = false
                this.telshow = false
                this.smsshow = true
            }
        }
    }
});
const setimg = Vue.extend({
    data:function(){
       return {
            'events':'标题'
        }
    },
    props:pubPros,
    template:cHm('img'),
    methods:{
        fileImage:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                var that = this;
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                    var dataURL = reader.result;
                    $(e.target).siblings('.filebg').attr('src',dataURL);
                    that.item.widget.src = dataURL;
                };
            }
        },
        changeimg:function(e){
            this.item.widget.imgroom = true;
        },
        deleteimg:function(e){
            this.item.widget.src = 'images/filebg.jpg';
        },
    }
});
const setImgroom = Vue.extend({
    data:function(){
       return {
            'imgroom':'图片库'
        }
    },
    props:pubPros,
    template:cHm('imgroom'),
    methods:{
        deleteimg:function(e){
            this.item.widget.src = 'images/logo.jpg';
        },
        addimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            var n = {id:'1',src:'images/logo.jpg'}
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                var that = this;
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                    var dataURL = reader.result;
                    $(e.target).siblings('.filebg').attr('src',dataURL);
                    n.src = dataURL;
                };
            }
            this.$parent.imglist.push(n)
        },
        chooseimg:function(e){
            var imgurl = $(e.target).parent().find('img')[0].src;
            var img = new Image();
            img.src = imgurl;
            this.item.widget.src = imgurl;
            if (img.width >= 375) {
                var scale = img.width/img.height
                this.item.widget.width = '375px';
                this.item.widget.height = 375/scale +'px';
            }
            else{
                this.item.widget.width = img.width + 'px';
                this.item.widget.height = img.height + 'px';
            }
            this.item.widget.imgroom = false;
            this.item.widget.pointerevents = 'none';
        },
        close:function(){
            this.item.widget.imgroom = false;
        },
        delimg:function(index){
            this.$parent.imglist.splice(index,1);
        },
    }
});
const setsize = Vue.extend({
    data:function(){
       return {
            'events':'标题'
        }
    },
    props:pubPros,
    template:cHm('size'),
    methods:{

    }
});
const setloc = Vue.extend({
    data:function(){
       return {
            'events':'标题'
        }
    },
    props:pubPros,
    template:cHm('loc'),
    methods:{

    }
});
const setfontStyle = Vue.extend({
    data:function(){
       return {
            'color':'标题'
        }
    },
    props:pubPros,
    template:cHm('fontStyle'),
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
        },
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
const setText = Vue.extend({
    data:function(){
        return {
            'title':'标题'
        }
    },
    props:pubPros,
    template:cHm('text'),
    methods:{

    }
});
const setOpacity = Vue.extend({
    props:['item','sbool','cindex','min','max'],
    data:function(){
        return{
            slider:null,        //滚动条DOM元素
            thunk:null,         //拖拽DOM元素
            per:100,     //当前值
        }
    },
    template:cHm('opacity'),
    methods:{
    },
    mounted(){
        this.slider = this.$refs.slider;
        this.thunk = this.$refs.trunk;
        this.per = this.item.widget.opacity*100;
        var _this = this;
        this.thunk.onmousedown = function (e) {
            var width = parseInt(_this.width);
            var disX = e.clientX;
            document.onmousemove = function(e){
                // per, left, width
                // 当per变化的时候，会通过计算属性修改left，width
                // 拖拽的时候获取的新width
                var newWidth = e.clientX - disX + width;
                // 拖拽的时候得到新的百分比
                var scale = newWidth / _this.slider.offsetWidth;
                _this.per = parseInt(Math.ceil((_this.max - _this.min) * scale + _this.min));
                _this.per = Math.max(_this.per,_this.min);
                _this.per = Math.min(_this.per,_this.max);
                _this.item.widget.opacity = _this.per/100;
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
            return false;
        }
    },
    computed:{
        // 设置一个百分比，提供计算slider进度宽度和trunk的left值
        // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
        // trunk left =  slider进度width + trunk宽度/2
        scale(){
            return (this.per - this.min) / (this.max - this.min);
        },
        width(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale + 'px';
            }else{
                return 0 + 'px'
            }
        },
        left(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale -  this.thunk.offsetWidth/2  + 'px';
            }else{
                return 0 + 'px'
            }
        }
    },
});
const setRotate = Vue.extend({
    props:['item','sbool','cindex','min','max'],
    data:function(){
        return{
            slider:null,        //滚动条DOM元素
            thunk:null,         //拖拽DOM元素
            per:100,     //当前值
        }
    },
    template:cHm('rotate'),
    methods:{
    },
    mounted(){
        this.slider = this.$refs.slider;
        this.thunk = this.$refs.trunk;
        this.per = this.item.widget.rotate;
        var _this = this;
        this.thunk.onmousedown = function (e) {
            var width = parseInt(_this.width);
            var disX = e.clientX;
            document.onmousemove = function(e){
                // per, left, width
                // 当per变化的时候，会通过计算属性修改left，width
                // 拖拽的时候获取的新width
                var newWidth = e.clientX - disX + width;
                // 拖拽的时候得到新的百分比
                var scale = newWidth / _this.slider.offsetWidth;
                _this.per = parseInt(Math.ceil((_this.max - _this.min) * scale + _this.min));
                _this.per = Math.max(_this.per,_this.min);
                _this.per = Math.min(_this.per,_this.max);
                _this.item.widget.rotate = _this.per;
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
            return false;
        }
    },
    computed:{
        // 设置一个百分比，提供计算slider进度宽度和trunk的left值
        // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
        // trunk left =  slider进度width + trunk宽度/2
        scale(){
            return (this.per - this.min) / (this.max - this.min);
        },
        width(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale + 'px';
            }else{
                return 0 + 'px'
            }
        },
        left(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale -  this.thunk.offsetWidth/2  + 'px';
            }else{
                return 0 + 'px'
            }
        }
    },
});
const setVideosrc = Vue.extend({
    data:function(){
        return {
            video:[
                {name:"通用代码",type:'iframe',id:1},
                {name:"视频地址",type:'src',id:2},
            ],
        }
    },
    props:pubPros,
    template:cHm('videosrc'),
    methods:{

    }
});
const setAudiosrc = Vue.extend({
    data:function(){
        return {
            'audiosrc':'音频地址'
        }
    },
    props:pubPros,
    template:cHm('audiosrc'),
    methods:{
        chooseaudio:function(){
            this.item.widget.audioroom = true
        }
    }
});
const setAudiostyle = Vue.extend({
    data:function(){
        return {
            'audiosrc':'视频地址',
            radios:[
                {ClassName:'iconfont icon-yinpin1',value:'1'},
                {ClassName:'iconfont icon-yinpin2',value:'2'},
                {ClassName:'iconfont icon-yinpin3',value:'3'},
                {ClassName:'iconfont icon-yinpin4',value:'4'}
            ]
        }
    },
    props:pubPros,
    template:cHm('audiostyle'),
    methods:{
        check(index) {
            if (!this.radios) {
                return
            }
            this.item.widget.audiostyle = this.radios[index].ClassName;
        }
    }
});
const setAudioroom = Vue.extend({
    data:function(){
       return {
            'audioroom':'音频库'
        }
    },
    props:pubPros,
    template:cHm('audioroom'),
    methods:{
        fileImage:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                var that = this;
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
                    var dataURL = reader.result;
                    $(e.target).siblings('.filebg').attr('src',dataURL);
                    that.item.widget.src = dataURL;
                };
            }
        },
        deleteimg:function(e){
            this.item.widget.src = 'images/logo.jpg';
        },
        chooseaudio:function(index){
            this.item.widget.audiosrc = this.$parent.audiolist[index].src
            this.item.widget.audioname = this.$parent.audiolist[index].name
        },
        close:function(){
            this.item.widget.audioroom = false;
        },
        play:function(index){
            for(var k = 0,len = this.$refs.audio.length; k < len; k++){
                this.$refs.audio[k].pause();
                this.$parent.audiolist[k].playing = false;
            }
            this.$refs.audio[index].play();
            this.$parent.audiolist[index].playing = true;
        },
        pause:function(index){
            this.$refs.audio[index].pause();
            this.$parent.audiolist[index].playing = false;
        }
    }
});
const setAudioauto = Vue.extend({
    data:function(){
        return {
            'Audioauto':'自动播放',
        }
    },
    props:pubPros,
    template:cHm('audioauto'),
    methods:{
        autocontrol:function(e){
            if (this.item.widget.audioauto) {
                console.log(this.item.widget.audioauto)
                this.item.widget.audioauto = true
            }else{
                this.item.widget.audioauto = false
            }
        }
    }
});
const setTitle = Vue.extend({
    data:function(){
        return {
            'title':'标题',
        }
    },
    props:pubPros,
    template:cHm('title'),
    methods:{
        
    }
});
const setAddform = Vue.extend({
    data:function(){
        return {
            typeshow:false,
        }
    },
    props:pubPros,
    template:cHm('addform'),
    methods:{
        choosetype:function(){
            this.typeshow = !this.typeshow
        },
        kstext:function(){
            var n = {type:'stext',name:'单行文本',val:'单行文本',k:'',hasregx:false,regx:'text',must:false,opshow:true}
            this.item.widget.form.push(n)
            this.typeshow=false
        },
        kdbtext:function(){
            var n = {type:'dbtext',name:'多行文本',val:'多行文本',lnum:'',k:'',must:true,opshow:true}
            this.item.widget.form.push(n)
            this.typeshow=false
        },
        kradio:function(){
            var n = {type:'radio',name:'单选',cue:'单选',val:[{k:'',val:'选项1'},{k:'',val:'选项2'},{k:'',val:'选项3'}],k:'',must:true,opshow:true}
            this.item.widget.form.push(n)
            this.typeshow=false
        },
        kcheckbox:function(){
            var n = {type:'checkbox',name:'多选',cue:'多选',val:[{k:'',val:'选项1'},{k:'',val:'选项2'},{k:'',val:'选项3'}],k:'',must:true,opshow:true}
            this.item.widget.form.push(n)
            this.typeshow=false
        }
    }
});
const setForm = Vue.extend({
    data:function(){
        return {
            stextradios:[
                {name:'手机号码',value:'tel'},
                {name:'邮箱',value:'email'}
            ]
        }
    },
    props:pubPros,
    template:cHm('form'),
    methods:{
        close:function(index){
            this.item.widget.form[index].opshow = !this.item.widget.form[index].opshow
        },
        showtime:function(index){
            this.item.widget.form[index].opshow = !this.item.widget.form[index].opshow
        },
        check(index,pindex) {
            if (!this.stextradios) {
                return
            }
            this.item.widget.form[index].regx = this.stextradios[pindex].value;
        },
        del(index){
            this.item.widget.form.splice(index,1)
        },
        hasregx:function(index){
            if(!this.item.widget.form[index].hasregx){
                this.item.widget.form[index].regx = 'text'
            }
        },
        addlist:function(index){
            var n = {k:'',val:'选项'}
            this.item.widget.form[index].val.push(n)
        },
        childdel(index,pindex){
            this.item.widget.form[index].val.splice(pindex,1)
        }
    }
});
const setLocname = Vue.extend({
    data:function(){
        return {
            'loc':'锚点名称'
        }
    },
    props:pubPros,
    template:cHm('locname'),
    methods:{
    }
});
const setProgress = Vue.extend({
    props:['item','sbool','cindex','min','max'],
    data:function(){
        return{
            slider:null,        //滚动条DOM元素
            thunk:null,         //拖拽DOM元素
            per:100,     //当前值
        }
    },
    template:cHm('progress'),
    methods:{
    },
    mounted(){
        this.slider = this.$refs.slider;
        this.thunk = this.$refs.trunk;
        this.per = this.item.widget.opacity*100;
        var _this = this;
        this.thunk.onmousedown = function (e) {
            var width = parseInt(_this.width);
            var disX = e.clientX;
            document.onmousemove = function(e){
                // per, left, width
                // 当per变化的时候，会通过计算属性修改left，width
                // 拖拽的时候获取的新width
                var newWidth = e.clientX - disX + width;
                // 拖拽的时候得到新的百分比
                var scale = newWidth / _this.slider.offsetWidth;
                _this.per = parseInt(Math.ceil((_this.max - _this.min) * scale + _this.min));
                _this.per = Math.max(_this.per,_this.min);
                _this.per = Math.min(_this.per,_this.max);
                _this.item.widget.opacity = _this.per/100;
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
            return false;
        }
    },
    computed:{
        // 设置一个百分比，提供计算slider进度宽度和trunk的left值
        // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
        // trunk left =  slider进度width + trunk宽度/2
        scale(){
            return (this.per - this.min) / (this.max - this.min);
        },
        width(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale + 'px';
            }else{
                return 0 + 'px'
            }
        },
        left(){
            if(this.slider){
                return this.slider.offsetWidth * this.scale -  this.thunk.offsetWidth/2  + 'px';
            }else{
                return 0 + 'px'
            }
        }
    },
});
const setAline = Vue.extend({
    data:function(){
        return {
            aline:'aaa'
        }
    },
    props:pubPros,
    template:cHm('aline'),
    methods:{
        pgsl:function(){
            this.item.widget.lefts = '-5px'
        },
        pgsc:function(){
            var mid = 185;
            var width = parseInt(this.item.widget.width);
            var left = mid-width/2;
            var lefts = left + 'px';
            this.item.widget.lefts = lefts;
        },
        pgsr:function(){
            var max = 370
            var width = parseInt(this.item.widget.width);
            var lefts = max - width +'px';
            this.item.widget.lefts = lefts
        },
        pgst:function(){
            this.item.widget.tops = '-5px'
        },
        pgsm:function(){
            var mid = (parseInt(this.$parent.list.pageheight)-5)/2;
            var height = parseInt(this.item.widget.nowheight);
            var left = mid-height/2;
            var tops = left + 'px';
            this.item.widget.tops = tops;
        },
        pgsb:function(){
            var max = parseInt(this.$parent.list.pageheight)-5
            var height = parseInt(this.item.widget.nowheight);
            var tops = max - height +'px';
            this.item.widget.tops = tops
        }
    }
});