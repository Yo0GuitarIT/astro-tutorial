// 所有資料都在伺服器端的 frontmatter 中定義
const identity = {
  firstName: "Yu Ling",
  country: "Taiwan",
  occupation: "Software Engineer",
  hobbies: ["Anime", "Songwriting", "Coding"],
};

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Astro",
  "CSS",
  "HTML",
];

function AboutPage() {
  return (
    <>
      <h2>... and my new Astro site!</h2>
      <p>
        I am working through Astro's introductory tutorial. This is the second
        page on my website, and it's the first one I built myself!
      </p>
      <p>
        This site will update as I complete more of the tutorial, so keep
        checking back and see how my journey is going!
      </p>

      <p>Here are a few facts about me:</p>
      <ul>
        <li>My name is {identity.firstName}.</li>
        <li>
          I live in {identity.country} and I work as a {identity.occupation}.
        </li>
        {identity.hobbies.length >= 2 && (
          <li>
            Two of my hobbies are: {identity.hobbies[0]} and{" "}
            {identity.hobbies[1]}
          </li>
        )}
      </ul>
      <p>My skills are:</p>
      <ul>
        {skills.map(skill => (
          <li
            key={skill}
            style={{
              color: "navy",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>

      <p>I am happy to be learning Astro!</p>
      <p>I finished this tutorial!</p>
      <p>My goal is to finish in 3 days.</p>
    </>
  );
}

export default AboutPage;
