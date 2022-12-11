import ItemListGrid from "@/components/itemLists";
import {Products} from "@/interfaces/products.interface";
import styles from '../../styles/Home.module.css'
import {ProductJsonLd} from "next-seo";
import {schemaTypeOffers} from "@/utility/schemaTypeProduct";

export default function SimSection() {
    const products: Products[] = [
        {
            id: 1,
            name: "150 บาท / 30 วัน",
            price: 150.00,
            description: "• ความเร็ว : 4 Mpbs ไม่ลดสปีด<br>" +
                "• โทรฟรี : ในเครือข่าย (ครั้งละ15 นาที)<br>" +
                "• AIS Super Wifi : ไม่อั้น<br>" +
                "• โปรเน็ต AIS ปี 2565<br>" +
                "• พร้อมวันใช้งาน 30 วัน<br>" +
                "• ราคารวมภาษี Vat 7% แล้ว",
            image: '/sim/4.png',
            type: 'sim'
        },
        {
            id: 2,
            name: "150 บาท / 30 วัน",
            price: 150.00,
            description: "• ความเร็ว : 8 Mpbs ไม่ลดสปีด<br>" +
                "• โทรฟรี : ไม่มี<br>" +
                "• AIS Super Wifi : ไม่อั้น<br>" +
                "• โปรเน็ต AIS ปี 2565<br>" +
                "• พร้อมวันใช้งาน 30 วัน<br>" +
                "• ราคารวมภาษี Vat 7% แล้ว",
            image: '/sim/8.png',
            type: 'sim'
        },
        {
            id: 3,
            name: "200 บาท / 30 วัน",
            price: 200.00,
            description: "• ความเร็ว : 15 Mpbs ไม่ลดสปีด<br>" +
                "• โทรฟรี : ทุกเครือข่าย (ครั้งละ15 นาที)<br>" +
                "• AIS Super Wifi : ไม่อั้น<br>" +
                "• โปรเน็ต AIS ปี 2565<br>" +
                "• พร้อมวันใช้งาน 30 วัน<br>" +
                "• ราคารวมภาษี Vat 7% แล้ว",
            image: '/sim/15.png',
            type: 'sim'
        },
        {
            id: 4,
            name: "200 บาท / 30 วัน",
            price: 200.00,
            description: "• ความเร็ว : 20 Mpbs ไม่ลดสปีด<br>" +
                "• โทรฟรี : ไม่มี<br>" +
                "• AIS Super Wifi : ไม่อั้น<br>" +
                "• โปรเน็ต AIS ปี 2565<br>" +
                "• พร้อมวันใช้งาน 30 วัน<br>" +
                "• ราคารวมภาษี Vat 7% แล้ว<br>",
            image: '/sim/20.png',
            type: 'sim'
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
            <h1>รวมโปรเน็ต AIS ล่าสุด ! ! !</h1>
            <ProductJsonLd
                productName="AIS ให้คุณใช้ชีวิตได้มากกว่า ผู้นำเครือข่ายโทรศัพท์เคลื่อนที่ของประเทศไทย"
                description="เอไอเอส ผู้ให้บริการเครือข่ายโทรศัพท์เคลื่อนที่รายเดือนและเติมเงิน รวมทั้งบริการต่างๆเกี่ยวกับอุปกรณ์มือถือ สมาร์ทโฟน iPhone อินเตอร์เน็ต WIFI และ AIS 4G คุณภาพ"
                brand={'AIS'}
                offers={offersSchemaType}
            />
            <ItemListGrid lists={products}/>
        </div>
    </section>
)
}
