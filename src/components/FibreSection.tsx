import ItemListGrid from "@/components/itemLists";
import {Products} from "@/interfaces/products.interface";
import styles from '../../styles/Home.module.css'
import {ProductJsonLd} from "next-seo";
import {schemaTypeOffers} from "@/utility/schemaTypeProduct";

export default function FibreSection() {
    const products: Products[] = [
        {
            id: 1,
            name: "โปรเน็ตบ้าน AIS ราคา 399 บาท",
            price: 399.00,
            description: "โปรเน็ตบ้าน Ais Fibre แรงเต็มสปีด 500/500 Mbps รับฟรีกล่อง AIS Playbox ซิมมือเน็ตมือถือ 5 GB นอกจากนี้ยังได้รับ Play Family 24 เดือน และ Viu 12 เดือน ฟรี",
            image: '/fibre/399.png',
            type: 'fibre'
        },
        {
            id: 2,
            name: "โปรเน็ตบ้าน AIS ราคา 499 บาท",
            price: 499.00,
            description: "โปรเน็ตบ้านเอไอเอสไฟเบอร์ เร็ว แรง เต็มสปีด ความเร็ว 1000/200 Mbps รับฟรีกล่อง AIS Playbox ซิมมือเน็ตมือถือ 5 GB นอกจากนี้ยังได้รับ Play Family 24 เดือน และ Viu 12 เดือน ฟรี",
            image: '/fibre/499.png',
            type: 'fibre'
        },
        {
            id: 3,
            name: "โปรเน็ตบ้าน AIS ราคา 599 บาท",
            price: 599.00,
            description: "โปรเน็ตบ้าน Ais Fiber เร็ว ไม่สะดุด ด้วยความเร็ว1000/500 Mbps พร้อมรับฟรี AIS Playbox ซิมเน็ตมือถือ 15 GB นอกจากนี้ยังได้รับ Play Family 24 เดือน และ Viu 12 เดือน ฟรี",
            image: '/fibre/599.png',
            type: 'fibre'
        },
    ]
    const offersSchemaType = schemaTypeOffers(products);
    return (
    <section className={styles.container}>
        <div className={styles.section}>
            <style jsx>{`
              h1::before {
                content: ". ";
                background-color: #b2d235;
                color: #b2d235;
                border-radius: 40px;
                margin-right: 10px;
              }
            `}</style>
            <h1>แพ็กเกจเน็ตบ้าน สุดฮอต ! ! !</h1>
            <ProductJsonLd
                productName="Ais Fibre"
                description="เอไอเอส ไฟเบอร์ เน็ตบ้านแรง ไฟเบอร์ออพติก 100% ตอบทุกไลฟ์สไตล์ คนชอบเน็ตและชอบความบันเทิง"
                brand={'AIS'}
                offers={offersSchemaType}
            />
            <ItemListGrid lists={products}/>
        </div>
    </section>
)
}
