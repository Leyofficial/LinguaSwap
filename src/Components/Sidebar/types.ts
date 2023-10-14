export interface  ISidebarItems {
    path : string,
    name : string,
    icon : string,
    callback? : boolean
}

export interface ISideBar {
    menuItems : ISidebarItems[],
    defaultOpen? : boolean
}