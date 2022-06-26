import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default class FirebaseUserService {
  static signup = (auth, login, password, callback) => {
    createUserWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        callback(true, userCredential.user);
      })
      .catch((error) => {
        callback(false, error.code);
        console.log(error.code);
      });
  };

  static login = (auth, login, password, callback) => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        callback(userCredential.user);
      })
      .catch((error) => {
        callback(null);
      });
  };

  static logout = (auth, callback) => {
    signOut(auth)
      .then(() => callback(true))
      .catch((error) => {
        callback(false);
      });
  };
}
