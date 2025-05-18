
export type RouteType = {
    path: string
    view: React.ComponentType
    children?: RouteType[];
}