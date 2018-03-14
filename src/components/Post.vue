<template>
  <div id="main">
    <ul>
      <li class="title">
        <h5>页面</h5>
        <h5>完成情况</h5>
        <h5>备注</h5>
      </li>
      <li v-for="(item,index) in items">
        <a :href="item.url">{{item.title}}</a>
        <span class=" iconfont" :class="classObject(item.process)"></span>
        <div>{{item.remark}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "manager-index",
        data : function(){
            return {
                items : '',
            }
        },
        created : function(){
            let _this = this;
            this.$http('/lists').then(function(response){
                _this.items = response.data;
            })
        },
        methods : {
            classObject : function(num){
                return {
                    'icon-duihao' : num == 1,
                    'icon-jinxingzhong' : num == 2,
                    'icon-error-1' : num == 3
                }
            },
        },
    }
</script>

<style lang="less" scoped>
  #main{
    width: 1200px;
    margin: 0 auto;
    .title{
      h5{
        width: 33.33%;
        text-align: center;
        float: left;
      }
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
        width: 33.33%;
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
  }
</style>