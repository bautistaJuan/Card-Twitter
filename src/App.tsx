import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App() {
    return (
        <>
            <section className="App">
                <TwitterFollowCard name="Marce Z" userName="zapaiamarce" initialFollowingState />
                <TwitterFollowCard name="Juan Bautista" userName="bautistaVega" initialFollowingState={false} />
            </section>

        </>
    )

}