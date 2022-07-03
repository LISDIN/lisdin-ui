import  NavBar  from "./NavBar"
import { IdeaItem } from "./Items/IdeaItem"


import { ideas } from './data-mock/ideas.js'

const Ideas = () => {


    return (
        <>
            <NavBar />
            { ideas.map(
                (ideaItemData , index) => {
                    return (

                        <IdeaItem data = {{ideaItemData}} key = {index}
                        />
                    )
        }
        )}
            <p>Ideas Page!</p> 
        </>
    )
}

export default Ideas