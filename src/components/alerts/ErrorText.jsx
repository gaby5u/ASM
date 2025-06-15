
const ErrorText = ({errorMessage}) => {
  if (!errorMessage) return null;
  return (
    <p className="text-sm text-red-500">{errorMessage}</p>
  )
}

export default ErrorText