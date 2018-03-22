<template>
    <div>
        <ul class="demand">
            <li class="title">
                <h5>时间</h5>
                <h5>模块</h5>
                <h5 class="desc">描述</h5>
                <h5>解决</h5>
                <h5 class="edit">操作</h5>
            </li>
            <li v-for="(item,index) in items">
                <span>{{item.createtime}}</span>
                <a :href="item.url">{{item.title}}</a>
                <span  class="desc">{{dealHtmlNode(item.desc)}}</span>
                <span class=" iconfont" :class="getState(item.status)" :title="getTitle(item.status)"></span>
                <div class="edit">
                    <router-link :to="{path:'/index/editDemand/' + item.id}" class="iconfont icon-xiugai" title="修改"></router-link>
                    <a class="iconfont icon-shanchu" title="删除" @click="del(index)"></a>
                </div>
            </li>
        </ul>
        <div class="submit">
            <router-link to="addDemand">添加需求</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demand",
        data : function(){
            return {
                items : '',
            }
        },
        created : function(){
            let _this = this;
            this.$http('/demand').then(function(response){
                _this.items = response.data;
            })
        },
        methods : {
            dealHtmlNode : function(html){
                return html.replace(/<.*?>/ig,"");
            },
            getState : function(code){
                if (code == 0) return 'icon-error-1';
                if (code == 1) return 'icon-duihao';
                if (code == 2) return 'icon-jinxingzhong';
            },
            getTitle : function(code){
                if (code == 0) return '未解决';
                if (code == 1) return '延时解决';
                if (code == 2) return '已解决';
            },
            del : function(index){
                let _this = this;
                this.$http.delete('/demand/' + this.items[index].id).then(function(response){
                    if (response.status == '200' && response.data.code == '1'){
                        _this.items.splice(index,1);
                    }else{
                        alert('发生错误');
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .demand{
        width: 1200px;
        margin: 0 auto;
        .desc{
            width: 30%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .edit{
            width: 10%;
        }
        h5{
            width: 20%;
            text-align: center;
            float: left;
        }
        li{
            line-height: 40px;
            &:after{
                display: block;
                content: '';
                clear: both;
            }
            &:last-child{
                border-bottom: none;
            }
            border-bottom: 1px dashed #999;
            a,div,span{
                min-height: 1px;
                display: block;
                width: 20%;
                float: left;
                text-align: center;
            }
            .iconfont{
                font-size: 18px;
            }
            span.icon-duihao{
                color: #0e931c;
            }
            span.icon-jinxingzhong{
                color: #f0ad4e;
            }
            span.icon-error-1{
                color: #d9534f;
            }
            a.icon-xiugai{
                color: #0e931c;
            }
            a.icon-shanchu{
                color: #d9534f;
            }
            a.icon-xiugai,a.icon-shanchu{
                cursor: pointer;
                text-align: center;
                width: 50%;
            }
            a{
                color: #333;
                cursor: auto;
            }
            a[href^="http"]{
                color: #337ab7;
                cursor: pointer;
            }
            a[href^="http"]:hover{
                color: #46b8da;
            }
        }
    }
    .submit{
        text-align: center;
        margin-top: 20px;
        a{
            transition: background-color 0.3s;
            padding: 6px 20px;
            font-size: 18px;
            color: #fff;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            background-color: #337ab7;
            border: none;
            cursor: pointer;
            &:hover{
                background-color: #2e6da4;
            }
        }
    }
</style>