export const EventHandling = () => {
  // function handleButtonClick() {
  //     alert('Hey I am onClick')
  // }

  const handleButtonClick = (event) => {
    console.log(event);

    alert("Hey I am onClick Event");
  };

  const handleNewEvent = (user) => {
    console.log(`Welcome ${user}, how are you??...`)
  }

  return (
    <>
      {/* function component with named function -->  just pass refrence not function() */}
      <button onClick={handleButtonClick}>CLick Me 1</button>
      <br />
      <br />

      {/* Inline eventhandlers*/}
      <button onClick={() => handleButtonClick(event)}>Click Me 2</button>
      <br/>

<br />
      {/* Inline arrow function */}
      <button onClick={() => alert("hello i m back again")}>Click Me 3</button>
      <br />
      <br />
      {/* Passing Arguments to Event Handlers */}
      <button onClick={handleNewEvent("Sejal")}>Click Me 4</button>
      <button onClick={handleNewEvent("Ram")}>Click Me 4</button>
    </>
  );
};
