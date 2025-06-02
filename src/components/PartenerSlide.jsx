const PartenerSlide = ({image, partener, alt}) => {
  return (
    <div className="bg-blue-500 rounded-sm flex flex-col items-center justify-end h-[150px] gap-6 p-4 pt-8">
      <img src={image} alt={alt} />
      <p className="uppercase text-white text-xl">{partener}</p>
    </div>
  )
}

export default PartenerSlide