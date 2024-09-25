// import { useState } from 'react'
// import { Counter } from './Hooks/useState'
import "./App.css";
// import { ReactMemo } from "./Hooks/Memo/ReactMemo";
import UseCallback from "./Hooks/Memo/UseCallback";
// import MemoParentComponent from "./Hooks/Memo/UseMemo";
// import { BioProvider } from "./Hooks/ContextApi";
// import { Home } from "./Hooks/ContextApi/Home";
// import { About } from "./Hooks/ContextApi/About";
// import { Services } from "./Hooks/ContextApi/Services";
// import { ReducerComp } from "./Hooks/useReducer";
// import { ParentComponent } from "./Hooks/PropDrilling";
// import { UseRef } from "./Hooks/useRef";
// import { ForwardRefs } from "./Hooks/useRef/ForwardRef";
// import { UseId } from "./Hooks/UseId";


function App() {
  // const [count, setCount] = useState(0)
  return (
    // <>
    // // useState
    // <ShortCircuitExample />
    // <Counter />
    // <CounterChallenge />
    // <RegistrationFrom />
    // <RegistrationFromReact />
    // <LoginForm />
    // <ContactForm />

    //// useEffect
    // <ReactuseEffect />
    // < EffectChallenge />
    // <CleanUp />
    // <HowNotToFetchApi />

    //// useRef
    // </>
    // <UseRef/>
    // <ForwardRefs />

    // UseId
    // <UseId />

    // Prop drilling
    // <ParentComponent />

    // ContextApi, custom Hook
    //   <>
    //     <BioProvider>
    //       <Home />
    //       <About />
    //       <Services />
    //     </BioProvider>

    //  </>

    // Use Reducer Hook
    //  <ReducerComp />

    // Memo
    <>
      {/* <ReactMemo /> */}
      {/* <MemoParentComponent /> */}

      <UseCallback />
    </>
  );
}

export default App;
