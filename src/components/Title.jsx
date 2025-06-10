
const Title = ({subtitle, title, highlited, className="", customClassName=""}) => {

  const highligth = (highlitedText) => {

    if (!highlitedText) return title;

    const parts  = title.split(highlitedText);

    return (
      <>
      {parts[0]}
      <span className="text-red-500">{highlitedText}</span>
      {parts[1]}
      </>
    )
  }


  return (
    <>
      <div className={`text-blue-500 font-semibold ${customClassName=="" ? "my-8 md:my-16" : customClassName} ${className}`}>
        {
          subtitle && (
        <div className="flex items-center gap-2">
          <div className='font-dm w-[6px] h-[6px] rounded-full bg-red-400'></div>
          <p className="font-dm uppercase tracking-wide text-[10px] lg:text-[14px]">{subtitle}</p>
        </div>
          )
        }
        <h1 className="font-rubik mt-2 text-3xl lg:text-5xl/13 lg:mt-6">{highligth(highlited)}</h1>
      </div>
    </>
  )
}

export default Title