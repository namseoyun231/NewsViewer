import { Routes, Route } from "react-router-dom";
import NewsPage from "./components/NewsPage";

export default function App() {
    return (
        <Routes>
            {/* 전체보기 */}
            <Route path="/" element={<NewsPage />} />

            {/* 카테고리별 */}
            <Route path="/:category" element={<NewsPage />} />
        </Routes>
    );
}
