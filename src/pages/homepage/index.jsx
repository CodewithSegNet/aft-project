import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import Firstpage from "../../layouts/FirstLayer" 




const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
  <title>AftA – African Dating App for Love Within and Beyond</title>
  <meta
    name="description"
    content="AftA is the ultimate African dating app connecting singles across the continent and around the world. Find love, friendship, and meaningful relationships rooted in African culture."
  />
  <meta
    name="keywords"
    content="African dating app, AftA, dating in Africa, African singles, love in Africa, diaspora dating, African relationships, find love, African matchmaking"
  />
  <meta
    property="og:title"
    content="AftA – Connect with African Singles Worldwide"
  />
  <meta
    property="og:description"
    content="Looking for love in Africa or among the African diaspora? AftA is the dating platform that brings African singles together for genuine connections and lasting relationships."
  />
  <meta
    property="og:url"
    content="https://www.afta.com"
  />
  <meta
    property="og:image"
    content="https://www.afta.com/og-image.jpg"
  />
  <meta
    name="twitter:title"
    content="AftA – The #1 Dating App for African Singles"
  />
  <meta
    name="twitter:description"
    content="Join AftA to meet and date African singles near you or around the world. Safe, fun, and culturally rooted dating for Africans and the diaspora."
  />
  <meta
    name="twitter:image"
    content="https://www.afta.com/twitter-image.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://www.afta.com" />
</Helmet>

        <div>

          <div  className="mx-4 md:mx-6 md:mt-[8rem] lg:mt-[1rem] pb-[7rem] lg:pb-[8rem]">
          <Navbar />
          </div>
  
  <div className="md:pt-[22rem] lg:pt-[0rem]">
  <Firstpage/>
  </div>



  <div className="mx-4 md:mx-6">
{/* <Categorypage/> */}
  </div>


<div className="mx-4 md:mx-6 ">
{/* <Thirdpage/> */}
</div>



<div className="mx-4 md:mx-6 mt-[2rem]">
{/* <DonateCard/> */}
</div>

<div className="mt-[1rem]">
{/* <Fifthpage/> */}
</div>

<div className="mx-4 md:mx-6 mt-[2rem] lg:mt-[4rem]">
{/* <Sixthpage/> */}
</div>

  <div className="mt-[1rem]">
    {/* <Sectionpage/> */}
  </div>


<div className="">
  <Footer/>
</div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default HomePage;
