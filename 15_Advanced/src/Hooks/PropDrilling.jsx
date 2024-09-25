export const ParentComponent = () => {
  return (
    <section>
      <h1>Parent Component</h1>
      <ChildComponent data="React JS" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>Child Component</h1>
      <GrandChilComponent data={props.data} />
    </>
  );
};

const GrandChilComponent = (props) => {
  return (
    <>
      <h1>Grand Child Component</h1>
      <GreatGrandChildComponent data={props.data} />
    </>
  );
};

const GreatGrandChildComponent = (props) => {
  return (
    <>
      <h1>Great Grand Child Component</h1>
      <h1>I love {props.data}</h1>
    </>
  );
};
