import axios from "axios";

const baseURL = `https://nc-news-lb25.onrender.com/api`;

const ncNews = axios.create({ baseURL });

export const getUsers = () => {
    return ncNews.get(`/users`).then(({ data }) => {
        return data.users;
    })
};

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

export const postComment = (article_id, comment) => {
    return ncNews.post(`/articles/${article_id}/comments`, comment).then(({ data }) => {
        return data.comment;
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

export const getTopics = () => {
    return ncNews.get(`/topics`).then(({ data }) => {
        return data.topics;
    })
};


