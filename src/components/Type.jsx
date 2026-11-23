import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Freelancer",
          "Full-Stack Developer",
          "Software Developer",
          "Web3 Facilitator",
          "Dev @ Cognitus Consulting | Coursera Initiative",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
