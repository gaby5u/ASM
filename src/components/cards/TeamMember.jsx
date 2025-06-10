const TeamMember = ({ src, name, funct, gmail }) => {
  return (
    <div>
      <img
        src={src}
        alt={name}
        className="shadow-sm rounded-xl w-[364px] max-h-[260px] object-cover object-top "
      />
      <h3 className="mt-4 font-bold text-base lg:text-2xl">{name}</h3>
      <p className="text-sm my-[5px] lg:text-lg">{funct}</p>
      <a className="text-sm lg:text-lg" href={`mailto:${gmail}`}>{gmail}</a>
    </div>
  );
};

export default TeamMember;
