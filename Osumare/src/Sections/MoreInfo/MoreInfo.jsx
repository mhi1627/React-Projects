import Button from "../../Components/Button/Button"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"



export default function MoreInfo() {
  return (
      <div className="moreInfo flex flex-col items-center w-full mt-10">
          <SectionHeader header={`Driving Property Inquiries to Conversions`} subHeader={`Streamlined Strategies for Real Estate Success`}></SectionHeader>
          <div className="grid-cols-2 justify-items-center sm:flex sm:mt-10 mt-7 w-full">
            <div className="sm:w-1/2 flex justify-center">
            <img src="src\assets\bro.png" alt="" className="w-[80%] sm:h-[80%] lg:w-[70%] lg:h-[100%]"/>
            </div>
            <div className="flex flex-col sm:justify-evenly gap-5 sm:w-1/2 px-5">
              <h1 className="text-2xl mt-5 font-black sm:text-3xl ">Optimized Path to Property Purchase</h1>
              <p className="sm:text-xl lg:w-2/3">
              In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
              </p>
              <Button style={`bg-[#0078FF] h-12 sm:w-40 text-white hover:bg-transparent`}>Get Started</Button>
            </div>
          </div>
        </div>
  )
}
