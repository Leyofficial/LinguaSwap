export interface INavItems {
    navItems  : INavWrapper[]
}
export interface INavWrapper {
    text : string ,
    link : string ,
}
export interface INavItem extends  INavWrapper{
    index : number,
}