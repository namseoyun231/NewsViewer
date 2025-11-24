import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

export default function NewsPage() {
    const { category } = useParams();

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
}