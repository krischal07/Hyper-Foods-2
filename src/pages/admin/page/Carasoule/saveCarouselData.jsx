import { collection, addDoc } from "firebase/firestore";
import { fireDB } from "../../../../firebase/FirebaseConfig"; // Adjust based on your file structure

export const saveCarouselData = async (data) => {
  try {
    // Reference the collection where the data will be saved
    const docRef = await addDoc(collection(fireDB, "carouselImages"), data); // Replace 'carouselImages' with your collection name
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
