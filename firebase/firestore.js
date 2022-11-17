import { database } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebaseConfig';

const getData = async (collectionName) => {
  return await getDocs(collection(database, collectionName));
};

const setData = async (collectionName, data) => {
  return await addDoc(collection(database, collectionName), data);
};

const loginAuth = async (email, password) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

const joinAuth = async (email, password) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export { getData, setData, loginAuth, joinAuth };
