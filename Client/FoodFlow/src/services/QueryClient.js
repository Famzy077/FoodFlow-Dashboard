'use client'
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        //console.log('Query Error:', error.message);
      },
      onSuccess: (data) => {
        //console.log('Query Success:', data);
      },
    },
    mutations: {
      onError: (error) => {
        //console.log('Mutation Error:', error.message);
      },
      onSuccess: (data) => {
        //console.log('Mutation Success:', data);
      },
    },
  },
});
  
