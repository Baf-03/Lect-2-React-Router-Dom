import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Spinner } from "@material-tailwind/react";

export default function SingleItems() {
  let { productid } = useParams();
  console.log(productid);
  let [ApiData, setApiData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productid}`
      );
      let data = response.data;
      setApiData(data);
      setIsLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getApi();
  }, [productid]); // Make sure to run the effect whenever productid changes

  return (
    <div className="bg-black h-[100vh]">
    <div className="font-bold text-[3rem] capitalize text-center text-red-500" >{ApiData.title}</div>
      
        <div>
         
            {isLoading ? (
              <div className="w-[100%] h-[100vh] flex justify-center items-center">loading<Spinner className="h-16 w-16 text-gray-900/50" /></div>
            ) : (
                <div className="w-[40%] h-[50vh] mt-[100px] flex justify-center  mx-auto">
                <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-red-600" : "w-4 bg-black"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
             { ApiData.images.map((element) => (
                <img
                  key={element} 
                  src={element}
                  alt="image 3"
                  className="h-[100%] w-[100%]"
                />
              ))}
              </Carousel>
               <div>
               <div className="font-bold text-purple-700 text-[3rem]">Price:{ApiData.price}</div>
             </div>
             </div>
            )}
          
        
       
      </div>
    </div>
  );
}
