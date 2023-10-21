export interface  ISidebarItems {
    path : string,
    name : string,
    icon : string,
<<<<<<< HEAD
    callback? : any
=======
    callback? : boolean
>>>>>>> 31b699e (fix after bad merge)
}
export interface ISidebarItem extends ISidebarItems {
    index: number,
    sidebarOpen: boolean
}

export interface ISideBar {
    menuItems : ISidebarItems[],
    defaultOpen? : boolean
}

