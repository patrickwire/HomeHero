export interface Action{
    name:string;
    amount:number;
    lastAdded:string;
    category:string;
}

export interface UserData{
    username:string,
    avatar:string,
    actions:Action[]
}