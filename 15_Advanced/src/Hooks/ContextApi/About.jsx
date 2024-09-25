import { BioContext} from "."
import {use, useContext} from "react";



export const About = () => {
    const newHook = true;
    let myName, myAge;

    if(newHook) {
        const {myName, myAge} = use(BioContext)
        
    }
    // const {myAge} = use(BioContext)

    return (
        <>
        <h1>Now My age is {myAge + 1}</h1>
        </>
    )
}