import React from "react"
import CardItem from "./CardItem.jsx"

export default function CardList ({articles}) {

    

    return(
        <ul style={{listStyleType: "none"}}>
            {articles.map(article => <CardItem article={article} key={article.id} />)}
        </ul>
    )

}