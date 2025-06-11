const SocialMediaIcon = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-[40px] h-[40px] p-3 bg-blue-500 rounded-full transition-all duration-200 hover:bg-blue-400 hover:-translate-y-1 hover:shadow-[0_0_10px_0_rgba(48,81,230,0.541)] active:translate-y-0 active:scale-95 active:bg-blue-400 lg:w-[49px] lg:h-[49px]"
    >
      {children}
    </a>
  );
};

export default SocialMediaIcon;
