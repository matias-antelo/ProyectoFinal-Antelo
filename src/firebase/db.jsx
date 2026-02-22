import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async (category) => {
    const items = [];

    if (!category) {
        const allItems = await getDocs(collection(db, "items"));

        allItems.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
        });
    } else {
        const q = query(
            collection(db, "items"),
            where("category", "==", category)
        );

        const itemsByCategory = await getDocs(q);

        itemsByCategory.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
        });
    }

    return items;
};

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = [];

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name);
    });

    return categories;
};

export const getItemById = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        return null;
    }
    return docSnap.data();
}