import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {defaultMetaData} from "@/utils/metadata";

export default function Layout({ children }: any) {
    const metaData = children?.props?.metadata || defaultMetaData;

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{metaData.title}</title>
                <meta name={"description"} content={metaData.description} />
                {/*  Open Graph Tags  */}
                <meta property="og:title" content={metaData.title} />
                <meta property="og:description" content={metaData.description} />
                <meta property="og:image" content={metaData.image} />
                <meta property="og:url" content={metaData.url} />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}