const TeamMember = ({ src, name, funct, gmail }) => {
  return (
    <div>
      <img
        src={src}
        alt={name}
        className="shadow-sm rounded-xl w-[100vw] max-h-[200px] xs:max-h-[300px] sm:w-[264px] sm:max-h-[160px] object-cover object-top lg:w-[364px] lg:max-h-[260px]"
      />
      <h3 className="mt-4 font-bold text-base lg:text-2xl">{name}</h3>
      <p className="text-sm my-[5px] lg:text-lg">{funct}</p>
      <a className="text-sm lg:text-lg" href={`mailto:${gmail}`}>{gmail}</a>
    </div>
  );
};

export default TeamMember;
