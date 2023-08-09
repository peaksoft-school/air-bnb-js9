import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyAQY98QR0-2sOFIfMHvtvULSq5pL348XJg',
   authDomain: 'sign-in-with-airbnb.firebaseapp.com',
   databaseURL: 'https://sign-in-with-airbnb-default-rtdb.firebaseio.com',
   projectId: 'sign-in-with-airbnb',
   storageBucket: 'sign-in-with-airbnb.appspot.com',
   messagingSenderId: '481245267992',
   appId: '1:481245267992:web:20e5cd95d2e95e58c7db6d',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
