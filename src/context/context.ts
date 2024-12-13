import { createContext } from "react";
// creating a userType
export type userType ={id:number,name:string,role:string};
// creating the contextype
export type userContextType= userType & {login:(user:userType)=>void,logout:()=>void}
//creating the context
export const UserContext= createContext<userContextType>({id:0,name:'',role:'',login:()=>{}, logout:()=>{}})