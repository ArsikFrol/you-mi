import { StaticImageData } from 'next/image';

type ImageType = StaticImageData | string;

export interface IRelated {
    id: number,
    title: string;
    image: ImageType;
    link: string;
}

export interface IArticlesSection {
    id: number;
    titleSection: string;
    smallDesc: string;
    bigDesc: string;
    imageSection: ImageType;
    author: string;
    date: string;
    relatedArticles: IRelated[];
}

export interface IArticleCategory {
    linkName: string;
    titleArticle: string;
    imageArticle: ImageType;
    section: IArticlesSection[];
}

export interface IListArticles {
    relationships: IArticleCategory;
    careerAndFinances: IArticleCategory;
    emotions: IArticleCategory;
    depressiveState: IArticleCategory;
    relationship: IArticleCategory;
    careerAndFinance: IArticleCategory;
    emotion: IArticleCategory;
    depressiveStat: IArticleCategory;
    relationshi: IArticleCategory;
    careerAndFinanc: IArticleCategory;
    emotio: IArticleCategory;
    depressiveSta: IArticleCategory;
    [key: string]: IArticleCategory;
}

export interface IuseArticles {
    listArticles: IListArticles,
    popularListArticles: IRelated[]
}