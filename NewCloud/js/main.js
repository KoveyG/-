var vm = new Vue({
    el:'#body',
    data:{
        init:{
            base:bases,
            boost:boss
        },
        list:{
            tit:'落地云',
            content:'落地云',
            realm:'www.baidu.com',
            backgroundPosition:'center top',
            backgroundimg:'',
            backgroundImage:'',
            backgroundColor:'#fff',
            backgroundRep:false,
            backgroundRepeat:'no-repeat',
            pageheight:'600px',
        },//页面数据
        comlist:[],//主数据
        oldlist:[],//老数据
        newlist:[],//新数据
        movelist:[],//移动数据
        itemlist:[],//多数据
        imgbglist:[
            {id:'1',src:'images/1.jpg'},
            {id:'2',src:'images/2.jpg'},
            {id:'3',src:'images/3.jpg'},
            {id:'4',src:'images/4.jpg'},
            {id:'5',src:'images/5.jpg'},
            {id:'6',src:'images/6.jpg'},
            {id:'7',src:'images/7.jpg'},
        ],//图片库
        imglist:[
            {id:'1',src:'images/my.jpg'},
            {id:'2',src:'images/logo.jpg'},
            {id:'3',src:'images/pageimg.jpg'},
            {id:'4',src:'images/pcimg.jpg'},
            {id:'5',src:'images/phoneimg.jpg'},
            {id:'6',src:'images/ad1.jpg'},
        ],//图片库
        imgroom:false,
        preview:false,
        audiolist:[
            {id:'1',playing:false,name:'学猫叫',src:'http://other.web.nf01.sycdn.kuwo.cn/resource/n1/97/24/778796119.mp3'},
            {id:'2',playing:false,name:'隔壁泰山',src:'http://other.web.nf01.sycdn.kuwo.cn/resource/n2/44/96/1593378899.mp3'},
            {id:'3',playing:false,name:'海草海草',src:'http://175.174.26.140/mp32.9ku.com/upload/2017/11/29/873031.m4a'},
            {id:'4',playing:false,name:'大哥别杀我',src:'http://win.web.nf01.sycdn.kuwo.cn/resource/n1/39/23/4156074505.mp3'},
            {id:'5',playing:false,name:'老公天下第一',src:'http://175.174.26.140/mp32.9ku.com/upload/128/2018/03/29/877504.mp3'},
            {id:'6',playing:false,name:'c哩c哩',src:'http://175.174.26.139/mp32.9ku.com/upload/2017/10/13/869617.m4a'},
        ],//音频库
        partlist:{
            dragDirection:'s, w',
            dragBarClass:"drag",
            left:"300px",
            top:"140px",
            dirctDom: true,
            isshow:true,
            canResize:false,
        },//部件列表拖拽配置
        moveIndex:null,
        targetIndex:null,
        shiftKey:false,
        cankey:true,
        sIndex:-1
    },
    components:{
        'tab-text':tabText,
        'tab-btn':tabBtn,
        'tab-image':tabImage,
        'tab-video':tabVideo,
        'tab-audio':tabAudio,
        'tab-liuyanban':tabReservations,
        'tab-location':tabLoc,
        'tab-polygon':tabPolygon,
        'tab-CountDown':tabCountDown,
        'tab-Mimg':tabMimg,
        'tab-yuyinliuyan':tabYuyinliuyan,

        'set-fontfamily':setfontfamily,
        'set-btnstyle':setbtnstyle,
        'set-fontsize':setfontsize,
        'set-fontline':setfontline,
        'set-colors':setcolors,
        'set-bordercolors':setbordercolors,
        'set-indexs':setindexs,
        'set-events':setevents,
        'set-fontstyle':setfontStyle,
        'set-img':setimg,
        'set-imgroom':setImgroom,
        'set-size':setsize,
        'set-loc':setloc,
        'set-text':setText,
        'set-opacity':setOpacity,
        'set-rotate':setRotate,
        'set-videosrc':setVideosrc,
        'set-audiosrc':setAudiosrc,
        'set-audiostyle':setAudiostyle,
        'set-audioroom':setAudioroom,
        'set-audioauto':setAudioauto,
        'set-title':setTitle,
        'set-addform':setAddform,
        'set-form':setForm,
        'set-locname':setLocname,
        'set-aline':setAline,
        // 'set-progress':setProgress,
        // 'set-control':setControl,

        'op-color':OpColors,
        'op-fontfamily':OpFontFamily,
        'op-fontsize':OpFontSize,
        'op-fontline':OpFontline,
        'op-fontletter':OpFontletter,
        'op-optext':OpText,
        'op-opalign':OpAlign,
        'op-opcontrol':OpControl,

        'bt-batchline':Batchline,
    },//注册组件
    watch: {
        comlist:{
            handler: function(curVal,oldVal){
                cur=JSON.stringify(curVal);
                old = this.oldlist;
                if(window.event){
                    if(window.event.type!='mousemove'){
                        this.oldlist.push(cur);
                    }
                    else {
                        this.movelist.push(cur);
                    }
                }else
                    this.oldlist.push(cur);
            },
            deep: true
        }
    },//监听数据变化
    computed: {
        
    },
    mounted(){
        var _this = this;
        var component = this;
        document.onkeydown = function(e){
            if (_this.cankey) {
                var key = window.event || e 
                if (key.shiftKey) {
                    _this.shiftKey = true;
                }
                if (_this.sIndex == -1) {
                    if(key.ctrlKey){
                        switch (key.keyCode){
                            case 90:
                                component.back();
                                event.preventDefault();
                                break;
                            case 89:
                                component.next();
                                event.preventDefault();
                                break;   
                            case 38:
                                component.shorten();
                                event.preventDefault();
                                break;//ctrl+↑
                            case 40:
                                component.elongate();
                                event.preventDefault();
                                break;//ctrl+↓
                            case 83:
                                component.save();
                                event.preventDefault();
                                break; 
                        }
                    }
                }else{
                    switch (key.keyCode){
                        case 37:
                            event.preventDefault();
                            var left = parseInt(_this.comlist[_this.sIndex].widget.lefts) 
                            _this.comlist[_this.sIndex].widget.lefts = left-1 + 'px';
                            break;
                        case 38:
                            event.preventDefault();
                            var top = parseInt(_this.comlist[_this.sIndex].widget.tops) 
                            _this.comlist[_this.sIndex].widget.tops = top-1 + 'px'
                            break;
                        case 39:
                            event.preventDefault();
                            var left = parseInt(_this.comlist[_this.sIndex].widget.lefts) 
                            _this.comlist[_this.sIndex].widget.lefts = left+1 + 'px';
                            break;
                        case 40:
                            event.preventDefault();
                            var top = parseInt(_this.comlist[_this.sIndex].widget.tops) 
                            _this.comlist[_this.sIndex].widget.tops = top+1 + 'px';
                            break;
                        case 46:
                            component.del();
                            event.preventDefault();
                            break;
                        case 8:
                            component.del();
                            event.preventDefault();
                            break;
                    }
                }
            }
        }
        document.onkeyup = function(e){
            _this.shiftKey = false
        }
    },//键盘事件
    methods:{
        save:function(){
            console.log(JSON.stringify(this.comlist));
            console.log(JSON.stringify(this.list));
            console.log(this.sIndex)
            layer.msg('已保存')
        },//保存
        addItem:function(obj){
            var top = $(".mid").scrollTop() - 150;
            var width = parseInt(obj.widget.width);
            // var height = parseInt(obj.widget.height);
            obj.widget.tops = 300  + top + 'px'
            obj.widget.lefts = 188 -  width/2 + 'px'
            if(obj.use){
                this.sIndex=0;
                this.comlist.splice(0,0,JSON.parse(JSON.stringify(obj)));
            }
        },//添加模块
        copyItem:function(obj){
            if(obj){
                this.sIndex=0;
                this.comlist.splice(0,0,JSON.parse(JSON.stringify(obj)));
            }
        },//复制模块
        selector:function(ind){
            if(this.shiftKey){
                if(this.itemlist.indexOf(ind) == -1){
                    this.itemlist.push(ind);
                }
            }
            else if(this.itemlist.length <= 1){
                this.sIndex=ind;
                this.itemlist[0] =ind;
            }
        },//选中模块
        focus:function(){
        },
        deleteCom:function(ind){
            // alert(ind)
            var len = this.comlist.length-1;
            this.comlist.splice(ind,1);
            if(ind==len){
                this.sIndex=len-1;
            }
        },//删除选中模块
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
            this.imgbglist.push(n)
        },//上传图片 限制大小 转base64
        delimg:function(index){
            var _this = this
            layer.confirm('是否删除该图片', {
                btn: ['删除','取消']
            }, function(){
                layer.msg('已删除', {icon: 1});
                _this.imglist.splice(index,1);
            }, function(){
                layer.msg('未删除');
            });
        },
        changeimg:function(e){
            this.imgroom = true;
            event.stopPropagation();
        },//更换图片
        deleteimg:function(e){
            this.list.backgroundImage = '';
            this.list.backgroundimg = '';
        },//删除图片
        chooseimg:function(e){
            var img = $(e.target).parent().find('img')[0];
            var imgurl = img.src
            var URL = 'url\('+img.src+'\)';
            this.list.backgroundimg = imgurl;
            this.list.backgroundImage = URL;
            this.imgroom = false;
        },
        close:function(){
            this.imgroom = false;
        },
        bgrepeat:function(e){
            this.list.backgroundPosition = 'left top'
            if (this.list.backgroundRep) {
                this.list.backgroundRepeat = 'repeat'
            }else{
                this.list.backgroundRepeat = 'no-repeat'
            }
        },//背景平铺
        shorten:function(){
            var height = parseInt(this.list.pageheight)-10;
            this.list.pageheight =  height +'px'
        },//页面缩短
        elongate:function(){
            var height = parseInt(this.list.pageheight)+10;
            this.list.pageheight =  height +'px'
        },//页面加长
        bindUpdate(event){
            let data=event.detail;
            this.partlist.top = data.top+'px';
            this.partlist.left = data.left+'px';
        },//部件列表拖动操作
        active:function(index){
            this.sIndex = index
        },//部件列表选中操作
        del:function(){
            this.comlist.splice(this.sIndex,1);
            this.sIndex = -1;
        },//部件列表删除操作
        blank:function(e){
            if ($(e.target).attr("class") == 'elebox') {
                this.sIndex = -1;
                this.itemlist = [];
            }
            if ($(e.target).attr("class") == 'mid') {
                this.sIndex = -1;
                this.itemlist = [];
            }
        },//点击空白操作
        back:function(){
            if(this.oldlist.length>1) {
                var action = this.oldlist.pop();
                this.newlist.push(action);
                var cur = this.oldlist.pop();
                this.comlist = JSON.parse(cur);

            }
        },//撤回操作
        next:function(){
            if(this.newlist.length){
                var action=this.newlist.pop();
                this.comlist=JSON.parse(action);
            }
        },//前进操作
        startDrag:function(){
        },
        ends:function(obj){
            this.sIndex=obj.newIndex;
        },
        opcon:function(){
            this.sIndex = -1;
            this.itemlist=[];
        },//点击右侧设置 取消模块选中
    }
});