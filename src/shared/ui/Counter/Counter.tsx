import { useCount } from "../../store/use-counter-store"

const Counter = () => {
    const count = useCount();
    return (
        <div>
            <h1>{ count }</h1>
        </div>
    )
}

export { Counter }