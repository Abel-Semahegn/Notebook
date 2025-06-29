import Posts from "@/Articles/Posts/post.json"
import Articlecard from "@/components/article-card" // adjust path as needed

type Post = {
  title: string,
  description: string,
  fileName: string,
  dateCreated: string,
  imgUrl: string
}


export default function Journal() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">Journal</h1>
          <p className="text-muted-foreground">Latest articles and thoughts</p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {Posts.articles.map((post: Post, index: number) => (
              <Articlecard
                key={index}
                imgUrl={post.imgUrl}
                title={post.title}
                dateCreated={post.dateCreated}
                articleUrl={post.fileName.replace('.md', '')} // Remove .md extension for URL
              />
            ))}
          </div>
        </div>
      </div>

      {/* Empty state if no posts */}
      {Posts.articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found.</p>
        </div>
      )}
    </main>
  )
}