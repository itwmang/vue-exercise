<template>
  <div class="login">
    <div class="main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <div class="text item" style="padding:20px">
          <el-form ref="loginForm" :model="loginForm" :rules="formRule" status-icon>
            <div class="input-row">
              <el-form-item prop="username">
                <el-input placeholder="请输入用户名" v-model="loginForm.username" auto-complete="off">
                  <template slot="prepend">用户名:</template>
                </el-input>
              </el-form-item>
            </div>
            <div class="input-row">
              <el-form-item prop="passwd">
                <el-input placeholder="请输入密码" type="password" v-model="loginForm.passwd" auto-complete="off">
                  <template slot="prepend">密&nbsp;&nbsp;&nbsp;码:</template>
                </el-input>
              </el-form-item>
            </div>
            <div class="input-row">
              <el-form-item prop="captcha">
                <el-input placeholder="验证码" v-model="loginForm.captcha" auto-complete="off">
                  <template slot="append">
                    <div class="captcha"></div>
                  </template>
                </el-input>
              </el-form-item>
            </div>
            <div class="input-row">
              <el-button class="submit" type="primary" @click="onSubmit" :loading="islogin">登录</el-button>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {Loading, Message} from 'element-ui'

export default {
  name: 'login-vue',
  data () {
    const loginForm = {
      username: '',
      passwd: '',
      captcha: ''
    }
    let captchaValid = (rule, value, callback) => {
      debugger
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== 'aaa') {
        callback(new Error('验证码不正确,请重新输入'))
      } else {
        callback()
      }
    }
    const formRule = {
      username: [
        {required: true, message: '请输入用户名', trigger: 'blur'}
      ],
      passwd: [
        {required: true, message: '请输入密码', trigger: 'blur'}
      ],
      captcha: [
        {validator: captchaValid, trigger: 'blur'}
      ]
    }
    return {
      loginForm: loginForm,
      formRule: formRule,
      islogin: false
    }
  },
  methods: {
    onSubmit: function () {
      let vm = this
      // vm.islogin = true
      debugger
      vm.$refs['loginForm'].validate((valid) => {
        if (valid) {
          let loadingInstance = Loading.service({
            lock: true,
            text: '请稍后,登录中..',
            spinner: 'el-icon-loading'
          })
          setTimeout(() => {
            vm.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close()
            })
            vm.$router.push({name: 'index'})
          }, 2000)
        } else {
          Message({
            message: '请检查登录信息',
            type: 'error',
            center: true
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/variable.scss';

  .login {
    padding: 0;
    overflow: hidden;
    background: $white;
    width: 100%;
    height: 100%;
    @include border_;
    //主块
    .main {
      width: 450px;
      margin: 150px auto;
      @include border_;
      //标题
      .clearfix {
        text-align: center;
      }
      //表单行
      .input-row {
        margin-bottom: 20px;
        //验证码
        .captcha {
          width: 50px;
        }
        //按钮
        .submit {
          width: 100%;
        }
      }
    }
  }
</style>
