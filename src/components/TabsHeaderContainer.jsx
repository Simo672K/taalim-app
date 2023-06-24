function TabsHeaderContainer({children}) {
  return (
    <div className="bg-white pt-8 flex justify-center border-b">
      <div className="tabs">{children}</div>
    </div>
  )
}

export default TabsHeaderContainer