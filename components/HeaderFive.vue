<template>
    <div class="site_header__header_five_wrap">
        <div class="topbar-three topbar-five">
            <div class="container-box">
                <div class="topbar_three_content clearfix">
                    <div class="logo-box-three logo-box-five float-left">
                        <NuxtLink to="/" class="main-nag__logo">
                            <img :src="logoImg" class="main-logo" alt="Awesome Image" />

                        </NuxtLink>
                    </div>
                    <div class="topbar_three_nav_box float-left">
                        <nav
                            :class="`header-navigation stricky clearfix ${sticky ? 'stricked-menu stricky-fixed' : ''}`">
                            <div class="container">
                                <div class="main_nav_header_three_content five clearfix">
                                    <div class="mobile_menu_icon_three five">
                                        <a href="#" class="side-menu__toggler">
                                            <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                                        </a>
                                    </div>
                                    <div class="main-nav__main-navigation five float-left">
                                        <ul class="main-nav__navigation-box">
                                            <li v-for="(navItem, index) in navItems" :key="index"
                                                :class="['dropdown', { current: navItem.current }]">
                                                <NuxtLink v-if="!navItem.children" :to="navItem.to">{{ navItem.text }}
                                                </NuxtLink>
                                                <template v-else>
                                                    <NuxtLink v-if="navItem.to" :to="navItem.to">{{ navItem.text }}
                                                    </NuxtLink>
                                                    <a v-else>{{ navItem.text }}</a>
                                                    <ul>
                                                        <li v-for="(subItem, subIndex) in navItem.children"
                                                            :key="subIndex" :class="{ dropdown: subItem.children }">
                                                            <template v-if="!subItem.children">
                                                                <NuxtLink :to="subItem.to">{{ subItem.text }}</NuxtLink>
                                                            </template>
                                                            <template v-else>
                                                                <div class="menu-holder">{{ subItem.text }}<button
                                                                        class="dropdown-btn"><i
                                                                            class="fa fa-angle-right"></i></button>
                                                                </div>
                                                                <ul>
                                                                    <li v-for="(subSubItem, subSubIndex) in subItem.children"
                                                                        :key="subSubIndex">
                                                                        <NuxtLink :to="subSubItem.to">{{ subSubItem.text
                                                                        }}</NuxtLink>
                                                                    </li>
                                                                </ul>
                                                            </template>
                                                        </li>
                                                    </ul>
                                                </template>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="topbar_three_right_box five">
                        <div class="topbar-one__social">
                            <a v-for="(social, socialIndex) in socialLinks" :key="socialIndex" :href="social.url">
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="mobile-nav__container" :style="`display: ${mobileToggle ? 'block' : 'none'}`">
            <ul class="main-nav__navigation-box">
                <li v-for="(navItem, index) in navItems" :key="index"
                    :class="['dropdown', { current: navItem.current }]">
                    <template v-if="!navItem.children">
                        <NuxtLink :to="navItem.to">{{ navItem.text }}</NuxtLink>
                    </template>
                    <template v-else>
                        <div class="menu-holder">{{ navItem.text }}<button class="dropdown-btn"><i
                                    class="fa fa-angle-right"></i></button></div>
                        <ul>
                            <li v-for="(subItem, subIndex) in navItem.children" :key="subIndex"
                                :class="{ dropdown: subItem.children }">
                                <template v-if="!subItem.children">
                                    <NuxtLink :to="subItem.to">{{ subItem.text }}</NuxtLink>
                                </template>
                                <template v-else>
                                    <div class="menu-holder">{{ subItem.text }}<button class="dropdown-btn"><i
                                                class="fa fa-angle-right"></i></button></div>
                                    <ul>
                                        <li v-for="(subSubItem, subSubIndex) in subItem.children" :key="subSubIndex">
                                            <NuxtLink :to="subSubItem.to">{{ subSubItem.text }}</NuxtLink>
                                        </li>
                                    </ul>
                                </template>
                            </li>
                        </ul>
                    </template>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import logoImg from '@/assets/images/Vitales_photos/Vitales_logo.png';

const sticky = ref(false);
const mobileToggle = ref(false);

const socialLinks = ref([
    { url: '#', icon: 'fab fa-facebook-square' },
    { url: '#', icon: 'fab fa-twitter' },
    { url: '#', icon: 'fab fa-instagram' },
    { url: '#', icon: 'fab fa-dribbble' }
]);

const navItems = ref([
    {
        text: 'Home',
        to: '/index2',
        current: true,
        children: null
    },
    {
        text: 'Distributeur',
        to: '/projects',
        children: null
    },
    {
        text: 'Winkel',
        to: '/product',
        children: null
    },
    {
        text: 'Over Ons',
        to: '/about',
        children: null
    },
    {
        text: 'Nieuws',
        to: '/news',
        children: null
    },
    {
        text: 'Contact',
        to: '/contact'
    }
]);

const handleScroll = () => {
    sticky.value = window.scrollY > 70;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add your styles here */
.dropdown-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 5px;
}

.menu-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Add any other necessary styles */
</style>