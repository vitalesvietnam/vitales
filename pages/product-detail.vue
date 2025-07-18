<template>
    <div>
        <section class="product_detail">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="product_detail_image">
                            <img :src="currentProduct.image" :alt="currentProduct.name">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="product_detail_content">
                            <h2>{{ currentProduct.name }}</h2>
                            <div class="product_detail_review_box">
                                <div class="product_detail_price_box">
                                    <p>{{ currentProduct.subtitle }}</p>
                                </div>
                                <div class="product_detail_review">
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <a href="#"><i class="fa fa-star"></i></a>
                                    <span>{{ currentProduct.rating }}</span>
                                </div>
                            </div>
                            <div class="product_detail_text">
                                <p>{{ currentProduct.description }}</p>
                            </div>
                            <ul class="list-unstyled product_detail_address">
                                <li>{{ currentProduct.ref }}</li>
                                <li>{{ currentProduct.availability }}</li>
                            </ul>
                            <div class="product-quantity-box">
                                <div class="input-box">
                                    <input class="quantity-spinner" type="number" value="1" name="quantity" disabled>
                                </div>
                                <div class="addto-cart-box">
                                    <a href="/contact" class="thm-btn">Contact Opnemen</a>
                                </div>
                                <div class="wishlist_btn">
                                    <a href="/distributeur" class="thm-btn">Distributeur Worden</a>
                                </div>
                            </div>
                            <ul class="list-unstyled category_tag_list">
                                <li>Categorie: {{ currentProduct.category }}</li>
                                <li>Tags: {{ currentProduct.tags }}</li>
                            </ul>
                            <div class="product_detail_share_box">
                                <div class="share_box_title">
                                    <h2>Deel met vrienden</h2>
                                </div>
                                <div class="share_box_social">
                                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductTab />
            </div>
        </section>
        <SimilarProducts />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Import images
import img1 from '@/assets/images/shop/shop_product_1.jpg'
import img2 from '@/assets/images/shop/shop_product_2.jpg'
import img3 from '@/assets/images/shop/shop_product_3.jpg'
import img4 from '@/assets/images/shop/shop_product_4.jpg'

const route = useRoute()

// Products data
const products = {
    'natural-nano-mix': {
        name: 'Plant Vitales Natural Nano Mix',
        subtitle: 'Geavanceerde Natuurlijke Nano-Elementenmix',
        description: 'Plant Vitales Natural Nano Mix bevat meer dan 80 natuurlijke mineralen en sporenelementen in nanovorm, samengesteld volgens de minerale samenstelling van vulkanisch gesteente. Door de nanoformulering zijn deze elementen direct bio-beschikbaar, stimuleren ze plantmetabolisme op moleculair niveau en verbeteren ze de suikerrijkdom (Brix) en voedingswaarde van fruit en groenten.',
        image: img1,
        rating: 'Hoogwaardige Biostimulant',
        ref: 'REF. VIT-NNM-001',
        availability: 'Beschikbaar voor distributeurs',
        category: 'Nano-Mix Producten',
        tags: 'Nano-mineralen, Biostimulant, Plantvoeding'
    },
    'sioh4': {
        name: 'Plant Vitales SioH4 (Orthosiliciumzuur)',
        subtitle: 'Hoogwaardige Orthosiliciumzuur Oplossing',
        description: 'Plant Vitales SioH4 is een geavanceerde orthosiliciumzuur oplossing die planten versterkt door silicium op te nemen in celwanden. Dit verhoogt de weerstand tegen ziekten, droogte en hitte, terwijl het de opbrengst en kwaliteit van gewassen verbetert.',
        image: img2,
        rating: 'Premium Silicium Oplossing',
        ref: 'REF. VIT-SIOH4-002',
        availability: 'Beschikbaar voor distributeurs',
        category: 'Orthosiliciumzuur Producten',
        tags: 'Silicium, Plantversterking, Weerstand'
    },
    'aunps': {
        name: 'Plant Vitales AuNPs (Nano-Goud)',
        subtitle: 'Geavanceerde Nano-Goud Biostimulant',
        description: 'Plant Vitales AuNPs gebruikt nano-goud technologie om planten te stimuleren op moleculair niveau. Deze innovatieve formulering verbetert de fotosynthese, verhoogt de opbrengst en versterkt de natuurlijke afweer van planten.',
        image: img3,
        rating: 'Innovatieve Nano-Goud Technologie',
        ref: 'REF. VIT-AUNPS-003',
        availability: 'Beschikbaar voor distributeurs',
        category: 'Nano-Goud Producten',
        tags: 'Nano-goud, Fotosynthese, Plantstimulatie'
    },
    'ptnps': {
        name: 'Plant Vitales PtNPs (Nano-Platina)',
        subtitle: 'Geavanceerde Nano-Platina Biostimulant',
        description: 'Plant Vitales PtNPs combineert nano-platina technologie met biostimulant eigenschappen om planten te versterken. Deze formulering verbetert de wortelontwikkeling, verhoogt de voedingsopname en versterkt de plantgezondheid.',
        image: img4,
        rating: 'Premium Nano-Platina Formulering',
        ref: 'REF. VIT-PTNPS-004',
        availability: 'Beschikbaar voor distributeurs',
        category: 'Nano-Platina Producten',
        tags: 'Nano-platina, Wortelontwikkeling, Plantgezondheid'
    }
}

// Get current product based on query parameter
const currentProduct = computed(() => {
    const productId = route.query.product || 'natural-nano-mix'
    return products[productId] || products['natural-nano-mix']
})
</script>

<style lang="scss" scoped></style>