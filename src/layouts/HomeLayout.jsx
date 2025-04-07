import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

;

const HomeLayout = () => {
    return (
        <div className="font-primary">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto ">
                    <LatestNews> </LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-6 grid md:grid-cols-12 gap-3">
                <aside className="col-span-3">
                    left Navbar
                </aside>
                <section className="col-span-6">
                    Main content
                </section>
                <aside className="col-span-3">
                    Right Navbar
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;