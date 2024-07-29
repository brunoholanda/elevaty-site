import Banner from "./Banner";
import BlogPosts from "./Blog";
import Clients from "./Clients";
import Crescimento from "./Crescimento";
import Process from "./Process";
import Promo from "./Promo";

export default function Home() {
    return (
        <>
            <Banner />
            <Clients />
            <Process />
            <Promo />
            <Crescimento />
            <BlogPosts />
        </>
    );
}