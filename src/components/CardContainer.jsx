import CardDescription from "./CardDescription"
import CardThumbnail from "./CardThumbnail"

function CardContainer({data}) {
  const {nom, intro, thumbnail, lessons, level, houreRate, rating} = data;
  return (
    <div className="card bg-white">
      <CardThumbnail introVid={intro} thumbnailImg={thumbnail} lessonsNum={lessons} rating={rating}/>
      <CardDescription name={nom} level={level} houreRate={houreRate} />
    </div>
  )
}

export default CardContainer