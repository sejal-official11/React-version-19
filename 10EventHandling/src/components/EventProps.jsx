export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey, Thanks for hovering me`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Sejal")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hey Thanks for hovering me`);
    props.onClick;
  };
  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
      <br />
      <br />
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <br />
      <br />
      <button onClick={handleGreeting}>Greeting</button>
      <br />
      <br />
    </>
  );
};
