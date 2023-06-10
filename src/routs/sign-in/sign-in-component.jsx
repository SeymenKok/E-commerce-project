import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss"
import SignUpForm from "../../components/sign-up-form/sign-up-form-components";


const SignIn = () => {
    const logGoogleUser = async () => {
        //  Popup ile hesap seçimi
        const {user} = await signInWithGooglePopup();
        // Seçilen hesaba göre veri tabanına bağlantı noktası oluşturma
        await createUserDocumentFromAuth(user);
        // const userDocRef = await createUserDocumentFromAuth(user);
    }
    return ( 
        <div className="card-container">
            <div className="googlesign">
            <h1>Sign in with Google</h1>
            <button onClick={logGoogleUser}>Sing in</button></div>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;