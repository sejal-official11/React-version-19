import { useBoiContext } from ".";


export const Home = () => {
  //destructure when more than 1 data
  const {myName, myAge}  = useBoiContext();

 
  return (
    <>
      <h1>Hello I am Home. mY name is {myName}. I am {myAge}</h1>
    </>
  );
};
