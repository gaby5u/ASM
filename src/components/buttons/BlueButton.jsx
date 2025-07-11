import { useNavigate } from "react-router";

const BlueButton = ({ to, text, className, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
      return;
    }
    if (!to) return;

    let finalTo = to;

    if (
      location.pathname.startsWith("/admin") &&
      !to.startsWith("/admin") &&
      to.startsWith("/")
    ) {
      finalTo = `/admin${to}`;
    }

    if (finalTo.startsWith("#")) {
      const target = document.getElementById(finalTo.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else if (finalTo.includes("#")) {
      const [path, hash] = finalTo.split("#");
      navigate(`${path}#${hash}`);
    } else {
      navigate(finalTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      {...props}
      className={`blue-button bg-blue-400 shadow-md text-white rounded-full py-2 px-6 text-center inline-block text-base lg:text-xl ${className}`}
    >
      {text}
    </button>
  );
};

export default BlueButton;
