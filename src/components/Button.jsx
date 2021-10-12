import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>{children}</button>
  )
}

export default Button
