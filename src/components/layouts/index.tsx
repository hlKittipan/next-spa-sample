import React, {FC, PropsWithChildren} from "react";
import ResponsiveAppBar from "@/components/layouts/ResponsiveAppBar";
import {AppHead} from "@/components/layouts/head";
import {Footer} from "@/components/layouts/Footer";

export const siteTitle = 'Next.js Sample Website'
export interface LayoutProp {
    children?: React.ReactNode;
}
export const Layout:FC<LayoutProp> = (LayoutProp:PropsWithChildren<LayoutProp>) =>{

    return (
        <div>
            <AppHead />
            <ResponsiveAppBar/>
            <main>{LayoutProp.children}</main>
            <Footer/>
        </div>
    )
}
