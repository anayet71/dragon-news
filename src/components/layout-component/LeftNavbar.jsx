import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setcategories] = useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res) => res.json())
        .then((data) => setcategories(data.data.news_category));

    },[]);

         

    return (
        <div>
            <h2 className="font-semibold mb-3">All category ( {categories.length})</h2>
            <div className="flex flex-col gap-1.5 text-left">
              { 
                categories.map((category)=>
                <NavLink to={`/category/${category.category_id}`}
                 key={category.category_id} className="btn text-left"> {category.category_name} 
                 </NavLink>)
              }
            </div>
        </div>
    );
};

export default LeftNavbar;