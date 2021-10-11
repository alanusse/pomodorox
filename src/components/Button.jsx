import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  return (
    <button className='button' {...props}>{children}</button>
  )
}

export default Button
