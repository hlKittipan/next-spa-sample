import {Layout} from "@/components/layouts";
import ImageCarouselSection from "@/components/ImageCarouselSection";
import styles from "../../../styles/Home.module.css";
import {AllProducts, Products} from "@/interfaces/products.interface";
import {productAllFibre, productAllSim} from "../api/product";
import {ProductJsonLd} from "next-seo";
import ItemListGrid from "@/components/product/itemLists";
import {schemaTypeOffers} from "@/utility/schemaTypeProduct";
import { FunctionComponent } from "react";

interface IProps {
    params: { slug: string }
}

interface IPage {
    type: string
}

export default function DynamicPage({type}: IPage) {
    const products: AllProducts[] = type === 'fibre' ? productAllFibre : productAllSim;
    return (
        <Layout>
            <ImageCarouselSection/>
            <section className={styles.container}>
                {
                    products?.map((product: AllProducts, index:number) => (
                        <ProductList key={index} data={product.data} label={product.label} type={type}/>
                    ))
                }
            </section>
        </Layout>
    );
}

interface IProduct {
    data: Products[],
    label: string,
    type: string
}
const ProductList:FunctionComponent<IProduct> = ({data,label,type}) => {
    const offersSchemaType = schemaTypeOffers(data);
    return (
        <>
            <style jsx>{`
                  h1::before {
                    content: ". ";
                    background-color: #b2d235;
                    color: #b2d235;
                    border-radius: 40px;
                    margin-right: 10px;
                  }
                `}</style>
            <ProductJsonLd
            productName={'Ais ' + type === 'fibre' ? 'Fibre' : 'Sim'}
            description="เอไอเอส ไฟเบอร์ เน็ตบ้านแรง ไฟเบอร์ออพติก 100% ตอบทุกไลฟ์สไตล์ คนชอบเน็ตและชอบความบันเทิง"
            brand={'AIS'}
            images={['https://aisfibrephuket.com/wp-content/uploads/2022/08/AIS_Fibre_Cybrox-Project_banner_1600x500_th-1536x480.jpg']}
            offers={offersSchemaType}/>
            <h1>{label}</h1>
            <ItemListGrid lists={data}/>
        </>
    )
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
