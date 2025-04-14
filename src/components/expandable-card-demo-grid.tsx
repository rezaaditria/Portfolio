"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Card {
  id: string;
  title: string;
  description: string;
  descriptionPrev: string;
  src: string;
  linkText: string;
  link: string;
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const fetchedCards = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Card)
        );
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              layout
              className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6 flex items-center justify-center"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.id}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  quality={100}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div className="grid gap-2 p-4">
                <div className="flex justify-between items-center">
                  <motion.h3
                    layoutId={`title-${active.id}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.a
                    layout
                    href={active.link}
                    target="_blank"
                    className={`px-4 py-2 text-sm rounded-full font-bold ${
                      active.linkText === "Unavailable"
                        ? "bg-red-500 text-white cursor-not-allowed"
                        : "bg-green-500 text-white"
                    }`}
                    onClick={(e) => {
                      if (active.linkText === "Unavailable") {
                        e.preventDefault();
                      }
                    }}
                  >
                    {active.linkText}
                  </motion.a>
                </div>
                <motion.p
                  layoutId={`description-${active.id}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-base"
                >
                  {active.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer max-h-[350px]"
          >
            <motion.div layoutId={`image-${card.id}-${id}`}>
              <Image
                width={100}
                height={100}
                quality={100}
                src={card.src}
                alt={card.title}
                className="h-60 w-full rounded-lg object-cover object-top"
              />
            </motion.div>
            <div className="flex justify-center items-center flex-col">
              <motion.h3
                layoutId={`title-${card.id}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`descriptionPrev-${card.id}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base overflow-hidden"
              >
                {card.descriptionPrev}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
