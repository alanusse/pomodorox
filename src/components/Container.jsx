import './Container.css'

// eslint-disable-next-line react/prop-types
const Container = ({ header, children }) => {
  return (
    <section className='container'>
      {header && <header className='container__header'>{header}</header>}
      <div className='container__body'>
        {children}
      </div>
    </section>
  )
}

export default Container
