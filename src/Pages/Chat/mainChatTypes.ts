interface IMessage{
    author:string,
    date:string,
    message:string,
    _id:string
}
export interface IDialog{
    createDate:string,
    members:{
        first:string,
        second:string,
    },
    _id:string,
    messages:IMessage[]

}