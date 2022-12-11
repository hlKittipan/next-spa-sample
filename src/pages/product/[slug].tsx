import {Layout} from "@/components/layouts";
import ImageCarouselSection from "@/components/ImageCarouselSection";
import styles from "../../../styles/Home.module.css";
import {Products} from "@/interfaces/products.interface";
import {productFibre, productSims} from "../api/product";
import {ProductJsonLd} from "next-seo";
import ItemListGrid from "@/components/product/itemLists";
import {schemaTypeOffers} from "@/utility/schemaTypeProduct";

interface IProps {
    params: { slug: string }
}

interface IPage {
    type: string
}

export default function DynamicPage({type}: IPage) {
    const products: Products[] = type === 'fibre' ? productFibre : productSims;
    const offersSchemaType = schemaTypeOffers(products);

    return (
        <Layout>
            <ImageCarouselSection/>
            <section className={styles.container}>
                <p>Product list</p>
                <div>{type}</div>
                <ProductJsonLd
                    productName="Ais Fibre"
                    description="เอไอเอส ไฟเบอร์ เน็ตบ้านแรง ไฟเบอร์ออพติก 100% ตอบทุกไลฟ์สไตล์ คนชอบเน็ตและชอบความบันเทิง"
                    brand={'AIS'}
                    offers={offersSchemaType}
                />
                <ItemListGrid lists={products}/>
            </section>
        </Layout>
    );
}

export async function getStaticProps({params}: IProps) {
    return {
        props: {type: params.slug},
    };
}

export async function getStaticPaths() {
    const posts = ["fibre", "sim"];
    const paths = posts.map((post) => ({
        params: {slug: post},
    }));

    return {paths, fallback: false};
}