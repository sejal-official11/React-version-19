// import { createContext , useContext} from "react";

// // 1st step
// // Create context

// export const BioContext = createContext(); // it is a component not variable

// //2nd Step
// // Provider component
// export const BioProvider = ({ children }) => {
// //   console.log(children);

//   const myName = "Sejal";
//   const myAge = 22;

//   return (
//     // it is like a ware house which is use to store and safe things
//     <BioContext.Provider value={{myName, myAge}}>
//       {children}
//     </BioContext.Provider>
//   );
// };


// export const useBoiContext = () => {
//   const context = useContext(BioContext)

//   if(context === undefined)
//     throw new Error("Component must be wrapped with BoiProvider")
//   return context;

// }











// import { createContext , useContext} from "react";
import { createContext, use } from "react";



export const BioContext = createContext(); 
export const BioProvider = ({ children }) => {


  const myName = "Sejal";
  const myAge = 22;

  return (
    
    <BioContext.Provider value={{myName, myAge}}>
      {children}
    </BioContext.Provider>
  );
};


export const useBoiContext = () => {
  const context = use(BioContext)

  if(context === undefined)
    throw new Error("Component must be wrapped with BoiProvider")
  return context;

}

