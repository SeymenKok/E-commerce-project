import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";

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
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sing in with Google</button>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;