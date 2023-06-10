//Firebase Setup
import {initializeApp } from 'firebase/app';  
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNjXB0Jhz-RD38vfmWeBQ-cXzt8x5VX8k",
    authDomain: "e-commerce-project-database.firebaseapp.com",
    projectId: "e-commerce-project-database",
    storageBucket: "e-commerce-project-database.appspot.com",
    messagingSenderId: "579744639908",
    appId: "1:579744639908:web:b5bb8b04424169cfd2ef31",
    measurementId: "G-V2FSYY6V1F"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Authentication Setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

//FireStore Setup
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users',userAuth.uid); //Benzersiz bir bağlantı    
    const userSnapShot = await getDoc(userDocRef); // Veriye erişim
    // Users veritabanı yok ise
    if (!(userSnapShot.exists())) {
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("Kullanıcı Kaydetmede Hata!:", error.message);
        }
    }
    // Users veritabanı var ise
    return userDocRef;
}


//Email/Password Sign Up
export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    if (!email || !password) return;
        
    
    return await createUserWithEmailAndPassword(auth,email,password);
}