const TopicRowRow = ({title,para,num}) => {
    return (
      <div className="border-b-2 p-2 border-[#A4AED5] pt-1 mb-1  w-full text-[#898AC9] rounded-md  hover:bg-[#898AC9] hover:text-[#FFFFFF]">
                      <div className="flex items-center justify-between flex-shrink-0">
                      <div className="pt-2">
                          <h3 className=" uppercase text-3xl font-semibold  ">{title}</h3>
                          <p className="text-[0.6rem] text-[#1D1A1D]">{para}</p>
                      </div>
                          <h4 className="text-4xl ">{num}</h4>
                      </div>
                      
                  </div>
    )
  }
  export default TopicRowRow