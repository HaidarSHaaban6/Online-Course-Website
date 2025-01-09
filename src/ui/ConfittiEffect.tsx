import { useEffect } from "react";

interface ConfittiEffect {
  count: number;
  widthVariations: number[];
  colorVariations: string[];
  duration: number;
  delay: number;
  show: boolean;
}

const ConfittiEffect = ({
  count,
  widthVariations,
  colorVariations,
  duration,
  delay,
  show,
}: ConfittiEffect) => {
  const confettiArray = Array.from({ length: count }, () => (
    <div
      key={Math.random()}
      className="confetti"
      style={{
        width:
          widthVariations[Math.floor(Math.random() * widthVariations.length)],
        aspectRatio: 1,
        backgroundColor:
          colorVariations[Math.floor(Math.random() * colorVariations.length)],
        position: "fixed",
        bottom: "100%",
        left: Math.random() * 99 + "%",
        transitionDuration: Math.floor(Math.random() * duration) + "s",
        transitionDelay: Math.random() * delay + "s",
        borderRadius: "50%",
        zIndex: 100,
      }}
    />
  ));

  useEffect(() => {
    setTimeout(() => {
      const confettiElements: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".confetti");
    confettiElements.forEach((confetti) => {
      confetti.style.transform =
        "translateY(" + Math.floor(Math.random() * 200) + "vh)";
      confetti.style.opacity = "0";
    });
    }, 100)
  }, [show]);

  return <div>{show && confettiArray}</div>;
};

export default ConfittiEffect;
