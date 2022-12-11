import FibreSection from "@/components/FibreSection";
import ImageCarouselSection from "@/components/ImageCarouselSection";
import AISPlaySection from "@/components/AISPlaySection";
import SimSection from "@/components/SimSection";
import {Layout} from "@/components/layouts";

export default function Home() {
    return (
        <Layout>
            <ImageCarouselSection/>
            <FibreSection/>
            <AISPlaySection/>
            <SimSection/>
        </Layout>
    );
}
