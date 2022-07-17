export declare global {
    type Idea = {
        title: string,
        description: string,
        imageAlt: string,
        imagePath: string,
        likesCount: string,
        commentsCount: string,
        owner: string,
        category?: string,
    }
}