import { collection, addDoc } from "firebase/firestore";


export const increaseCounter = async () => {
    try {
      const docRef = await addDoc(collection(db, "count"));
      return docRef.id; // Return the document ID if needed
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error; // Let the calling component handle the error
    }
  };