import  { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Markdown from "react-markdown";

export default function Post() {
  const params = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postSlug = params.slug; // from /posts/:slug
        const markdownModule = await import(`@/Articles/Posts/${postSlug}.md?raw`);
        setContent(markdownModule.default);
      } catch (error) {
        setContent('# Post Not Found\n\nThe requested post could not be loaded.'+error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [params.slug]);

  if (loading) return <div className="p-6"></div>;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <article className="prose prose-lg dark:prose-invert">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}