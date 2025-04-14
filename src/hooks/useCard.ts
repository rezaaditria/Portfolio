// hooks/useCards.ts
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Card {
  id: string;
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string;
}

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  // Fetch data realtime (onSnapshot)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cards"), (snapshot) => {
      const cardArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Card[];
      setCards(cardArray);
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  // Add card
  const addCard = async (card: Omit<Card, "id">) => {
    await addDoc(collection(db, "cards"), card);
  };

  // Delete card
  const deleteCard = async (id: string) => {
    await deleteDoc(doc(db, "cards", id));
  };

  return { cards, addCard, deleteCard };
};
