import React, { useContext, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../../../firebase/FirebaseConfig"; // Adjust based on your file structure
import { toast } from "react-toastify";
import myContext from "../../../../context/data/myContext";

const UploadCarouselForm = () => {
  const context = useContext(myContext);

  const { loading, setLoading } = context;
  const [formData, setFormData] = useState({
    time: Timestamp.now(),
    title: "",
    description: "",
    imageUrl: "",
  });
  const saveCarouselData = async (data) => {
    setLoading(false);
    try {
      // Reference the collection where the data will be saved
      const docRef = await addDoc(collection(fireDB, "carouselImages"), data); // Replace 'carouselImages' with your collection name
      console.log("Document written with ID: ", docRef.id);
      toast.success("Uploaded Sucessfully");
      setLoading(true);
      setFormData({ id: "", title: "", description: "", imageUrl: "" });
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(true);
      setFormData({ title: "", description: "", imageUrl: "" });
      throw error;
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docId = await saveCarouselData(formData);
      console.log("Data saved with ID:", docId);
      alert("Data successfully uploaded!");
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload data. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-950 px-10 py-10 rounded-xl"
      >
        <h1 className="text-center text-white text-xl mb-4 font-bold">
          Upload Carousel Image Data
        </h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="bg-yellow-500 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-100 outline-none"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="bg-yellow-500 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-100 outline-none"
        ></textarea>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="bg-yellow-500 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-100 outline-none"
        />
        <button
          type="submit"
          className="bg-white w-full text-black font-bold px-2 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadCarouselForm;
