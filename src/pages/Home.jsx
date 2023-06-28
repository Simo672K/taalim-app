import Header from "../components/Header";
import TabsContainer from "../components/TabsContainer";
import TabsHeaderContainer from "../components/TabsHeaderContainer";
import TabHead from "../components/TabHead";
import TabContent from "../components/TabContent";
import CardContainer from "../components/CardContainer";
import CardsGrid from "../components/CardsGrid";
import content from "../data/cards";
import {FaChevronRight} from "react-icons/fa";
import FrIcon from "../assets/images/fr.png";
import EnIcon from "../assets/images/en.png";
import EsIcon from "../assets/images/es.png";
import ItIcon from "../assets/images/it.png";
import DuIcon from "../assets/images/du.png";

function Home() {

  return (
    <>
      <Header />
      <TabsContainer>
        <TabsHeaderContainer>
          <TabHead iconImg={FrIcon} descrp="Francais"/>
          <TabHead iconImg={EnIcon} descrp="Englais" actif={true}/>
          <TabHead iconImg={EsIcon} descrp="Espagnol"/>
          <TabHead iconImg={ItIcon} descrp="Italien"/>
          <TabHead iconImg={DuIcon} descrp="Allemand"/>
        </TabsHeaderContainer>
        <TabContent>
          <CardsGrid>
            {content.map(
              item=> <CardContainer key={item.id} data={item.data}/>
            )}
          </CardsGrid>
        </TabContent>
        <div className="container mx-auto pb-5 flex justify-center">
          <button className="btn hover:bg-gray-50 hover:border-gray-50 bg-white border-white text-gray-800">Voire tous les enseignants <FaChevronRight className="ms-2"/></button>
        </div>
      </TabsContainer>
    </>
  )
}

export default Home