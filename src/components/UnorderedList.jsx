const UnorderedList = ({title, category}) => {
  return (
    <div className="w-full">
      <h2 className="font-rubik font-bold text-xl lg:text-[32px]">
        {title}
      </h2>
      <ul className="list-disc pl-6 mt-4">
        {category.map((item, index) => (
          <li key={index} className="text-sm lg:text-lg">
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
