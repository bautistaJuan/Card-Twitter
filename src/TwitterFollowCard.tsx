import { useState } from "react"
interface TwitterFollowCardProps {
    name: string;
    userName: string;
    initialFollowingState: boolean;
}
export function TwitterFollowCard({ name, userName, initialFollowingState }: TwitterFollowCardProps) {

    const [isFollowing, setFollowing] = useState(initialFollowingState);

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "article_aside-button is-following" : "article_aside-button";

    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    return (
        <>
            <article className="article_container">
                <header className="article_header">
                    <img className="article_header-img" alt="img-user" src={`https://unavatar.io/${userName}`} />
                    <div className="article_header-info">
                        <strong>{name}</strong>
                        <span>@{userName}</span>
                    </div>
                </header>
                <aside className="article_aside_container">
                    <button onClick={handleClick} className={buttonClassName}>
                        <span className="article_aside-button-text">{text}</span>
                        <span className="article_aside-button-no-following">Dejar de seguir</span>
                    </button>
                </aside>
            </article>
        </>
    )
}