<template>
    <div class="edit">
        <label for="">
            <span>说明：</span>
            <input type="text" placeholder="请输入说明" v-model="data.title">
        </label>
        <label for="">
            <span>网址：</span>
            <input type="text" placeholder="http://" v-model="data.url" :disabled="data.process != 1">
        </label>
        <label for="">
            <span>备注：</span>
            <input type="text" placeholder="备注" v-model="data.remark">
        </label>
        <label for="">
            <span>完成情况：</span>
            <span class="iconfont icon-duihao" :class="{active_dh : data.process == 1}" @click="isok"></span>
            <span class="iconfont icon-jinxingzhong" :class="{active_jx : data.process == 2}" @click="isloading"></span>
            <span class="iconfont icon-error-1" :class="{active_cw : data.process == 3}" @click="iserror"></span>
        </label>
        <div class="submit">
            <button type="button" @click="submit">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data : function(){
            return {
                data : {
                    process : 1,
                    remark : '',
                    title : '',
                    url : '',
                    process : '1'
                }
            }
        },
        methods : {
            isok : function(){
                this.data.process = 1;
            },
            isloading : function(){
                this.data.process = 2;
                this.oneData.url = '';
            },
            iserror : function(){
                this.data.process = 3;
                this.oneData.url = '';
            },
            submit : function(){
                let _this = this;
                this.$http.post('/plans',this.data).then(function(response){
                    if (response.data.code){
                        _this.$router.push('/index/index');
                    }else{
                        alert('添加失败');
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .edit{
        width: 1200px;
        margin: 100px auto;
        label{
            display: block;
            margin-bottom: 20px;
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
            }
        }
    }
</style>