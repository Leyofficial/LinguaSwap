export interface ISidebarProps {
    index : string | number,
    path : string,
    callback:any
    icon : string,
    name : string
    sidebarOpen : boolean
}

export interface ISidebar {
    menuItems : any[] ,
    defaultOpen : boolean
}