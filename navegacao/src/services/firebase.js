// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJvYCS7YXMenjq1FkDnP5GgJ3NQoZ7Wqc",
  authDomain: "pifront.firebaseapp.com",
  projectId: "pifront",
  storageBucket: "pifront.appspot.com",
  messagingSenderId: "241534817331",
  appId: "1:241534817331:web:82ef1382bfa77b7a02ff46",
  measurementId: "G-NQ371PHV8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);


export async function register(nome, email, senha) {
  let resposta = {}
  await createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {

      updateCurrentUser(userCredential.user, {displayName:none})
        .then((userCredential) => ({ user: userCredential.user, error: {} })) /* Sucesso */
        .catch((error) => ({ user: {}, erro: { code: error.code, msg: error.message } })); /* Erro */
    })
    .catch((error) => ({ user: {}, erro: { code: error.code, msg: error.message } })); /* Erro */
    return resposta


}
export async function logout(email, senha) {

  signOut(auth).then().catch((error) =>
    console.log(error.code, error.message));
}