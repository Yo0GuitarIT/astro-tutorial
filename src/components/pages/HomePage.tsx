import Greeting from "@/components/Greeting";

function HomePage() {
  return (
    <>
      <h2>My awesome blog subtitle</h2>
      <Greeting messages={["Hi", "Hello", "Howdy", "Hey there"]} />
    </>
  );
}

export default HomePage;
