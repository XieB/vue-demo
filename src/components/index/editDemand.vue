<template>
    <div class="addDemand">
        <label for="">
            <span>模板：</span>
            <input type="text" placeholder="模板" v-model="data.title" :disabled="data.endtime">
        </label>
        <label for="">
            <span class="desc">问题描述：</span>
            <div id="editor"></div>
        </label>
        <label for="">
            <span>是否解决：</span>
            <template v-if="data.endtime">
                <span class="iconfont icon-duihao active_dh" title="已解决"></span>
            </template>
            <template v-else>
                <span class="iconfont icon-duihao" :class="{active_dh : data.status == 1}" @click="isok" title="已解决"></span>
                <span class="iconfont icon-jinxingzhong" :class="{active_jx : data.status == 2}" @click="isloading" title="延时解决"></span>
                <span class="iconfont icon-error-1" :class="{active_cw : data.status == 0}" @click="iserror" title="未解决"></span>
            </template>
        </label>
        <label for="" v-if="data.endtime">
            <span>解决时间：</span>
            <span class="endtime">{{data.endtime}}</span>
        </label>
        <div class="submit">
            <button type="button" @click="submit" :disabled="data.endtime">提交</button>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: "add-demand",
        data : function(){
            return {
                data : ''
            }
        },
        methods : {
            submit : function(){
                let _this = this;
                this.$http.put('/demand/' + _this.data.id,this.data).then(function(response){
                    if (response.data.code){
                        _this.$router.push('/index/demand');
                    }else{
                        alert('添加失败');
                    }
                })
            },
            curl : function(id){
                let _this = this;
                this.$http('/demand/' + id).then(function(response){
                    _this.data = response.data;
                    window.editor.txt.html(_this.data.desc);
                    if (_this.data.status == 1){
                        editor.$textElem.attr('contenteditable', false);
                    }
                })
            },
            isok : function(){
                this.data.status = 1;
            },
            iserror : function(){
                this.data.status = 0;
            },
            isloading : function(){
                this.data.status = 2;
            },
        },
        mounted() {
            let _this = this;
            window.editor = new E('#editor')
            editor.customConfig.onchange = function (html) {
                // document.getElementById('text1').value = html;
                _this.data.desc = html;
            };
            editor.customConfig.uploadImgShowBase64 = true;
            editor.create();
        },
        created : function(){
            this.curl(this.$route.params.id);
        },
        beforeRouteUpdate : function(to, from, next){
            this.curl(to.params.id);
        }
    }
</script>

<style lang="less" scoped>
    .addDemand{
        width: 1200px;
        margin: 100px auto;
        label{
            display: block;
            margin-bottom: 20px;
            #editor{
                width: 1024px;
                display: inline-block;
            }
            #editor,.desc{
                vertical-align: middle;
            }
            span{
                display: inline-block;
                width: 100px;
                text-align: right;
            }
            .iconfont{
                width: 30px;
                text-align: center;
                font-size: 18px;
                color: #999;
                cursor: pointer;
            }
            input{
                width: 1000px;
                padding: 6px 10px;
            }
            .active_jx{
                color: #f0ad4e;
            }
            .active_dh{
                color: #0e931c;
            }
            .active_cw{
                color: #d9534f;
            }
            span.icon-jinxingzhong:hover{
                .active_jx;
            }
            span.icon-duihao:hover{
                .active_dh;
            }
            span.icon-error-1:hover{
                .active_cw;
            }
            span.endtime{
                width: 200px;
                text-align: left;
            }
        }
        .submit{
            text-align: center;
            button{
                cursor: pointer;
                border-radius: 4px;
                transition: background-color 0.3s;
                padding: 6px 20px;
                border: none;
                background-color: #337ab7;
                color: #fff;
                font-size: 18px;
                &:hover{
                    background-color: #2e6da4;
                }
                &:disabled{
                    background-color: #999;
                }
            }
        }
    }
</style>