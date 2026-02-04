import { decrementCount, incrementCount } from "../../store/use-counter-store"
import { Button } from "../Button/Button"

const CounterButtonsContainer = () => {
    return (
        <div>
            <Button onClick={() => incrementCount()}>
                Increment
            </Button>

            <Button onClick={() => decrementCount()}>
                Decrement
            </Button>
        </div>
    )
}

export { CounterButtonsContainer }