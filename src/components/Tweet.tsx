import './Tweet.css';
import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
interface TweetProps {
    content: string
}


export function Tweet(props: TweetProps){
    return (
       <Link to="/status" className="tweet">
        <img src="https://github.com/joaoArantes07.png" alt="Joao" />
        <div className="tweet-content">
            <div className="tweet-content-header">
                <strong>Joao Arantes</strong>
                <span> @teste </span>
            </div>
            <p>
               {props.content} 
            </p>
            <div className="tweet-content-footer">
                <button type="button">
                    <ChatCircle />
                    10
                </button>

                <button type="button">
                    <ArrowsClockwise />
                    20
                </button>

                <button type="button">
                    <Heart />
                    30
                </button>
            </div>
        </div>
       </Link>
        
    )
}