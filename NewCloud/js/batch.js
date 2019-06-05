var pubPros=['item'];
function cbt(typ){
    var cbtGroup={
        batchline:'<div class="formbox ftsty"><label>工具对齐</label><div class="ftbiu"><button @click="textsl"><i class="iconfont icon-zuoduiqi"></i></button><button @click="textsc"><i class="iconfont icon-duiqichuizhi"></i></button><button @click="textsr"><i class="iconfont icon-youduiqi"></i></button></div><div class="ftali"><button @click="textst"><i class="iconfont icon-dingduiqi"></i></button><button @click="textsm"><i class="iconfont icon-duiqishuiping"></i></button><button @click="textsb"><i class="iconfont icon-diduiqi"></i></button></div></div><div class="formbox ftsty"><label>画布对齐</label><div class="ftbiu"><button @click="pgsl"><i class="iconfont icon-zuoduiqi"></i></button><button @click="pgsc"><i class="iconfont icon-duiqichuizhi"></i></button><button @click="pgsr"><i class="iconfont icon-youduiqi"></i></button></div><div class="ftali"><button @click="pgst"><i class="iconfont icon-dingduiqi"></i></button><button @click="pgsm"><i class="iconfont icon-duiqishuiping"></i></button><button @click="pgsb"><i class="iconfont icon-diduiqi"></i></button></div></div>',
    };
    var cbasebt='<div>'+cbtGroup[typ]+'</div>';
    return cbasebt;
}
const Batchline = Vue.extend({
    data:function(){
        return {
            batchline:'aaa'
        }
    },
    props:pubPros,
    template:cbt('batchline'),
    methods:{
        textsl:function(){
            var min = 1000;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var model = this.$parent.comlist[this.item[i]];
                var left = parseInt(model.widget.lefts);
                if(left < min){
                    min = left;
                }
            }
            var lefts = min+'px';
            for (var i = this.item.length - 1; i >= 0; i--) {
                this.$parent.comlist[this.item[i]].widget.lefts = lefts
            }
        },
        textsc:function(){
            var min = 1000;
            var max = -1000;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var model = this.$parent.comlist[this.item[i]];
                var left = parseInt(model.widget.lefts);
                var width = parseInt(model.widget.width);
                var center = width/2 + left;
                if(center < min){
                    min = center;
                }
                if(center > max){
                    max = center;
                }
            }
            var mid = (min + max) / 2;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var width = parseInt(this.$parent.comlist[this.item[i]].widget.width);
                var left = mid-width/2;
                var lefts = left + 'px';
                this.$parent.comlist[this.item[i]].widget.lefts = lefts;
            }
        },
        textsr:function(){
            var max = -1000;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var model = this.$parent.comlist[this.item[i]];
                var left = parseInt(model.widget.lefts);
                var width = parseInt(model.widget.width);
                var right = left + width;
                if(right > max){
                    max = right;
                }
            }
            for (var i = this.item.length - 1; i >= 0; i--) {
                var width = parseInt(this.$parent.comlist[this.item[i]].widget.width);
                var lefts = max - width +'px';
                this.$parent.comlist[this.item[i]].widget.lefts = lefts
            }
        },
        textst:function(){
            var min = 1000;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var model = this.$parent.comlist[this.item[i]];
                var top = parseInt(model.widget.tops);
                if(top < min){
                    min = top;
                }
            }
            var tops = min+'px';
            for (var i = this.item.length - 1; i >= 0; i--) {
                this.$parent.comlist[this.item[i]].widget.tops = tops
            }
        },
        textsm:function(){
            var min = 1000;
            var max = -1000;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var model = this.$parent.comlist[this.item[i]];
                var left = parseInt(model.widget.tops);
                var height = parseInt(model.widget.nowheight);
                var center = height/2 + left;
                if(center < min){
                    min = center;
                }
                if(center > max){
                    max = center;
                }
            }
            var mid = (min + max) / 2;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var height = parseInt(this.$parent.comlist[this.item[i]].widget.nowheight);
                var left = mid-height/2;
                var tops = left + 'px';
                this.$parent.comlist[this.item[i]].widget.tops = tops;
            }
        },
        textsb:function(){
            var max = -1000;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var model = this.$parent.comlist[this.item[i]];
                var left = parseInt(model.widget.tops);
                var height = parseInt(model.widget.nowheight);
                var right = left + height;
                if(right > max){
                    max = right;
                }
            }
            for (var i = this.item.length - 1; i >= 0; i--) {
                var height = parseInt(this.$parent.comlist[this.item[i]].widget.nowheight);
                var tops = max - height +'px';
                this.$parent.comlist[this.item[i]].widget.tops = tops
            }
        },
        pgsl:function(){
            for (var i = this.item.length - 1; i >= 0; i--) {
                this.$parent.comlist[this.item[i]].widget.lefts = '-5px'
            }
        },
        pgsc:function(){
            var mid = 185;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var width = parseInt(this.$parent.comlist[this.item[i]].widget.width);
                var left = mid-width/2;
                var lefts = left + 'px';
                this.$parent.comlist[this.item[i]].widget.lefts = lefts;
            }
        },
        pgsr:function(){
            var max = 370
            for (var i = this.item.length - 1; i >= 0; i--) {
                var width = parseInt(this.$parent.comlist[this.item[i]].widget.width);
                var lefts = max - width +'px';
                this.$parent.comlist[this.item[i]].widget.lefts = lefts
            }
        },
        pgst:function(){
            for (var i = this.item.length - 1; i >= 0; i--) {
                this.$parent.comlist[this.item[i]].widget.tops = '-5px'
            }
        },
        pgsm:function(){
            var mid = (parseInt(this.$parent.list.pageheight)-5)/2;
            for (var i = this.item.length - 1; i >= 0; i--) {
                var height = parseInt(this.$parent.comlist[this.item[i]].widget.nowheight);
                var left = mid-height/2;
                var tops = left + 'px';
                this.$parent.comlist[this.item[i]].widget.tops = tops;
            }
        },
        pgsb:function(){
            var max = parseInt(this.$parent.list.pageheight)-5
            for (var i = this.item.length - 1; i >= 0; i--) {
                var height = parseInt(this.$parent.comlist[this.item[i]].widget.nowheight);
                var tops = max - height +'px';
                this.$parent.comlist[this.item[i]].widget.tops = tops
            }
        }
    }
});