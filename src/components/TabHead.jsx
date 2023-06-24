import Icon from "./Icon"

function TabHead({iconImg, descrp, actif}) {
  return (
    <button className={"tab tab-lifted py-2"+(actif? " tab-active active-tab" : " border-0 h-fit")} style={{height: "fit-content !important"}}>
      <Icon iconImg={iconImg}/>
      <span className="text-lg text-gray-600 font-semibold">{descrp}</span>
      {
        actif ? 
        <span className="hide-botto-border"></span> :
        null
      }
    </button>
  )
}

export default TabHead