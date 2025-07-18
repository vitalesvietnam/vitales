<template>
    <div class="site_header__header_three_wrap">
        <div class="topbar-three">
            <div class="container-box">
                <div class="topbar_three_content clearfix">
                    <div class="logo-box-three float-left">
                        <NuxtLink to="/index3" class="main-nag__logo">
                            <img :src="logoImg" alt="Company Logo" />
                        </NuxtLink>
                    </div>

                    <div class="topbar_three_nav_box float-left">
                        <nav
                            :class="`header-navigation stricky clearfix ${sticky ? 'stricked-menu stricky-fixed' : ''}`">
                            <div class="container">
                                <div class="main_nav_header_three_content clearfix">
                                    <div class="mobile_menu_icon_three">
                                        <a href="#" class="side-menu__toggler"
                                            @click.prevent="mobileToggle = !mobileToggle">
                                            <i class="fa fa-bars"></i>
                                        </a>
                                    </div>
                                    <div class="main-nav__main-navigation three float-left">
                                        <ul class="main-nav__navigation-box">
                                            <li v-for="(navItem, index) in navItems" :key="index"
                                                :class="['dropdown', { current: $route.path === navItem.to }]">
                                                <NuxtLink v-if="navItem.to" :to="navItem.to">{{ navItem.label }}
                                                </NuxtLink>
                                                <a v-else href="#">{{ navItem.label }}</a>
                                                <ul v-if="navItem.children">
                                                    <li v-for="(child, childIndex) in navItem.children"
                                                        :key="childIndex">
                                                        <NuxtLink :to="child.to">{{ child.label }}</NuxtLink>
                                                        <ul v-if="child.children">
                                                            <li v-for="(grandchild, grandIndex) in child.children"
                                                                :key="grandIndex">
                                                                <NuxtLink :to="grandchild.to">{{ grandchild.label }}
                                                                </NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="main_nav_right_three float-right">
                                        <div class="icon_search_box">
                                            <a href="#" class="main-nav__search search-popup__toggler"
                                                @click.prevent="changeMobileSearchStatus">
                                                <i class="icon-magnifying-glass"></i>
                                            </a>
                                        </div>
                                        <div class="icon_cart_box">
                                            <NuxtLink to="/cart">
                                                <span class="icon-shopping-cart"></span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div class="topbar_three_right_box">
                        <div class="topbar-one__social home-four">
                            <a v-for="(social, index) in socialLinks" :key="index" :href="social.url">
                                <i :class="social.icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="mobile-nav__container" :style="`display: ${mobileToggle ? 'block' : 'none'}`">
            <ul class="main-nav__navigation-box">
                <li v-for="(navItem, index) in navItems" :key="index" class="dropdown">
                    <div class="menu-holder">
                        {{ navItem.label }}
                        <button v-if="navItem.children" class="dropdown-btn" @click="toggleMobileSubmenu(index)">
                            <i class="fa fa-angle-right"></i>
                        </button>
                    </div>
                    <ul v-if="navItem.children" :style="`display: ${activeMobileSubmenu === index ? 'block' : 'none'}`">
                        <li v-for="(child, childIndex) in navItem.children" :key="childIndex">
                            <div v-if="child.children" class="menu-holder">
                                {{ child.label }}
                                <button class="dropdown-btn" @click="toggleMobileSubSubmenu(childIndex)">
                                    <i class="fa fa-angle-right"></i>
                                </button>
                            </div>
                            <NuxtLink v-else :to="child.to">{{ child.label }}</NuxtLink>
                            <ul v-if="child.children"
                                :style="`display: ${activeMobileSubSubmenu === childIndex ? 'block' : 'none'}`">
                                <li v-for="(grandchild, grandIndex) in child.children" :key="grandIndex">
                                    <NuxtLink :to="grandchild.to">{{ grandchild.label }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from "~/stores/store";
const store = useMainStore();
const changeMobileSearchStatus = () => {
    store.toggle();
};
// Import logo image
import logoImg from '@/assets/images/Vitales_photos/Vitales_logo.png'

// State
const sticky = ref(false)
const mobileToggle = ref(false)
const activeMobileSubmenu = ref(null)
const activeMobileSubSubmenu = ref(null)
const route = useRoute()

// Navigation data
const navItems = ref([
    {
        label: 'Home',
        to: '/index2',
        children: null
    },
    {
        label: 'Distributeur',
        to: '/projects',
        children: null
    },
    {
                label: 'Winkel',
        to: '/product',
        children: null
      },
      {
        label: 'Over Ons',
        to: '/about',
        children: null
      },
      {
        label: 'Nieuws',
        to: '/news',
        children: null
    },
    {
        label: 'Contact',
        to: '/contact',
        children: null // No dropdown for contact
    }
]);
// Social links
const socialLinks = ref([
    { icon: 'fab fa-facebook-square', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-dribbble', url: '#' }
])

// Methods
const handleScroll = () => {
    sticky.value = window.scrollY > 70
}

const toggleSearch = () => {
    // Implement your search toggle logic here
}

const toggleMobileSubmenu = (index) => {
    activeMobileSubmenu.value = activeMobileSubmenu.value === index ? null : index
    activeMobileSubSubmenu.value = null
}

const toggleMobileSubSubmenu = (index) => {
    activeMobileSubSubmenu.value = activeMobileSubSubmenu.value === index ? null : index
}

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>