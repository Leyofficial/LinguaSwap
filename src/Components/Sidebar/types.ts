export interface  ISidebarItems {
    thisIsAvatar? : boolean
    path : string,
    name : string,
    icon : string | undefined,
    callback? : (value :  boolean) => void
}
export interface ISidebarItem extends ISidebarItems {
    index: number,
    sidebarOpen: boolean
}

export interface ISideBar {
    menuItems? : ISidebarItems[],
    defaultOpen? : boolean
}

