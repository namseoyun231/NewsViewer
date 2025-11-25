import { useState, useEffect } from "react";
import styles from "./NewsList.module.css";
import NewsItem from "./NewsItem";
import axios from "axios";
import { useParams } from "react-router-dom";

type Article = {
    url: string;
    title: string;
    urlToImage: string | null;
    description: string | null;
};

export default function NewsList() {
    const { category } = useParams<{ category?: string }>();
    const selectedCategory =
        !category || category === "all" ? "" : `&category=${category}`;

    const [articles, setArticles] = useState<Article[] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const apiKey = import.meta.env.VITE_NEWS_API_KEY;
                const url = `https://newsapi.org/v2/top-headlines?country=us${selectedCategory}&apiKey=${apiKey}`;

                const response = await axios.get(url);
                setArticles(response.data.articles);
            } catch (e) {
                console.error(e);
                setArticles([]);
            }
            setLoading(false);
        };
        fetchData();
    }, [selectedCategory]);

    if (loading) {
        return <div className={styles.newsListBlock}>Loading...</div>;
    }

    if (!articles) return null;

    return (
        <div className={styles.newsList}>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
}
