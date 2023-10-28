<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">全栈后台管理系统-注册</span>
            </div>

            <el-form ref="registerFormRef" :model="registerFormData" :rules="rules" label-width="120px" status-icon>
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerFormData.userName" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerFormData.email" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerFormData.password" type="password" show-password />
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input v-model="registerFormData.chackPass" type="password" show-password />
                </el-form-item>
                <el-form-item label="选择身份" prop="identity">
                    <el-select v-model="registerFormData.identity" class="m-2" placeholder="Select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="register(registerFormRef)">
                        注册
                    </el-button>
                    <el-button @click="resetForm(registerFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const registerFormRef = ref()

const options = [{
    value: 'manager',
    label: '管理员'
}, {
    value: 'employee',
    label: '职工'
}]

const registerFormData = reactive({
    userName: '',
    email: '',
    password: '',
    checkPass:'',
    identity: 'employee'
})


let validateEmail = (rule, value, callback) => {
    const emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    const emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if ((!emailRegExp.test(value) && value != '') || (!emailRegExp1.test(value) && value != '')) {
        callback(new Error('请输入有效邮箱格式！'));
    } else {
        callback();
    }
}

let validateCheckPass = (rule, value, callback) => {
    if(value==''){
        callback('请确认密码！')
    }else if(value!=registerFormData.password){
        callback('两次输入的密码不一致！')
    }else{
        callback()
    }
 }

 const rules = reactive({
    name: [{
        required: true,
        message: '用户名不能为空！'
    }],
    password: [{
        required: true,
        message: '密码不能为空！'
    }],
    checkPass:[{
        required:true,
        validator:validateCheckPass
    }],
    email:[{
        required:true,
        validator:validateEmail
    }]
})


function register() {

}

function resetForm() {
    registerFormRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.register {
    position: relative;
    background: url(@/assets/images/background2.png) no-repeat center center;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;

    .form_container {
        width: 370px;
        height: 210px;
        position: absolute;

        padding: 25px;
        border-radius: 5px;
        text-align: center;
        left: 40.2%;
        top: 25%;
        opacity: 0.8;

        .manage_tip {
            .title {
                font-family: "Microsoft YaHei";
                font-weight: bold;
                font-size: 26px;
                color: #fff;
            }
        }

        // 表格部分
        .el-form {
            margin-top: 20px;
            padding: 20px 35px 20px 4px;
            border-radius: 5px;
            box-shadow: 0px 5px 10px #cccc;
            background-color: rgb(94, 90, 90);

            :deep(.el-form-item__label) {
                color: #fff;
                padding-top: 5px;
            }

            :deep(.el-input__wrapper) {
                background-color: rgb(94, 90, 90);

                .el-input__inner {
                    color: #fff;
                    padding: 20px 0;
                }
            }

            .el-button {
                width: 100%;
            }
        }
    }
}
</style>