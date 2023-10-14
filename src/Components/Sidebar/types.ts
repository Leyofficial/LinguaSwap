export interface  ISidebarItems {
    path : string,
    name : string,
    icon : string,
    callback? : any
}
export interface ISidebarItem extends ISidebarItems {
    index: number,
    sidebarOpen: boolean
}

export interface ISideBar {
    menuItems : ISidebarItems[],
    defaultOpen? : boolean
}

