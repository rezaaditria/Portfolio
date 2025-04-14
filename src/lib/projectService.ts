import { db } from "@/lib/firebase"; // Path ke firebase config
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Card } from "@/hooks/firebaseCrud"; // Path ke Card tipe

// Mendapatkan semua projek dengan tipe Card[]
export const getProjects = async (): Promise<Card[]> => {
  const snapshot = await getDocs(collection(db, "projects"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Card, "id">), // Gabungkan dengan data yang ada di Firestore
  }));
};

// Fungsi untuk menambahkan project baru
export const addProject = async (project: Omit<Card, "id">) => {
  const docRef = await addDoc(collection(db, "projects"), project);
  return docRef.id;
};

// Fungsi untuk update project berdasarkan ID
export const updateProject = async (id: string, project: Omit<Card, "id">) => {
  const docRef = doc(db, "projects", id);
  await updateDoc(docRef, project);
};

// Fungsi untuk menghapus project berdasarkan ID
export const deleteProject = async (id: string) => {
  const docRef = doc(db, "projects", id);
  await deleteDoc(docRef);
};
