import ItemListGrid from "@/components/itemLists";
import {Products} from "@/interfaces/products.interface";
import styles from '../../styles/Home.module.css'
import {ProductJsonLd} from "next-seo";
import {schemaTypeOffers} from "@/utility/schemaTypeProduct";
import {productFibre} from "../pages/api/product";

export default function FibreSection() {
    const products: Products[] = productFibre;
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
