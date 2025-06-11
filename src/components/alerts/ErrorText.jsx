
const ErrorText = ({errorMessage}) => {
  if (!errorMessage) return nullș
  return (
    <p className="text-sm text-red-500">{errorMessage}</p>
  )
}

export default ErrorText