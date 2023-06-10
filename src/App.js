import Home from "./routs/home/home.component";
import Navigation from "./routs/navigation/navigation.component";
import {Routes,Route} from "react-router-dom";
import SignIn from "./routs/sign-in/sign-in-component";
// import Sign from "./routs/Sign/sign.component";
// import { deleteApp } from "firebase/app";



const Shop = () =>{
    return <h1>Shop Page</h1>
}

// const Contact = () =>{
//     return <h1>Contact Page</h1>
// }



const App = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>                
            <Route path='shop' element={<Shop/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            {/* <Route path='contact' element={<Contact/>}/>  */}
            {/* <Route path='sign' element={<Sign/>}/> */}
            
            </Route>
        </Routes>
     );
}
 

export default App;