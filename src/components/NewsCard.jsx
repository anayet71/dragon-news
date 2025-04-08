import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { title, details, thumbnail_url, author, total_view, rating } = news;

    return (
        <div className="card bg-base-100 shadow-md mb-5">
            <div className="card-body p-4">
                {/* Author Info */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h3 className="text-sm font-semibold">{author.name}</h3>
                            <p className="text-xs text-gray-500">{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-500">
                        <button className="btn btn-ghost btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13H5v-2h14v2z" /></svg>
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h2 className="card-title text-lg">{title}</h2>

                {/* Thumbnail */}
                <figure className="my-4 overflow-hidden">
                    <img src={news.image_url} alt="Thumbnail" className="rounded-md  object-cover w-full" />
                </figure>

                {/* Details */}
                <p className="text-sm text-gray-600">
                    {details.length > 250 ? details.slice(0, 250) + "..." : details}
                    <span className="text-orange-600 font-medium ml-1 cursor-pointer">Read More</span>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 text-sm text-gray-500">
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-orange-400">
                        {[...Array(Math.floor(rating.number))].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="ml-1 text-gray-700">{rating.number}</span>
                    </div>
                    {/* Views */}
                    <div className="flex items-center gap-1">
                        <FaEye className="text-gray-600" />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
