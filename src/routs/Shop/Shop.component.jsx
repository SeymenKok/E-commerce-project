import Categories from "../../components/categories/categories.component";
 import {Outlet} from 'react-router-dom'

 const Shop = () => {

    const categories = [
        {
          "id": 1,
          "title": "MackBook Air",
          "price": "79.999,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 2,
          "title": "Casper Excalibur",
          "price": "39.745,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/casper/thumb/135717-1_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 3,
          "title": "Iphone 14 PRO MAX ",
          "price": "76.225,00 TL",
          "imageUrl": "https://cdn.cimri.io/image/1200x1200/appleiphoneceptelefonlarfiyatlariphonemodelleri_655418646.jpg",
          "button":"Buy Now",
        },
        {
          "id": 4,
          "title": "Acer Nitro",
          "price": "40.745,00TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/135325-1-2_large.jpg",
          "button":"Buy Now",
        },
        {
          "id": 5,
          "title": "SAMSUNG Galaxy A13 128 GB ",
          "price": "5.599,00 TL",
          "imageUrl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102711872/mobile_786_587_png/SAMSUNG-Galaxy-A13-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Beyaz",
          "button":"Buy Now",
        },
        {
          "id": 6,
          "title": "Huawei Matebook D15",
          "price": "19.999,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/133065-1_large.jpg",
          "button":"Buy Now",
        }, 
        {
          "id": 7,
          "title": "Acer Aspire",
          "price": "34.199,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/135334-1-1_large.jpg",
          "button":"Buy Now",
        },  
        {
          "id": 8,
          "title": "Huawei T10S 10.1 32 GB Matepad Tablet",
          "price": "2.599,00 TL",
          "imageUrl": "https://ayb.akinoncdn.com/products/2022/10/06/2176809/babce4d9-bcd1-4cf2-9362-b43234e4e449_size780x780_quality60_cropCenter.jpg",
          "button":"Buy Now",
        },  
        {
          "id": 9,
          "title": "MacBook Air Z15SM2JT16256 M2 ",
          "price": "75.999,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/134041-1-2_large.jpg",
          "button":"Buy Now",
        },  
        {
          "id": 10,
          "title": "Dell Inspiron 15 3520",
          "price": "69.999,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/dell/thumb/136767-1-1_large.jpg",
          "button":"Buy Now",
        }, 
        {
          "id": 11,
          "title": "Asus Tuf Gaming F15 ",
          "price": "45.299,00 TL",
          "imageUrl": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/135784-1_large.jpg",
          "button":"Buy Now",
        }, 
        {
          "id": 12,
          "title": "Bluetooth Kulaklık",
          "price": "1.499,00 TL",
          "imageUrl": "https://cdn.cimri.io/image/1200x1200/bluetoothkulaklkfiyatlar_449227307.jpg",
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

export default Shop;
