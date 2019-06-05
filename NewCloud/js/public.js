var pubPros=['item','sbool','cindex'];
function hm(typ){
    var hmGroup={
        text:'<div class="expandingArea" :style="[{backgroundColor:item.widget.bgcolors}]"><div contenteditable @focus="focus" @blur="blur" :style="[{fontFamily:item.widget.fontFamily},{fontSize:item.widget.fontSize},{lineHeight:item.widget.fontLine},{letterSpacing:item.widget.fontLetter},{fontWeight:item.widget.fontWeight},{fontStyle:item.widget.fontStyle},{textDecoration:item.widget.textDecoration},{textAlign:item.widget.textAlign},{color:item.widget.colors},{width:parseInt(item.widget.width)+5+\'px\'},{height:item.widget.height}]" @input="getval">{{item.widget.value}}</div></div>',
        image:'<div class="upload-btn x-btn style-white"><img draggable="false" alt="" :src="item.widget.src" :style="[{width:item.widget.width},{height:item.widget.height},{opacity:item.widget.opacity}]"/></div>',
        button:'<div class="btnbox"><input class="btn" maxlength="8" :class="item.widget.btnstyle" :style="[{fontFamily:item.widget.fontFamily},{fontSize:item.widget.fontSize},{lineHeight:item.widget.height},{letterSpacing:item.widget.fontLetter},{paddingLeft:item.widget.fontLetter},{color:item.widget.colors},{backgroundColor:item.widget.bgcolors},{width:item.widget.width},{height:item.widget.height}]" v-model="item.widget.value"></div>',
        video:'<div class="videobox"><div class="playbtn"><i class="iconfont icon-bofang"></i></div><div :style="[{width:item.widget.width},{height:item.widget.height}]"><img :src="item.widget.src" :style="[{height:item.widget.height},{maxWidth:item.widget.width},{lineHeight:item.widget.width}]"></img></div></div>',
        audio:'<div class="audiobox" @click="play"><audio :src="item.widget.audiosrc" :style="[{width:item.widget.width},{height:item.widget.height}]" :autoplay="item.widget.audioauto"></audio><i :class="item.widget.audiostyle" :style="[{fontSize:item.widget.stylesize},{lineHeight:item.widget.height}]"></i></div>',
        location:'<div class="locbox" :id="item.widget.locname"><span :style="[{width:item.widget.width},{height:item.widget.height},{lineHeight:item.widget.height}]"><i class="iconfont icon-location"></i></span></div>',
        tabPolygon:'',
        tabCountDown:'',
        tabMimg:'',
        reservations:'<div class="reservationsbox"><form action="" :id="\'cloudform\'+cindex"><div class="textbox" v-for="(kovey,pindex) in item.widget.form"><div class="kstextbox" v-if="kovey.type == \'stext\'"><input :type="kovey.regx" :name="kovey.val" :placeholder="kovey.val" :value="kovey.val" :required="kovey.must" :style="[{backgroundColor:item.widget.bgcolors},{borderColor:item.widget.bordercolors},{color:item.widget.colors}]" /></div><div class="kdbtextbox" v-if="kovey.type == \'dbtext\'"><textarea :name="kovey.val" :placeholder="kovey.val" :required="kovey.must" v-model="kovey.val" :rows="kovey.lnum" :style="[{backgroundColor:item.widget.bgcolors},{borderColor:item.widget.bordercolors},{color:item.widget.colors}]"></textarea></div><div class="kradiobox" v-if="kovey.type == \'radio\'"><p :style="[{color:item.widget.colors}]">{{kovey.cue}}</p><select :name="kovey.cue" id="" :style="[{backgroundColor:item.widget.bgcolors},{color:item.widget.colors},{borderColor:item.widget.bordercolors}]"><option v-for="(item,index) in kovey.val">{{item.val}}</option></select></div><div class="kcheckboxbox" v-if="kovey.type == \'checkbox\'"><div class="kcheck"><p :style="[{color:item.widget.colors}]">{{kovey.cue}}</p><ul :style="[{borderColor:item.widget.bordercolors}]"><li v-for="(diss,index) in kovey.val" :style="[{backgroundColor:item.widget.bgcolors},{color:item.widget.colors}]"><input :name="kovey.cue+index" type="checkbox" /><span>{{diss.val}}</span></li></ul></div></div></div><button :id="\'cloudbtn\'+cindex" :style="[{backgroundColor:item.widget.btcolors},{color:item.widget.colors}]">{{item.widget.value}}</button></form></div>',
        tabYuyinliuyan:'',
    };
    var baseHm='<div v-show="item.show" :class="[\'widget-view\',sbool?\'widget-select\':\'\',cls,this.$parent.itemlist.indexOf(cindex) != -1?\'widget-select\':\'\']" v-dragx="dragBox" @bindUpdate="bindUpdate" :style="[{left:item.widget.lefts},{top:item.widget.tops},{width:item.widget.width},{height:item.widget.height},{transform: \'rotate(\'+item.widget.rotate+\'deg)\'},{zIndex:$parent.comlist.length-cindex}]">'+
                    '<div class="dragdot dot1"></div><div class="dragdot dot2"></div><div class="dragdot dot3"></div><div class="dragdot dot4"></div><div class="dragdot dot5"></div><div class="dragdot dot6"></div><div class="dragdot dot7"></div><div class="dragdot dot8"></div>'+
                    '<div class="fl-widget drag" @click="dclick" @dblclick.self="dbclick" @click.self="getCindex">' +
                        '<div :widgetname="wgtname" ref="inputbox" :style="{pointerEvents:item.widget.pointerevents}">'+hmGroup[typ]+'</div>'+
                    '</div>'+
                '</div>';
    return baseHm;
}
const tabText = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_text',
            wgtname:'_widget_'+new Date().getTime(),
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template:hm('text'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        dclick:function(e){
            $(e.target).removeClass("edit")
        },
        dbclick:function(e){
            this.item.widget.pointerevents = 'auto'
            $(e.target).addClass("edit")
        },
        focus:function(e){
            if (this.item.widget.value == '双击可输入文本') {
                $(e.target)[0].innerText = '';
                this.item.widget.value = '';
            }
            this.$parent.cankey = false
        },
        blur:function(){
            this.item.widget.pointerevents = 'none'
            this.$parent.cankey = true
        },
        getval:function(val){
            this.item.widget.value = val.target.innerText
        }
    }
});
const tabImage = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_image',
            wgtname:'_widget_'+new Date().getTime(),
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('image'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        layers:function(){

        },
        chooseimg:function(e){
            this.item.widget.imgroom =true;
        },
        dclick:function(e){
            this.item.widget.pointerevents = 'none';
        },
        dbclick:function(e){
            this.item.widget.pointerevents = 'auto';
            this.item.widget.imgroom = true;
        }
    }
});
const tabBtn = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_btn',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('button'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){
            this.item.widget.pointerevents = 'none'
            $(e.target).removeClass("edit")
        },
        dbclick:function(e){
            this.item.widget.pointerevents = 'auto'
            $(e.target).addClass("edit")
        }
    }
});
const tabVideo = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_video',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('video'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){
            this.item.widget.pointerevents = 'none'
            $(e.target).removeClass("edit")
        },
        dbclick:function(e){
            this.item.widget.pointerevents = 'auto'
            $(e.target).addClass("edit")
        }
    }
});
const tabAudio = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_audio',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                resizeEdge: 1,
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('audio'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){
            // this.dragBox.canDrag = true
            this.item.widget.pointerevents = 'none'
            $(e.target).removeClass("edit")
        },
        dbclick:function(e){
            this.item.widget.pointerevents = 'auto'
            $(e.target).addClass("edit")
        },
        play:function(e){
            $(e.target).siblings('audio')[0].play();
        }
    }
});
const tabLoc = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_loc',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                resizeEdge: 1,
                canResize:false,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('location'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){},
        dbclick:function(e){}
    }
});
const tabPolygon = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_btn',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                resizeEdge: 1,
                canResize:false,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('tabPolygon'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){},
        dbclick:function(e){}
    }
});
const tabCountDown = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_btn',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                resizeEdge: 1,
                canResize:false,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('tabCountDown'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){},
        dbclick:function(e){}
    }
});
const tabMimg = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_btn',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                resizeEdge: 1,
                canResize:false,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('tabMimg'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){},
        dbclick:function(e){}
    }
});
const tabReservations = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_text',
            wgtname:'_widget_'+new Date().getTime(),
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template:hm('reservations'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            // this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        keydelCom:function(){
            this.$emit('keydelcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){
            $(e.target).removeClass("edit")
        },
        dbclick:function(e){
            $(e.target).addClass("edit")
        }
    }
});
const tabYuyinliuyan = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_text',
            wgtname:'_widget_'+new Date().getTime(),
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template:hm('reservations'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            var topchange = data.top - oldtops;
            var leftchange = data.left - oldlefts;
            if (this.$parent.itemlist.length >1) {
                for (var i = this.$parent.itemlist.length - 1; i >= 0; i--) {
                    if(this.cindex != this.$parent.itemlist[i]){
                        var top = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.tops);
                        var left = parseInt(this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts);
                        var tops = top + topchange + 'px'
                        var lefts = left + leftchange + 'px'
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.tops = tops;
                        this.$parent.comlist[this.$parent.itemlist[i]].widget.lefts = lefts;
                    } 
                }
            }
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        keydelCom:function(){
            this.$emit('keydelcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        dclick:function(e){
            this.item.widget.pointerevents = 'none'
            $(e.target).removeClass("edit")
        },
        dbclick:function(e){
            this.item.widget.pointerevents = 'auto'
            $(e.target).addClass("edit")
        }
    }
});
