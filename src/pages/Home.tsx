import Markdown from 'react-markdown'
import aboutContent from '@/Articles/about.md?raw'

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="prose prose-stone prose-lg dark:prose-invert p-2 prose-img:rounded-xl prose-headings:underline prose-a:underline">

        <Markdown>{aboutContent}</Markdown>
      </div>
    </main>
  )
}