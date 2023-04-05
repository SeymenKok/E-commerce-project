import Home from "./routs/home/home.component";
import Navigation from "./routs/navigation/navigation.component";
import {Routes,Route} from "react-router-dom";

const Shop = () =>{
    return <h1>Shop Page</h1>
}

const Contact = () =>{
    return <h1>Contact Page</h1>
}

const Sign = () =>{
    return <h1>Sign Page</h1>
}

const App = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>                
            <Route path='shop' element={<Shop/>}/>   
            <Route path='contact' element={<Contact/>}/> 
            <Route path='sign' element={<Sign/>}/>
            </Route>
        </Routes>
     );
}
 
export default App;