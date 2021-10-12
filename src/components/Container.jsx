import './Container.css'

// eslint-disable-next-line react/prop-types
const Container = ({ header, children, className, ...props }) => {
  return (
    <section className={`container ${className}`} {...props}>
      {header && <header className='container__header'>{header}</header>}
      <div className='container__body'>
        {children}
      </div>
    </section>
  )
}

export default Container
