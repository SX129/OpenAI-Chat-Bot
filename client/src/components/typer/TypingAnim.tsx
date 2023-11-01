import { TypeAnimation } from "react-type-animation";

//Typing animation component for home
const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "A Chat-GPT Clone",
        1000,
        "Built with OpenAI : GPT-3.5 Turbo",
        2000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
