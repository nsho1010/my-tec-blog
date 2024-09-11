export interface AboutTypes {
    id: string;
    content: string;
    createAt: string;
    publishedAt: string;
    updatedAt: string
}

export interface CategoryTypes {
    id: string;
    name: string;
    color: string;
}

export interface BlogType {
    id: string
    title: string;
    content: string;
    image: {
        url: string
    }
    category: CategoryTypes;
    ranking?:number;
    isRecommended:boolean;
    isSpecial:boolean;
    createdAt: string
    publishedAt: string
    updatedAt: string
}