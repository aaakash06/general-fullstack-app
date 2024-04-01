import { Interface } from "readline";

export interface linkType{
name: string;   path: string; 

}


export interface contextType{
isOpen?: boolean; 
setIsOpen?:  React.Dispatch<React.SetStateAction<boolean>>; 
handleMenu?: ()=>void; 
}
