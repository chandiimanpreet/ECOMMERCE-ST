import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { GoogleAnalytics } from '@next/third-parties/google'



export const revalidate = 0;

const Homepage = async () => {

    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard('082673ed-87f7-4605-adfa-075d7854fa04');

    return (
        <Container>
             <GoogleAnalytics gaId="G-62TK09FGMK" />
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}


export default Homepage;
