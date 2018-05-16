<template>
    <div class="login-wrap">
        <div class="login-title">
            后台管理系统
        </div>
        <div class="login-form radius_5">
            <!--引入element/from-->
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="loginForm">
                <el-form-item  prop="username">
                    <el-input type="username" v-model="loginForm.username"  placeholder="请输入您的账号"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="loginForm.password"  placeholder="请输入您的密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .login-wrap{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #324157;
        .login-title{
            width: 100%;
            font-size: 30px;
            color: #ffffff;
            text-align: center;
            margin: 40px auto 0;
        }
        .login-form{
            width: 300px;
            height: 160px;
            margin: 100px auto 0;
            padding: 40px;
            background-color: #fff;
        }
    }
</style>
<script>
    import {SUC} from '../common/api/code'


    export default {
        data() {
            var validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请填写您的账号'));
                }else{
                    callback()
                }
            };
            var validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请填写您的密码'));
                }else{
                    callback()
                }
            };
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                //验证规则
                rules: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        // this.$http.get("/api/findUserList")
                        //     .then(res=>{
                        //         console.log(res);
                        //     })
                        //     .catch(err=>{
                        //         console.log(err);
                        //     })
                        const that=this;
                        this.$http.post('/api/login/'+this.loginForm.username+"/"+this.loginForm.password)
                            .then(res=>{
                                if(res.data.code==SUC){
                                    that.$store.commit('login',this.loginForm.username);
                                    console.log(that.$store.state.user,"用户名存储");
                                    that.$router.push("/")
                                }else{
                                    console.error(res.data.msg)
                                }
                            })

                    }
                });
            }
        }
    }
</script>
