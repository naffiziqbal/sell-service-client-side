import { useQuery } from "@tanstack/react-query";
import React from "react";
import Sport from "./Sport";

const Sports = () => {
    const {data : sports =[]} = useQuery({
        queryKey : ['sports'],
        queryFn : ()=> fetch(`https://second-sell.vercel.app/product/Cafe%20Racer`)
        .then(res => res.json())
    })
  return (
    <div>
      <p> All Sports Category Data Here</p>
      <div>
        {
sports.map(sport => <Sport key={sport._id}
    sport = {sport} />)
        }
      </div>
    </div>
  );
};

export default Sports;
