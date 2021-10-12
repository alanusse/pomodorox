import './IconButton.css'

// eslint-disable-next-line react/prop-types
const IconButton = ({ children, className, ...props }) => {
  return (
    <button className={`icon-button ${className}`} {...props}>
      {children}
    </button>
  )
}

export default IconButton
