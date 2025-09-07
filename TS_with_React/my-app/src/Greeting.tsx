import React from "react";

//defune the type of props
type GreetingProps = {
  name: string;
};


// Create the functional component and type its props
function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}

export default Greeting;          

