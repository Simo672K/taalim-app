
function TabContent({children}) {
  return (
    <section className="bg-[var(--tab-bg-color)] py-12">
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default TabContent