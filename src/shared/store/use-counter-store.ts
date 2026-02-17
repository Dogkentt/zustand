import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface IActions {
    increment: () => void;
    decrement: () => void;
}

interface IInitialState {
    count: number;
}

interface ICounterState extends IInitialState, IActions {}

const initialState: IInitialState = {
    count: 0,
}

const counterStore: StateCreator<ICounterState> = ((set) => ({
    ...initialState,
    increment: () => {set((state) => ({ count: state.count + 1}))}, 
    decrement: () => {set((state) => ({ count: state.count - 1}))},
}))

export const useCounterStore = create<ICounterState>()(
    devtools(
        counterStore,
        { name: "counter-store" }
    )
);   

export const useCount = () => useCounterStore((state) => state.count);
export const incrementCount = () => useCounterStore.getState().increment();
export const decrementCount = () => useCounterStore.getState().decrement();