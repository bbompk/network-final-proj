export interface UserContextInterface {
  username?: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>
  room?: string;
  setRoom?: React.Dispatch<React.SetStateAction<string>>
}