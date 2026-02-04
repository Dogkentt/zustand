import { create } from "zustand";

interface IStoreCounter {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounterStore = create<IStoreCounter>((set) => ({
    count: 0,
    increment: () => {set((state) => ({ count: state.count + 1}))}, 
    decrement: () => {set((state) => ({ count: state.count - 1}))},
}));

export const useCount = () => useCounterStore((state) => state.count);
export const incrementCount = () => useCounterStore.getState().increment();
export const decrementCount = () => useCounterStore.getState().decrement();