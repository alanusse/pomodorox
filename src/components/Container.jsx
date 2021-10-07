// eslint-disable-next-line react/prop-types
const Container = ({ header, children }) => {
  return (
    <section>
      {header && <header>{header}</header>}
      <div>
        {children}
      </div>
    </section>
  )
}

export default Container
