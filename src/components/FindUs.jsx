import { FaFacebook, FaInstagram , FaTwitter} from "react-icons/fa";


const FindUs = () => {
    return (
        <div className="pt-10 pb-3">
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn justify-start join-item"><FaFacebook />
                    Facebook
                </button>
                <button className="btn justify-start join-item"> <FaTwitter />
                Twitter</button>
                <button className="btn justify-start join-item"><FaInstagram />
                Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;