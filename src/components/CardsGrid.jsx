function CardsGrid({children}) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:px-4 lg:px-0 px-6">{children}</div>
  )
}

export default CardsGrid