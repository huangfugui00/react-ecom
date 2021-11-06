//该文件暂未使用
export type apiCommentType = {
    _id:string,
    text:string,
    rate:number,
}

export type apiProductType = {
    _id:string,
    thumb:string,
    imgs?:string[],
    intro:string,
    description:string,
    price:number,
    category:string,
    tags?:string[],
    favorite:number,
    createdAt:string,
    averageRate:number,
    comments:apiCommentType[],   
}