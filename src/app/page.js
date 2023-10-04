"use client"

import axios from "axios"
import Result from "postcss/lib/result"
import { useEffect, useState } from "react"




export default function Page(){
  const [result, setResult] = useState([])

  const config = {
    headers:{
      "X-Auth-Token": "22c87d6879dd4f27850097d97e0bdd9d"
    }
  };
  
  useEffect(() => {
    axios.get('https://api.football-data.org/v4/competitions/BSA/matches?dateFrom=2023-10-07&dateTo=2023-10-07',config).then((response) => {
      console.log(response)
    })
  } ,[])
  return (
    <div>
      {result.map((item, index) => {
        return (
          <div>{item.homeTeam.name}</div>
        )
      })}
    </div>
  )
}