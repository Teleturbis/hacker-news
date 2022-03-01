import React from "react"

export default function Filter ({sortAscendingArticles, sortDescendingArticles}) {

    return(
        <div>
            <button onClick={sortAscendingArticles}>Points Ascending</button>
            <button onClick={sortDescendingArticles}>Points Descending</button>
        </div>
    )

}

/*

    -alter
    -points         CHECKED
    -hot
    -comments

    -searchbar

*/