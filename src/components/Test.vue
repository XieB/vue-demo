<template>
    <div class="editor">
        <div id="test">

        </div>
        <textarea id="text1" style="width:100%; height:200px;"></textarea>
    </div>

</template>

<script>
    import E from 'wangeditor'
    export default {
        name: "test",
        mounted() {
            var editor = new E('#test')
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.customConfig.onchange = function (html) {
                document.getElementById('text1').value = html;
            }
            editor.create();
        }
    }
</script>

<style lan="less" scoped>

</style>