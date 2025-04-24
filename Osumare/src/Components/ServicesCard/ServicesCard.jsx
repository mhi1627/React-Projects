

import './serviceCard.css'
export default function ServicesCard({iconUrl,heading,description}) {
  return (
    <div className="serviceCard bg-white hover:scale-1.1 hover:cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102">
        <div className="round w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#F5F5F5] flex justify-center items-center">
            <img src={iconUrl} alt="" />
        </div>
        <h3 className="text-md  sm:text-lg font-bold text-center w-full">{heading}</h3>
        <p className=" cardDescription sm:block text-center">{description}</p>
    </div>
  )
}
