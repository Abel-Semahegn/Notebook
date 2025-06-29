import { Link } from 'react-router';

export default function Articlecard({
    imgUrl = "https://via.placeholder.com/400x300?text=No+Image",
    title = "Article Title",
    dateCreated = "Jun 21",
    articleUrl = "tmp.md"
}) {
    return (
        <Link to={"/Post/"+articleUrl}>

            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg bg-background">
                {/* Background Image */}
                <img
                    src={imgUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-foreground">
                    <h2 className="text-xl font-bold mb-2 leading-tight">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium">
                        {dateCreated}
                    </p>
                </div>
            </div>
        </Link>
    );
}
