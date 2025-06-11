import { useNavigate } from "react-router"

const BlueButton = ({to, text, className, ...props}) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!to) return;

    if (to.startsWith("#")) {
      // Scroll în pagina curentă
      const target = document.getElementById(to.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else if (to.includes("#")) {
      // Navigare pe altă pagină + secțiune
      const [path, hash] = to.split("#");
      navigate(`${path}#${hash}`)
    } else {
      // Navigare simplă
      navigate(to);
    }

  };

  return (
    <button onClick={handleClick} {...props} className={`blue-button bg-blue-400 shadow-md text-white rounded-full py-2 px-6 text-center inline-block text-base lg:text-xl ${className}`}>
      {text}
    </button>
  )
}

export default BlueButton