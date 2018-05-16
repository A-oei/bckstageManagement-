<template>
  <div class="wsj-editor">
    <div class="common-title">编辑文章内容</div>
    <!--表单部分-->
    <div class="formBox">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题" required>
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="文章来源" required>
          <el-input v-model="form.source" clearable></el-input>
        </el-form-item>
        <el-form-item label="发布方式" required>
          <el-select v-model="form.region" placeholder="请选择发布方式">
            <el-option label="预约发布" value="shanghai"></el-option>
            <el-option label="立即发布" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div class="block">
          <span class="demonstration">设置默认时间</span>
          <el-date-picker
            v-model="articleTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </div>
      </el-form>
    </div>
    <!--富文本编译器-->
    <div class="editorBox">
      <quill-editor v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <!--图片裁剪-->

  </div>
</template>
<style lang="less">
  .wsj-editor {
    .formBox {
      width: 400px;
    }
    /*富文本编译器*/
    .editorBox{
      margin-top: 40px;
      height: 400px;
      .quill-editor{
        height: 100%;
      }
    }
  }

</style>
<script>
  // import Quill from 'quill'
  // import { someModule } from '..//someQuillModule.js'
  // Quill.register('modules/someModule')

  export default {
    mounted(){
      console.log(this.$route.params,"$route.params")
    },
    data() {
      return {
        articleTime: "",
        form: {
          name: '',
          source: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        content: '<h2>请输入文章内容</h2>',
        editorOption:
          {
            // some quill options
          }
      }
    }
    ,
    // manually control the data synchronization
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
        console.log(this.content)
      }
      ,
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      }
      ,
      onEditorReady(quill) {
        //准备完成之后
        console.log('editor ready!', quill)
      }
      ,
      onEditorChange({quill, html, text}) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    }
    ,
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    }
  }
</script>
