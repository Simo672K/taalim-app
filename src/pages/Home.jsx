import Header from "../components/Header";
import TabsContainer from "../components/TabsContainer";
import TabsHeaderContainer from "../components/TabsHeaderContainer";
import FrIcon from "../assets/images/fr.png";
import TabHead from "../components/TabHead";

function Home() {
  return (
    <>
      <Header />
      <TabsContainer>
        <TabsHeaderContainer>
          <TabHead iconImg={FrIcon} descrp="Francais"/>
          <TabHead iconImg={FrIcon} descrp="Francais" actif={true}/>
          <TabHead iconImg={FrIcon} descrp="Francais"/>
          <TabHead iconImg={FrIcon} descrp="Francais"/>
        </TabsHeaderContainer>
      </TabsContainer>
      <div className="mb-96"></div>
    </>
  )
}

export default Home