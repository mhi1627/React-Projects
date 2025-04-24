import InsightsCard from "../../Components/InsightsCard/InsightsCard";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import './insights.css'
export default function Insights() {
  return (
    <div className="mt-2 lg:h-screen">
        <SectionHeader header={`Navigating Real Estate's Digital Landscape`} subHeader={`Insights for Real Estate Marketing Advantage`}></SectionHeader>
      <div className="flex p-4 lg:relative items-center justify-center sm:mt-7">
      <div className="insightCardsHolder flex flex-col gap-2 mt-5 lg:mt-0 lg:absolute lg:z-1 lg:left-55 w-2/3">
            <InsightsCard insighTHeading={`Market Trends Analysis`} insightDescription={`Predictive insights to guide real estate strategies.`} insightIcon={`src/assets/Icons/bard-fill.png`}></InsightsCard>
            <InsightsCard insighTHeading={`Targeted Buyer Persona`} insightDescription={`Understand and connect with your ideal property buyers.`} insightIcon={`src/assets/Icons/flashlight-fill.png`}></InsightsCard>
            <InsightsCard insighTHeading={`Competitor Insights`} insightDescription={`Stand out in the property market with informed strategies.`} insightIcon={`src/assets/Icons/shield-check-fill.png`}></InsightsCard>
            <InsightsCard insighTHeading={`Visual Content Appeal`} insightDescription={`Captivate buyers with appealing visuals and immersive experiences.`} insightIcon={`src/assets/Icons/phone-find-fill.png`}></InsightsCard>
        </div>
        <div className="insightsImg hidden lg:block bg-[#F9F9F9] lg:w-1/2 lg:absolute lg:right-10"> 
            <img src="src\assets\rafiki.png" alt="" />
        </div>
      </div>
    </div>
  )
}
