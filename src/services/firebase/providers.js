
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// const googleProvider = new GoogleAuthProvider()

// export const loginWithGoogle = async() => {

//     try {
//         const result = await signInWithPopup(auth, googleProvider)
//         // const credentials = GoogleAuthProvider.credentialFromResult(result)
//         // console.log({credentials})
//         const { displayName, email, photoURL, uid } = result.user
        
//         return {
//             ok: true,
//             // user info
//             displayName, email, photoURL, uid
//         }


//     } catch (error) {
//         const errorCode = error.code
//         const errorMessage = error.message

//         return {
//             ok: false,
//             errorCode,
//             errorMessage
//         }
//     }
// }
