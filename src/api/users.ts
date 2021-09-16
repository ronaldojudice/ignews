import { NextApiRequest,NextApiResponse } from "next";

export default (request:NextApiRequest, response:NextApiResponse)=>{
  const users =[
    {id:1,name:'Ronaldo'},
    {id:2,name:'Sancho'},
    {id:3,name:'Greenwood'},
  ]

  return response.json(users)
}