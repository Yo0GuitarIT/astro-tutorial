import { useState } from "react";

type GreetingProps = {
  messages: string[];
};

function Greeting({ messages }: GreetingProps) {
  const [greeting, setGreeting] = useState(messages[0] || "Hello");

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const OnClick = () => setGreeting(randomMessage());

  return (
    <div>
      <h3>{greeting}! Thank you for your visiting!</h3>
      <button onClick={OnClick}>New Greeting</button>
    </div>
  );
}

export default Greeting;
