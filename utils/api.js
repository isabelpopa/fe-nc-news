import axios from "axios";

const baseURL = `https://nc-news-lb25.onrender.com/api`;

const ncNews = axios.create({ baseURL });

export const getArticles = () => {
    return ncNews.get(`/articles`).then(({ data }) => {
        return data.articles;
    })
};
export const getArticle = (article_id) => {
    return ncNews.get(`/articles/${article_id}`).then(({ data }) => {
        return data.article
    })
};

export const getComments = (article_id) => {
    return ncNews.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments
    })
};

export const updateArticleVoteUp = (article_id) => {
    return ncNews.patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
        return data.article
    })
};

export const updateArticleVoteDown = (article_id) => {
    return ncNews.patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then(({ data }) => {
        return data.article
    })
};


