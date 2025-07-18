
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AboutOne': typeof import("../components/AboutOne.vue")['default']
    'AboutTwo': typeof import("../components/AboutTwo.vue")['default']
    'AchievedOne': typeof import("../components/AchievedOne.vue")['default']
    'Benefits': typeof import("../components/Benefits.vue")['default']
    'BestCompany': typeof import("../components/BestCompany.vue")['default']
    'BlogFour': typeof import("../components/BlogFour.vue")['default']
    'BlogOne': typeof import("../components/BlogOne.vue")['default']
    'BlogPage': typeof import("../components/BlogPage.vue")['default']
    'BlogSingle': typeof import("../components/BlogSingle.vue")['default']
    'BlogTwo': typeof import("../components/BlogTwo.vue")['default']
    'BrandFour': typeof import("../components/BrandFour.vue")['default']
    'BrandOne': typeof import("../components/BrandOne.vue")['default']
    'BrandThree': typeof import("../components/BrandThree.vue")['default']
    'BrandTwo': typeof import("../components/BrandTwo.vue")['default']
    'CallToActionOne': typeof import("../components/CallToActionOne.vue")['default']
    'CallToActionThree': typeof import("../components/CallToActionThree.vue")['default']
    'CallToActionTwo': typeof import("../components/CallToActionTwo.vue")['default']
    'Cart': typeof import("../components/Cart.vue")['default']
    'Checkout': typeof import("../components/Checkout.vue")['default']
    'ContactOne': typeof import("../components/ContactOne.vue")['default']
    'ContactTwo': typeof import("../components/ContactTwo.vue")['default']
    'DetailsOne': typeof import("../components/DetailsOne.vue")['default']
    'DistributeurForm': typeof import("../components/DistributeurForm.vue")['default']
    'EcoFriendly': typeof import("../components/EcoFriendly.vue")['default']
    'FaqOne': typeof import("../components/FaqOne.vue")['default']
    'Farmers': typeof import("../components/Farmers.vue")['default']
    'FeaturedOne': typeof import("../components/FeaturedOne.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'FooterTwo': typeof import("../components/FooterTwo.vue")['default']
    'FunfactOne': typeof import("../components/FunfactOne.vue")['default']
    'GMap': typeof import("../components/GMap.vue")['default']
    'Gallery': typeof import("../components/Gallery.vue")['default']
    'GalleryOne': typeof import("../components/GalleryOne.vue")['default']
    'GetQuote': typeof import("../components/GetQuote.vue")['default']
    'HeaderFive': typeof import("../components/HeaderFive.vue")['default']
    'HeaderFour': typeof import("../components/HeaderFour.vue")['default']
    'HeaderOne': typeof import("../components/HeaderOne.vue")['default']
    'HeaderThree': typeof import("../components/HeaderThree.vue")['default']
    'HeaderTwo': typeof import("../components/HeaderTwo.vue")['default']
    'HealthyFood': typeof import("../components/HealthyFood.vue")['default']
    'Location': typeof import("../components/Location.vue")['default']
    'NeedAll': typeof import("../components/NeedAll.vue")['default']
    'PageHeader': typeof import("../components/PageHeader.vue")['default']
    'ProductDetail': typeof import("../components/ProductDetail.vue")['default']
    'ProductOne': typeof import("../components/ProductOne.vue")['default']
    'ProductTab': typeof import("../components/ProductTab.vue")['default']
    'ProductTabAuNPs': typeof import("../components/ProductTabAuNPs.vue")['default']
    'ProductTabNaturalNanoMix': typeof import("../components/ProductTabNaturalNanoMix.vue")['default']
    'ProductTabPtNPs': typeof import("../components/ProductTabPtNPs.vue")['default']
    'ProductTabSioH4': typeof import("../components/ProductTabSioH4.vue")['default']
    'ProductTwo': typeof import("../components/ProductTwo.vue")['default']
    'Products': typeof import("../components/Products.vue")['default']
    'ProjectDetail': typeof import("../components/ProjectDetail.vue")['default']
    'ProjectPage': typeof import("../components/ProjectPage.vue")['default']
    'QuoteOne': typeof import("../components/QuoteOne.vue")['default']
    'RecentProject': typeof import("../components/RecentProject.vue")['default']
    'RecentProjectThree': typeof import("../components/RecentProjectThree.vue")['default']
    'SearchPopup': typeof import("../components/SearchPopup.vue")['default']
    'ServiceDetail': typeof import("../components/ServiceDetail.vue")['default']
    'ServiceFour': typeof import("../components/ServiceFour.vue")['default']
    'ServiceOne': typeof import("../components/ServiceOne.vue")['default']
    'ServicePage': typeof import("../components/ServicePage.vue")['default']
    'ServiceThree': typeof import("../components/ServiceThree.vue")['default']
    'ServiceTwo': typeof import("../components/ServiceTwo.vue")['default']
    'SimilarProducts': typeof import("../components/SimilarProducts.vue")['default']
    'Slider': typeof import("../components/Slider.vue")['default']
    'SliderFive': typeof import("../components/SliderFive.vue")['default']
    'SliderFour': typeof import("../components/SliderFour.vue")['default']
    'SliderThree': typeof import("../components/SliderThree.vue")['default']
    'SliderTwo': typeof import("../components/SliderTwo.vue")['default']
    'TeamOne': typeof import("../components/TeamOne.vue")['default']
    'TestimonialFour': typeof import("../components/TestimonialFour.vue")['default']
    'TestimonialOne': typeof import("../components/TestimonialOne.vue")['default']
    'TestimonialThree': typeof import("../components/TestimonialThree.vue")['default']
    'TestimonialTwo': typeof import("../components/TestimonialTwo.vue")['default']
    'TrustedOne': typeof import("../components/TrustedOne.vue")['default']
    'TwoBoxes': typeof import("../components/TwoBoxes.vue")['default']
    'VideoOne': typeof import("../components/VideoOne.vue")['default']
    'WelcomeOne': typeof import("../components/WelcomeOne.vue")['default']
    'WelcomeTwo': typeof import("../components/WelcomeTwo.vue")['default']
    'WhatMakes': typeof import("../components/WhatMakes.vue")['default']
    'WhyChooseOne': typeof import("../components/WhyChooseOne.vue")['default']
    'WorkOne': typeof import("../components/WorkOne.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAboutOne': LazyComponent<typeof import("../components/AboutOne.vue")['default']>
    'LazyAboutTwo': LazyComponent<typeof import("../components/AboutTwo.vue")['default']>
    'LazyAchievedOne': LazyComponent<typeof import("../components/AchievedOne.vue")['default']>
    'LazyBenefits': LazyComponent<typeof import("../components/Benefits.vue")['default']>
    'LazyBestCompany': LazyComponent<typeof import("../components/BestCompany.vue")['default']>
    'LazyBlogFour': LazyComponent<typeof import("../components/BlogFour.vue")['default']>
    'LazyBlogOne': LazyComponent<typeof import("../components/BlogOne.vue")['default']>
    'LazyBlogPage': LazyComponent<typeof import("../components/BlogPage.vue")['default']>
    'LazyBlogSingle': LazyComponent<typeof import("../components/BlogSingle.vue")['default']>
    'LazyBlogTwo': LazyComponent<typeof import("../components/BlogTwo.vue")['default']>
    'LazyBrandFour': LazyComponent<typeof import("../components/BrandFour.vue")['default']>
    'LazyBrandOne': LazyComponent<typeof import("../components/BrandOne.vue")['default']>
    'LazyBrandThree': LazyComponent<typeof import("../components/BrandThree.vue")['default']>
    'LazyBrandTwo': LazyComponent<typeof import("../components/BrandTwo.vue")['default']>
    'LazyCallToActionOne': LazyComponent<typeof import("../components/CallToActionOne.vue")['default']>
    'LazyCallToActionThree': LazyComponent<typeof import("../components/CallToActionThree.vue")['default']>
    'LazyCallToActionTwo': LazyComponent<typeof import("../components/CallToActionTwo.vue")['default']>
    'LazyCart': LazyComponent<typeof import("../components/Cart.vue")['default']>
    'LazyCheckout': LazyComponent<typeof import("../components/Checkout.vue")['default']>
    'LazyContactOne': LazyComponent<typeof import("../components/ContactOne.vue")['default']>
    'LazyContactTwo': LazyComponent<typeof import("../components/ContactTwo.vue")['default']>
    'LazyDetailsOne': LazyComponent<typeof import("../components/DetailsOne.vue")['default']>
    'LazyDistributeurForm': LazyComponent<typeof import("../components/DistributeurForm.vue")['default']>
    'LazyEcoFriendly': LazyComponent<typeof import("../components/EcoFriendly.vue")['default']>
    'LazyFaqOne': LazyComponent<typeof import("../components/FaqOne.vue")['default']>
    'LazyFarmers': LazyComponent<typeof import("../components/Farmers.vue")['default']>
    'LazyFeaturedOne': LazyComponent<typeof import("../components/FeaturedOne.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyFooterTwo': LazyComponent<typeof import("../components/FooterTwo.vue")['default']>
    'LazyFunfactOne': LazyComponent<typeof import("../components/FunfactOne.vue")['default']>
    'LazyGMap': LazyComponent<typeof import("../components/GMap.vue")['default']>
    'LazyGallery': LazyComponent<typeof import("../components/Gallery.vue")['default']>
    'LazyGalleryOne': LazyComponent<typeof import("../components/GalleryOne.vue")['default']>
    'LazyGetQuote': LazyComponent<typeof import("../components/GetQuote.vue")['default']>
    'LazyHeaderFive': LazyComponent<typeof import("../components/HeaderFive.vue")['default']>
    'LazyHeaderFour': LazyComponent<typeof import("../components/HeaderFour.vue")['default']>
    'LazyHeaderOne': LazyComponent<typeof import("../components/HeaderOne.vue")['default']>
    'LazyHeaderThree': LazyComponent<typeof import("../components/HeaderThree.vue")['default']>
    'LazyHeaderTwo': LazyComponent<typeof import("../components/HeaderTwo.vue")['default']>
    'LazyHealthyFood': LazyComponent<typeof import("../components/HealthyFood.vue")['default']>
    'LazyLocation': LazyComponent<typeof import("../components/Location.vue")['default']>
    'LazyNeedAll': LazyComponent<typeof import("../components/NeedAll.vue")['default']>
    'LazyPageHeader': LazyComponent<typeof import("../components/PageHeader.vue")['default']>
    'LazyProductDetail': LazyComponent<typeof import("../components/ProductDetail.vue")['default']>
    'LazyProductOne': LazyComponent<typeof import("../components/ProductOne.vue")['default']>
    'LazyProductTab': LazyComponent<typeof import("../components/ProductTab.vue")['default']>
    'LazyProductTabAuNPs': LazyComponent<typeof import("../components/ProductTabAuNPs.vue")['default']>
    'LazyProductTabNaturalNanoMix': LazyComponent<typeof import("../components/ProductTabNaturalNanoMix.vue")['default']>
    'LazyProductTabPtNPs': LazyComponent<typeof import("../components/ProductTabPtNPs.vue")['default']>
    'LazyProductTabSioH4': LazyComponent<typeof import("../components/ProductTabSioH4.vue")['default']>
    'LazyProductTwo': LazyComponent<typeof import("../components/ProductTwo.vue")['default']>
    'LazyProducts': LazyComponent<typeof import("../components/Products.vue")['default']>
    'LazyProjectDetail': LazyComponent<typeof import("../components/ProjectDetail.vue")['default']>
    'LazyProjectPage': LazyComponent<typeof import("../components/ProjectPage.vue")['default']>
    'LazyQuoteOne': LazyComponent<typeof import("../components/QuoteOne.vue")['default']>
    'LazyRecentProject': LazyComponent<typeof import("../components/RecentProject.vue")['default']>
    'LazyRecentProjectThree': LazyComponent<typeof import("../components/RecentProjectThree.vue")['default']>
    'LazySearchPopup': LazyComponent<typeof import("../components/SearchPopup.vue")['default']>
    'LazyServiceDetail': LazyComponent<typeof import("../components/ServiceDetail.vue")['default']>
    'LazyServiceFour': LazyComponent<typeof import("../components/ServiceFour.vue")['default']>
    'LazyServiceOne': LazyComponent<typeof import("../components/ServiceOne.vue")['default']>
    'LazyServicePage': LazyComponent<typeof import("../components/ServicePage.vue")['default']>
    'LazyServiceThree': LazyComponent<typeof import("../components/ServiceThree.vue")['default']>
    'LazyServiceTwo': LazyComponent<typeof import("../components/ServiceTwo.vue")['default']>
    'LazySimilarProducts': LazyComponent<typeof import("../components/SimilarProducts.vue")['default']>
    'LazySlider': LazyComponent<typeof import("../components/Slider.vue")['default']>
    'LazySliderFive': LazyComponent<typeof import("../components/SliderFive.vue")['default']>
    'LazySliderFour': LazyComponent<typeof import("../components/SliderFour.vue")['default']>
    'LazySliderThree': LazyComponent<typeof import("../components/SliderThree.vue")['default']>
    'LazySliderTwo': LazyComponent<typeof import("../components/SliderTwo.vue")['default']>
    'LazyTeamOne': LazyComponent<typeof import("../components/TeamOne.vue")['default']>
    'LazyTestimonialFour': LazyComponent<typeof import("../components/TestimonialFour.vue")['default']>
    'LazyTestimonialOne': LazyComponent<typeof import("../components/TestimonialOne.vue")['default']>
    'LazyTestimonialThree': LazyComponent<typeof import("../components/TestimonialThree.vue")['default']>
    'LazyTestimonialTwo': LazyComponent<typeof import("../components/TestimonialTwo.vue")['default']>
    'LazyTrustedOne': LazyComponent<typeof import("../components/TrustedOne.vue")['default']>
    'LazyTwoBoxes': LazyComponent<typeof import("../components/TwoBoxes.vue")['default']>
    'LazyVideoOne': LazyComponent<typeof import("../components/VideoOne.vue")['default']>
    'LazyWelcomeOne': LazyComponent<typeof import("../components/WelcomeOne.vue")['default']>
    'LazyWelcomeTwo': LazyComponent<typeof import("../components/WelcomeTwo.vue")['default']>
    'LazyWhatMakes': LazyComponent<typeof import("../components/WhatMakes.vue")['default']>
    'LazyWhyChooseOne': LazyComponent<typeof import("../components/WhyChooseOne.vue")['default']>
    'LazyWorkOne': LazyComponent<typeof import("../components/WorkOne.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AboutOne: typeof import("../components/AboutOne.vue")['default']
export const AboutTwo: typeof import("../components/AboutTwo.vue")['default']
export const AchievedOne: typeof import("../components/AchievedOne.vue")['default']
export const Benefits: typeof import("../components/Benefits.vue")['default']
export const BestCompany: typeof import("../components/BestCompany.vue")['default']
export const BlogFour: typeof import("../components/BlogFour.vue")['default']
export const BlogOne: typeof import("../components/BlogOne.vue")['default']
export const BlogPage: typeof import("../components/BlogPage.vue")['default']
export const BlogSingle: typeof import("../components/BlogSingle.vue")['default']
export const BlogTwo: typeof import("../components/BlogTwo.vue")['default']
export const BrandFour: typeof import("../components/BrandFour.vue")['default']
export const BrandOne: typeof import("../components/BrandOne.vue")['default']
export const BrandThree: typeof import("../components/BrandThree.vue")['default']
export const BrandTwo: typeof import("../components/BrandTwo.vue")['default']
export const CallToActionOne: typeof import("../components/CallToActionOne.vue")['default']
export const CallToActionThree: typeof import("../components/CallToActionThree.vue")['default']
export const CallToActionTwo: typeof import("../components/CallToActionTwo.vue")['default']
export const Cart: typeof import("../components/Cart.vue")['default']
export const Checkout: typeof import("../components/Checkout.vue")['default']
export const ContactOne: typeof import("../components/ContactOne.vue")['default']
export const ContactTwo: typeof import("../components/ContactTwo.vue")['default']
export const DetailsOne: typeof import("../components/DetailsOne.vue")['default']
export const DistributeurForm: typeof import("../components/DistributeurForm.vue")['default']
export const EcoFriendly: typeof import("../components/EcoFriendly.vue")['default']
export const FaqOne: typeof import("../components/FaqOne.vue")['default']
export const Farmers: typeof import("../components/Farmers.vue")['default']
export const FeaturedOne: typeof import("../components/FeaturedOne.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const FooterTwo: typeof import("../components/FooterTwo.vue")['default']
export const FunfactOne: typeof import("../components/FunfactOne.vue")['default']
export const GMap: typeof import("../components/GMap.vue")['default']
export const Gallery: typeof import("../components/Gallery.vue")['default']
export const GalleryOne: typeof import("../components/GalleryOne.vue")['default']
export const GetQuote: typeof import("../components/GetQuote.vue")['default']
export const HeaderFive: typeof import("../components/HeaderFive.vue")['default']
export const HeaderFour: typeof import("../components/HeaderFour.vue")['default']
export const HeaderOne: typeof import("../components/HeaderOne.vue")['default']
export const HeaderThree: typeof import("../components/HeaderThree.vue")['default']
export const HeaderTwo: typeof import("../components/HeaderTwo.vue")['default']
export const HealthyFood: typeof import("../components/HealthyFood.vue")['default']
export const Location: typeof import("../components/Location.vue")['default']
export const NeedAll: typeof import("../components/NeedAll.vue")['default']
export const PageHeader: typeof import("../components/PageHeader.vue")['default']
export const ProductDetail: typeof import("../components/ProductDetail.vue")['default']
export const ProductOne: typeof import("../components/ProductOne.vue")['default']
export const ProductTab: typeof import("../components/ProductTab.vue")['default']
export const ProductTabAuNPs: typeof import("../components/ProductTabAuNPs.vue")['default']
export const ProductTabNaturalNanoMix: typeof import("../components/ProductTabNaturalNanoMix.vue")['default']
export const ProductTabPtNPs: typeof import("../components/ProductTabPtNPs.vue")['default']
export const ProductTabSioH4: typeof import("../components/ProductTabSioH4.vue")['default']
export const ProductTwo: typeof import("../components/ProductTwo.vue")['default']
export const Products: typeof import("../components/Products.vue")['default']
export const ProjectDetail: typeof import("../components/ProjectDetail.vue")['default']
export const ProjectPage: typeof import("../components/ProjectPage.vue")['default']
export const QuoteOne: typeof import("../components/QuoteOne.vue")['default']
export const RecentProject: typeof import("../components/RecentProject.vue")['default']
export const RecentProjectThree: typeof import("../components/RecentProjectThree.vue")['default']
export const SearchPopup: typeof import("../components/SearchPopup.vue")['default']
export const ServiceDetail: typeof import("../components/ServiceDetail.vue")['default']
export const ServiceFour: typeof import("../components/ServiceFour.vue")['default']
export const ServiceOne: typeof import("../components/ServiceOne.vue")['default']
export const ServicePage: typeof import("../components/ServicePage.vue")['default']
export const ServiceThree: typeof import("../components/ServiceThree.vue")['default']
export const ServiceTwo: typeof import("../components/ServiceTwo.vue")['default']
export const SimilarProducts: typeof import("../components/SimilarProducts.vue")['default']
export const Slider: typeof import("../components/Slider.vue")['default']
export const SliderFive: typeof import("../components/SliderFive.vue")['default']
export const SliderFour: typeof import("../components/SliderFour.vue")['default']
export const SliderThree: typeof import("../components/SliderThree.vue")['default']
export const SliderTwo: typeof import("../components/SliderTwo.vue")['default']
export const TeamOne: typeof import("../components/TeamOne.vue")['default']
export const TestimonialFour: typeof import("../components/TestimonialFour.vue")['default']
export const TestimonialOne: typeof import("../components/TestimonialOne.vue")['default']
export const TestimonialThree: typeof import("../components/TestimonialThree.vue")['default']
export const TestimonialTwo: typeof import("../components/TestimonialTwo.vue")['default']
export const TrustedOne: typeof import("../components/TrustedOne.vue")['default']
export const TwoBoxes: typeof import("../components/TwoBoxes.vue")['default']
export const VideoOne: typeof import("../components/VideoOne.vue")['default']
export const WelcomeOne: typeof import("../components/WelcomeOne.vue")['default']
export const WelcomeTwo: typeof import("../components/WelcomeTwo.vue")['default']
export const WhatMakes: typeof import("../components/WhatMakes.vue")['default']
export const WhyChooseOne: typeof import("../components/WhyChooseOne.vue")['default']
export const WorkOne: typeof import("../components/WorkOne.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAboutOne: LazyComponent<typeof import("../components/AboutOne.vue")['default']>
export const LazyAboutTwo: LazyComponent<typeof import("../components/AboutTwo.vue")['default']>
export const LazyAchievedOne: LazyComponent<typeof import("../components/AchievedOne.vue")['default']>
export const LazyBenefits: LazyComponent<typeof import("../components/Benefits.vue")['default']>
export const LazyBestCompany: LazyComponent<typeof import("../components/BestCompany.vue")['default']>
export const LazyBlogFour: LazyComponent<typeof import("../components/BlogFour.vue")['default']>
export const LazyBlogOne: LazyComponent<typeof import("../components/BlogOne.vue")['default']>
export const LazyBlogPage: LazyComponent<typeof import("../components/BlogPage.vue")['default']>
export const LazyBlogSingle: LazyComponent<typeof import("../components/BlogSingle.vue")['default']>
export const LazyBlogTwo: LazyComponent<typeof import("../components/BlogTwo.vue")['default']>
export const LazyBrandFour: LazyComponent<typeof import("../components/BrandFour.vue")['default']>
export const LazyBrandOne: LazyComponent<typeof import("../components/BrandOne.vue")['default']>
export const LazyBrandThree: LazyComponent<typeof import("../components/BrandThree.vue")['default']>
export const LazyBrandTwo: LazyComponent<typeof import("../components/BrandTwo.vue")['default']>
export const LazyCallToActionOne: LazyComponent<typeof import("../components/CallToActionOne.vue")['default']>
export const LazyCallToActionThree: LazyComponent<typeof import("../components/CallToActionThree.vue")['default']>
export const LazyCallToActionTwo: LazyComponent<typeof import("../components/CallToActionTwo.vue")['default']>
export const LazyCart: LazyComponent<typeof import("../components/Cart.vue")['default']>
export const LazyCheckout: LazyComponent<typeof import("../components/Checkout.vue")['default']>
export const LazyContactOne: LazyComponent<typeof import("../components/ContactOne.vue")['default']>
export const LazyContactTwo: LazyComponent<typeof import("../components/ContactTwo.vue")['default']>
export const LazyDetailsOne: LazyComponent<typeof import("../components/DetailsOne.vue")['default']>
export const LazyDistributeurForm: LazyComponent<typeof import("../components/DistributeurForm.vue")['default']>
export const LazyEcoFriendly: LazyComponent<typeof import("../components/EcoFriendly.vue")['default']>
export const LazyFaqOne: LazyComponent<typeof import("../components/FaqOne.vue")['default']>
export const LazyFarmers: LazyComponent<typeof import("../components/Farmers.vue")['default']>
export const LazyFeaturedOne: LazyComponent<typeof import("../components/FeaturedOne.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyFooterTwo: LazyComponent<typeof import("../components/FooterTwo.vue")['default']>
export const LazyFunfactOne: LazyComponent<typeof import("../components/FunfactOne.vue")['default']>
export const LazyGMap: LazyComponent<typeof import("../components/GMap.vue")['default']>
export const LazyGallery: LazyComponent<typeof import("../components/Gallery.vue")['default']>
export const LazyGalleryOne: LazyComponent<typeof import("../components/GalleryOne.vue")['default']>
export const LazyGetQuote: LazyComponent<typeof import("../components/GetQuote.vue")['default']>
export const LazyHeaderFive: LazyComponent<typeof import("../components/HeaderFive.vue")['default']>
export const LazyHeaderFour: LazyComponent<typeof import("../components/HeaderFour.vue")['default']>
export const LazyHeaderOne: LazyComponent<typeof import("../components/HeaderOne.vue")['default']>
export const LazyHeaderThree: LazyComponent<typeof import("../components/HeaderThree.vue")['default']>
export const LazyHeaderTwo: LazyComponent<typeof import("../components/HeaderTwo.vue")['default']>
export const LazyHealthyFood: LazyComponent<typeof import("../components/HealthyFood.vue")['default']>
export const LazyLocation: LazyComponent<typeof import("../components/Location.vue")['default']>
export const LazyNeedAll: LazyComponent<typeof import("../components/NeedAll.vue")['default']>
export const LazyPageHeader: LazyComponent<typeof import("../components/PageHeader.vue")['default']>
export const LazyProductDetail: LazyComponent<typeof import("../components/ProductDetail.vue")['default']>
export const LazyProductOne: LazyComponent<typeof import("../components/ProductOne.vue")['default']>
export const LazyProductTab: LazyComponent<typeof import("../components/ProductTab.vue")['default']>
export const LazyProductTabAuNPs: LazyComponent<typeof import("../components/ProductTabAuNPs.vue")['default']>
export const LazyProductTabNaturalNanoMix: LazyComponent<typeof import("../components/ProductTabNaturalNanoMix.vue")['default']>
export const LazyProductTabPtNPs: LazyComponent<typeof import("../components/ProductTabPtNPs.vue")['default']>
export const LazyProductTabSioH4: LazyComponent<typeof import("../components/ProductTabSioH4.vue")['default']>
export const LazyProductTwo: LazyComponent<typeof import("../components/ProductTwo.vue")['default']>
export const LazyProducts: LazyComponent<typeof import("../components/Products.vue")['default']>
export const LazyProjectDetail: LazyComponent<typeof import("../components/ProjectDetail.vue")['default']>
export const LazyProjectPage: LazyComponent<typeof import("../components/ProjectPage.vue")['default']>
export const LazyQuoteOne: LazyComponent<typeof import("../components/QuoteOne.vue")['default']>
export const LazyRecentProject: LazyComponent<typeof import("../components/RecentProject.vue")['default']>
export const LazyRecentProjectThree: LazyComponent<typeof import("../components/RecentProjectThree.vue")['default']>
export const LazySearchPopup: LazyComponent<typeof import("../components/SearchPopup.vue")['default']>
export const LazyServiceDetail: LazyComponent<typeof import("../components/ServiceDetail.vue")['default']>
export const LazyServiceFour: LazyComponent<typeof import("../components/ServiceFour.vue")['default']>
export const LazyServiceOne: LazyComponent<typeof import("../components/ServiceOne.vue")['default']>
export const LazyServicePage: LazyComponent<typeof import("../components/ServicePage.vue")['default']>
export const LazyServiceThree: LazyComponent<typeof import("../components/ServiceThree.vue")['default']>
export const LazyServiceTwo: LazyComponent<typeof import("../components/ServiceTwo.vue")['default']>
export const LazySimilarProducts: LazyComponent<typeof import("../components/SimilarProducts.vue")['default']>
export const LazySlider: LazyComponent<typeof import("../components/Slider.vue")['default']>
export const LazySliderFive: LazyComponent<typeof import("../components/SliderFive.vue")['default']>
export const LazySliderFour: LazyComponent<typeof import("../components/SliderFour.vue")['default']>
export const LazySliderThree: LazyComponent<typeof import("../components/SliderThree.vue")['default']>
export const LazySliderTwo: LazyComponent<typeof import("../components/SliderTwo.vue")['default']>
export const LazyTeamOne: LazyComponent<typeof import("../components/TeamOne.vue")['default']>
export const LazyTestimonialFour: LazyComponent<typeof import("../components/TestimonialFour.vue")['default']>
export const LazyTestimonialOne: LazyComponent<typeof import("../components/TestimonialOne.vue")['default']>
export const LazyTestimonialThree: LazyComponent<typeof import("../components/TestimonialThree.vue")['default']>
export const LazyTestimonialTwo: LazyComponent<typeof import("../components/TestimonialTwo.vue")['default']>
export const LazyTrustedOne: LazyComponent<typeof import("../components/TrustedOne.vue")['default']>
export const LazyTwoBoxes: LazyComponent<typeof import("../components/TwoBoxes.vue")['default']>
export const LazyVideoOne: LazyComponent<typeof import("../components/VideoOne.vue")['default']>
export const LazyWelcomeOne: LazyComponent<typeof import("../components/WelcomeOne.vue")['default']>
export const LazyWelcomeTwo: LazyComponent<typeof import("../components/WelcomeTwo.vue")['default']>
export const LazyWhatMakes: LazyComponent<typeof import("../components/WhatMakes.vue")['default']>
export const LazyWhyChooseOne: LazyComponent<typeof import("../components/WhyChooseOne.vue")['default']>
export const LazyWorkOne: LazyComponent<typeof import("../components/WorkOne.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
