<template>
    <a-layout has-sider>
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
            <div class="logo"></div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item v-for="item in menuList" :key="item.key" @click="onClick(item)">
                    <component :is="item.icon" />
                    <span class="nav-text">{{ item.label }}</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
            <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                <div id="container" :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
                </div>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { UserOutlined, VideoCameraOutlined, } from '@ant-design/icons-vue';

interface MenuItem {
    key: string;
    icon: any;
    label: string;
    path: string;
}
const selectedKeys = ref<string[]>(['4']);
const menuList: Array<MenuItem> = [
    {
        key: '1',
        icon: UserOutlined,
        label: 'MicroVue3',
        path: 'micro-vue3'
    },
    {
        key: '2',
        icon: VideoCameraOutlined,
        label: 'MicroReact',
        path: 'micro-react'
    }
]

const onClick = (item: MenuItem) => {
    window.location.href = item.path
}


</script>
<style scoped>
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>