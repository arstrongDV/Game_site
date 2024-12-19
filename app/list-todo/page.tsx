"use client";

import React from "react";
import { DndProvider } from "react-dnd";  
import { HTML5Backend } from "react-dnd-html5-backend"; 
import ToDoList from "./ToDoList";  
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/login';

const Page = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);
  return (
    <DndProvider backend={HTML5Backend}>
      <ToDoList />  
    </DndProvider>
  );
};

export default Page;
