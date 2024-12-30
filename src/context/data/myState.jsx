import React, { useEffect, useState } from "react";
import myContext from "./myContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const myState = (props) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(14,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: "",
    actualPrice: "",
    price: "",
    imageUrl: "",
    category: "",
    sub_category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async () => {
    if (
      products.title === null ||
      products.price === null ||
      products.actualPrice == null ||
      products.imageUrl === null ||
      products.category === null ||
      products.sub_catgeory === null ||
      products.description === null
    ) {
      return toast.error("All fields are required!!");
    }
    setLoading(true);
    try {
      //Adding product data to firebase
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);

      toast.success("Added product successfully!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [user, setUser] = useState([]);
  const getUserData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "users"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const [carasoule, setCarasoule] = useState([]);
  const getCarasouleData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "carouselImages"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let carasouleArray = [];
        QuerySnapshot.forEach((doc) => {
          carasouleArray.push({ ...doc.data(), id: doc.id });
        });
        setCarasoule(carasouleArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getCarasouleData();
  }, []);

  const deleteCarasoule = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "carouselImages", id));
      toast.success("Carasouel Deleted");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      setLoading(false);
    }
  };

  //  update Product functio
  const editHandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      toast.success("Product updated successfully!");
      getProductData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Item deleted successfully");
      // window.location.href = '/dashboard'
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [order, setOrder] = useState([]);
  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push({ ...doc.data() });
      });
      setOrder(ordersArray);
      console.log(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
    getOrderData();
  }, []);

  // const uploadImage = async (file) => {
  //   const storageRef = ref(Storage, `carasoule/${file.name}`);
  //   await uploadBytes(storageRef, file);
  //   const url = await getDownloadURL(storageRef);
  //   return url;
  // };

  return (
    <myContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        editHandle,
        updateProduct,
        deleteProduct,
        carasoule,
        user,
        deleteCarasoule,
        order,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default myState;
