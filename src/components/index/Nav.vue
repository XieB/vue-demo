<template>
    <ul class="nav clear_fix">
        <li><router-link to="index">首页</router-link></li>
        <li><router-link to="demand">需求</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "mynav"
    }
</script>

<style lang="less" scoped>
.nav{
    background-color: #f8f8f8;
    li{
        float: left;
        a{
            color: #777;
            padding: 10px 15px;
            display: inline-block;
            &:hover,&.router-link-active{
                background-color: #e7e7e7;
                color: #555;
            }

        }
    }
}
</style>