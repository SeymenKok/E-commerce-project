import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
       displayName : '',
       email:'',
       password:'',
       confirmPassword:'',

}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

        const handleSubmit = async (event) => {
            event.preventDefault();

            // Şifre Kontrol
            if (password !== confirmPassword) {
                alert("Şifrenizi kontrol ediniz!");
                return;
            }
            // Firestore'a user'ı kaydetme
            try {
                //Google Authentication
                const {user} = await createAuthUserWithEmailAndPassword(email,password);
                // User'ı Firestore'a Kaydetme
                await createUserDocumentFromAuth (user,{displayName});

                
            } catch (error) {
                if (error.code === "auth/weak-password") {
                    alert("Şifreniz en az 6 karakter olmalıdır!");
                }
                if (error.code === "auth/email-already-in-user") {
                    alert("Bu kullanıcı zaten kayıtlı");
                }
            }
        }

    return ( 
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>

                <input
                 type="text"
                 required
                 name='displayName'
                 value={displayName}
                 onChange={handleChange}
                 />

                <label>E-Mail</label>
                <input 
                type="text"
                 required
                 name='email'
                 value={email}
                 onChange={handleChange}
                 />

                <label>Password</label>
                <input
                 type="password"
                 required
                 name='password'
                 value={password}
                 onChange={handleChange}
                 />

                <label>Confirm Password</label>                               
                <input 
                type="password"
                 required
                 name='confirmPassword'
                 value={confirmPassword}
                 onChange={handleChange}
                 />

                <button type="submit">Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;