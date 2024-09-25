import { useBoiContext } from ".";


export const Services = () => {
  //destructure when more than 1 data
  const {myName, myAge}  = useBoiContext()
 
  return (
    <>
      <h1>Hello (Services) I am Home. mY name is {myName}. I am {myAge}</h1>
    </>
  );
};
