import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    updateDoc,
  } from "firebase/firestore";
  
  export default class FirebaseProfessorService {
    static list = (firestore, callback) => {
      const coll = collection(firestore, "professors");
      getDocs(coll)
        .then((querySnapshot) => {
          let professors = [];
          querySnapshot.forEach((document) => {
            professors.push({
              _id: document.id,
              name: document.data().name,
              degree: document.data().degree,
              university: document.data().university,
            });
          });
          callback(professors);
        })
        .catch((error) => console.log(error));
    };
  
    static list_onSnapshot = (firestore, callback) => {
      const coll = collection(firestore, "professors");
      const q = query(coll, orderBy("name"));
      onSnapshot(q, (querySnapshot) => {
        let professors = [];
        querySnapshot.forEach((document) => {
          professors.push({
            _id: document.id,
            name: document.data().name,
            degree: document.data().degree,
            university: document.data().university,
          });
        });
        callback(professors);
      });
    };
  
    static retrieve = (firestore, callback, _id) => {
      const docRef = doc(firestore, "professors", _id);
      getDoc(docRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) callback(docSnapshot.data());
        })
        .catch((error) => console.log(error));
    };
  
    static update = (firestore, callback, _id, professor) => {
      const docRef = doc(firestore, "professors", _id);
      updateDoc(docRef, professor)
        .then(() => {
          callback(true);
        })
        .catch((error) => console.log(error));
    };
  
    static create = (firestore, callback, professor) => {
      const coll = collection(firestore, "professors");
      addDoc(coll, professor)
        .then((docRef) => {
          callback(docRef.id);
        })
        .catch((error) => console.log(error));
    };
  
    static delete = (firestore, callback, _id) => {
      const docRef = doc(firestore, "professors", _id);
      deleteDoc(docRef)
        .then(() => {
          callback(true);
        })
        .catch((error) => console.log(error));
    };
  }
  