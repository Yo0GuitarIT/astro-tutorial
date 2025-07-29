import { useState } from "preact/hooks";

type GreetingProps = {
  messages: string[];
};

const Greeting = ({ messages }: GreetingProps) => {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(randomMessage());
  const OnClick = () => setGreeting(randomMessage());

  return (
    <div>
      <h3>{greeting}! Thank you for your visiting!</h3>
      <button onClick={OnClick}>New Greeting</button>
    </div>
  );
};

export default Greeting;
