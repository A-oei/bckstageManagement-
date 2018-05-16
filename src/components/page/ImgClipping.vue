<template>
  <div class="clipping">
    <div class="vue-core-image-upload">
      <div class="common-title">vue-core-image-upload</div>
      <div class="picture-preview">
        <img :src="uploadSrc">
      </div>
      <vue-core-image-upload
        class="upload"
        crop=true
        text="点击上传"
        inputOfFile="image"
        inputAccept="image/*"
        url="api/file/upload"
        extensions="png,gif,jpeg,jpg"
        crop-ratio="1:1"
        @imageuploaded="imageuploaded"
        @imagechanged="imagechanged"
        @imageUploading="imageUploading"
        @errorhandle="handleError">
      </vue-core-image-upload>
    </div>
    <div class="cropper">
      <div class="common-title">cropper.js</div>
      <div class="picture-preview">
        <img :src="src">
      </div>
      <div class="crop-demo-btn">选择图片
        <input class="crop-input" type="file" name="image" accept="image/*" @change="setImage"/>
      </div>
      <!--封装成为vue插件后，属性如modal和方法的使用:modal="flag"-->
      <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
        <vue-cropper ref='cropper' :src="src" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" :modal="flag"
                     style="width:100%;height:300px;">
        </vue-cropper>
        <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelCrop">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="less" scoped>
  /*预览图片样式*/
  .picture-preview {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .clipping {
    /*vue-core-image-upload插件*/
    .vue-core-image-upload {
      .upload {
        width: 100px;
        height: 40px;
        text-align: center;
        cursor: pointer;
        background-color: #409eff;
        color: #ffffff;
        font-size: 12px;
        line-height: 40px;
        border-radius: 5px;
        margin: 30px 50px;
      }
    }
    /*cropper样式*/
    .cropper{
      /*cropper插件样式*/
      .crop-demo-btn {
        position: relative;
        width: 100px;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        background-color: #409eff;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
        box-sizing: border-box;
        margin: 30px 50px;
      }
      .crop-input {
        position: absolute;
        width: 100px;
        height: 40px;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
  }


</style>

<script>

  import VueCoreImageUpload from 'vue-core-image-upload'

  import VueCropper from 'vue-cropperjs';

  export default {
    components: {
      VueCoreImageUpload,
      VueCropper
    },
    data() {
      return {
        uploadSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526365749729&di=16823ed2276a8a6daf442d19f77b5d11&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201502%2F01%2F20150201192343_dWkeP.jpeg',
        flag: true,
        imageUrl: '',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526365749729&di=16823ed2276a8a6daf442d19f77b5d11&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201502%2F01%2F20150201192343_dWkeP.jpeg',
        dialogVisible: false,
      };
    },
    methods: {

      //vue-core-image-upload方法
      imageuploaded(res) {
        console.log('上传接口返回的数据', res);
        this.uploadSrc = res.data;
      },
      imagechanged() {
        console.log('上传过程')
      },
      imageUploading(res) {
        console.log('uploading');
      },
      handleError() {
        console.log("上传图片失败")
        this.$notify.error({
          title: '上传失败',
          message: '图片上传接口上传失败，可更改为自己的服务器接口'
        });
      },


      //cropper方法
      setImage(e) {
        const file = e.target.files[0];
        if (!file.type.includes('image/')) {
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          this.dialogVisible = true;
          this.src = event.target.result;
          console.log(event, event);
          this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      },
      cropImage() {
        //转化为Base64格式   getCroppedCanvas().toDataURL()
        this.src = this.$refs.cropper.getCroppedCanvas().toDataURL();
      },
      cancelCrop() {
        alert(123)
        this.dialogVisible = false;
        this.cropImg = this.defaultSrc;
      },
    }
  }
</script>
