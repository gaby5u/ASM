const PartenerSlide = ({image, partener, alt}) => {
  return (
    <div className="bg-blue-100 border-2 border-blue-400 rounded-sm flex flex-col items-center justify-end h-[160px] gap-6 p-4 pt-8 mx-2">
      <img src={image} alt={alt} className="max-w-[150px] max-h-[50px]"/>
      <p className="uppercase text-blue-500 text-xl">{partener}</p>
    </div>
  )
}

export default PartenerSlide