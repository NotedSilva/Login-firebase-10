import { initializeApp } from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCjmdCWhhzWxsMGOImplBVfel6CE2Yoy3A",
    authDomain: "login-firebase10.firebaseapp.com",
    projectId: "login-firebase10",
    storageBucket: "login-firebase10.appspot.com",
    messagingSenderId: "657625096015",
    appId: "1:657625096015:web:da2ebbb9b2b4afb13aaf3a"
  };
  
const app = initializeApp(firebaseConfig);

export default app;