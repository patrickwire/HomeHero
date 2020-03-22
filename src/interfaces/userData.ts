export interface Action{
    title:string;
    amount:number;
    lastAdded:string;
    type:string;
    points:number;
}

export interface UserData{
    username:string,
    avatar:string,
    actions:Action[]
}