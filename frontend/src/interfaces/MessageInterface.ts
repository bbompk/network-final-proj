export interface AuthorInterface {
    name?: string;
    avatar?: number;
}

export interface MessageInterface {
    author?: AuthorInterface;
    message?: string;
    timestamp?: string;
    isSticker?: boolean;
    sticker?: number;
}