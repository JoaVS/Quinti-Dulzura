export interface menuItem {
    item: string
    img: string
    description: string
    precio: number,
    flavours?: string[],
    combos?: [string,number][]
    id:string
}