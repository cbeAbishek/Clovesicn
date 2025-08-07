'use client';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ClovesAdModal from '@/components/sections/popup';
import HeroBanner from '@/components/sections/HeroBanner';
import HeroBanner2 from '@/components/sections/HeroBanner2';
import HeroBanner3 from '@/components/sections/HeroBanner3';
import HeroBanner4 from '@/components/sections/HeroBanner4';
import Script from 'next/script';


export default function Home() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103632210', 'ym');
            ym(103632210, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/103632210"
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEWNHMN7TP"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MEWNHMN7TP');
        `}
      </script>
      {/* <ClovesAdModal /> */}
      <HeroBanner3 />
      <HeroBanner2 />
      {/* <HeroBanner /> */}
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}