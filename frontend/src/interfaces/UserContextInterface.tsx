export interface UserContextInterface {
  username?: string;
  changeUsername?:  (newName:string)=>void;
  room?: string;
  changeRoom?: (newRoom:string)=>void;
}