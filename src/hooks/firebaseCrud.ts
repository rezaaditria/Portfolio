// src/hooks/firebaseCrud.ts
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState, useEffect } from "react";

// 🔷 Tipe data project (sesuai dengan Card)
export interface Card {
  id: string;
  title: string;
  description: string;
  descriptionPrev: string;
  src: string;
  linkText: string;
  link: string;
}

// ✅ Tambah Project
export const addProject = async (project: Omit<Card, "id">): Promise<void> => {
  try {
    await addDoc(collection(db, "projects"), project);
  } catch (error) {
    console.error("Error adding project:", error);
  }
};

// // ✅ Ambil Data Project (Real-time)
// export const useProjects = () => {
//   const [projects, setProjects] = useState<Card[]>([]);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
//       const projectArray: Card[] = snapshot.docs.map((doc) => {
//         const data = doc.data();
//         return {
//           id: doc.id,
//           title: data.title ?? "",
//           description: data.description ?? "",
//           descriptionPrev: data.descriptionPrev ?? "",
//           src: data.src ?? "",
//           linkText: data.linkText ?? "",
//           link: data.link ?? "",
//         };
//       });
//       setProjects(projectArray);
//     });

//     return () => unsubscribe();
//   }, []);

//   return projects;
// };

// ✅ Ambil Project sekali (non real-time)
export const getProjects = async (): Promise<Card[]> => {
  const snapshot = await getDocs(collection(db, "projects"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Card, "id">),
  }));
};

// ✅ Update Project
export const updateProject = async (
  id: string,
  updatedProject: Omit<Card, "id">
): Promise<void> => {
  const projectRef = doc(db, "projects", id);
  try {
    // Ensure only updated fields are sent to Firestore (avoids overwriting)
    const { title, description, descriptionPrev, src, linkText, link } =
      updatedProject;

    const updatedData = {
      title,
      description,
      descriptionPrev,
      src,
      linkText,
      link,
    };

    await updateDoc(projectRef, updatedData);
  } catch (error) {
    console.error("Error updating project:", error);
  }
};

// ✅ Hapus Project
export const deleteProject = async (id: string): Promise<void> => {
  const projectRef = doc(db, "projects", id);
  try {
    await deleteDoc(projectRef);
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};
