import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import News from "./components/News/News.tsx";
import ExploreMore from "./components/ExploreMore/ExploreMore.tsx";
import Footer from "./components/Footer.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import FrequentTravelers from "./components/FrequentTravelers.tsx";


function App() {
  return (
  <Page>
    
      <Header> 

        <Navigation />
        <Hero />

      </Header>
      
      <Main>
        <Steps />
        <Services />
        <News />
        <ExploreMore />
        <FrequentTravelers />
        <Testimonials />
      </Main>
      
      <Footer />
  </Page>
  );
}

export default App;
