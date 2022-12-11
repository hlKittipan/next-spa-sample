import ItemListGrid from "@/components/itemLists";
import {Products} from "@/interfaces/products.interface";
import styles from '../../styles/Home.module.css'
import {ProductJsonLd} from "next-seo";
import {schemaTypeOffers} from "@/utility/schemaTypeProduct";
import {productSims} from "../pages/api/product";

export default function SimSection() {
    const products: Products[] = productSims;
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
