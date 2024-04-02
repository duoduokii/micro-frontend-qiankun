<template>
    <div class="login">
        <a-form :model="formState" layout="vertical" hideRequiredMark name="basic" :label-col="{ span: 8 }"
            :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username" size="large" />
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password" size="large" />
            </a-form-item>

            <!-- <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item> -->

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" size="large">Login</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

interface FormState {
    username: string;
    password: string;
    remember: boolean;
}

const router = useRouter()

const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
});
const onFinish = (values: any) => {
    console.log('Success:', values);
    router.push({ path: '/' })
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>

<style scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, rgba(147, 26, 222, 0.83) 0%, rgba(28, 206, 234, 0.82) 100%);
}
</style>