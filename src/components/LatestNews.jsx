import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-3 bg-base-200 p-3">
            <p className="bg-[#D72050] py-2.5 px-6  text-white ">Latest</p>

            <Marquee pauseOnHover={true} className="space-x-10 " >
                <Link to='/news'>
                <p className="font-medium">  Molor sit amet consectetur adipisicing elit. Obcaecati, ab mollitia ea optio ducimus rerumoptio ducimus rerum. </p>
                </Link>
                <Link to='/news'>
                <p className="font-medium">  Molor sit amet consectetur adipisicing elit. Obcaecati, ab mollitia ea optio ducimus rerumoptio ducimus rerum. </p>
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;