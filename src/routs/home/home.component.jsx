import Categories from "../../components/categories/categories.component";
 import {Outlet} from 'react-router-dom'

 const Home = () => {

    const categories = [
        {
          "id": 1,
          "title": "MackBook Air",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 2,
          "title": "Casper Excalibur",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/casper/thumb/135717-1_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 3,
          "title": "Lenovo Ideapad",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/untitled-1_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 4,
          "title": "Acer Nitro",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/135325-1-2_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 5,
          "title": "Hp 14-em0006nt",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/137983-2-min_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 6,
          "title": "Huawei Matebook D15",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/133065-1_large.jpg",
          "button":"Buy Now",
        }, 
        {
          "id": 7,
          "title": "Acer Aspire",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/135334-1-1_large.jpg",
          "button":"Buy Now",
        },  
        {
          "id": 8,
          "title": "Hp Victus 16-d1029nt",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/hp/thumb/136253-1_large.jpg",
          "button":"Buy Now",
        },  
        {
          "id": 9,
          "title": "MacBook Air Z15SM2JT16256 M2 ",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/134041-1-2_large.jpg",
          "button":"Buy Now",
        },  
        {
          "id": 10,
          "title": "Dell Inspiron 15 3520",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/136767-1-1_large.jpg",
          "button":"Buy Now",
        }, 
        {
          "id": 11,
          "title": "Asus Tuf Gaming F15 ",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/135784-1_large.jpg",
          "button":"Buy Now",
        }, 
        {
          "id": 12,
          "title": "Asus Rog Strix G15",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/1-134112_large.jpg",
          "button":"Buy Now",
        }, 
      ]

  return (
    <div>
        <Outlet/>
        <Categories categories={categories}/>
    </div>
  );
}

export default Home;
