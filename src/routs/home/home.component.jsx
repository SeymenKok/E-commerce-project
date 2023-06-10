import Categories from "../../components/categories/categories.component";
 import {Outlet} from 'react-router-dom'

 const Home = () => {
          
    const categories = [
          
        {
          "id": 1,
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/BANNER//yeni-tasarim/anasayfa/06-haziran/babalar-gunu-tasarim-ilan-web-toplu-reviz.jpg",
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
