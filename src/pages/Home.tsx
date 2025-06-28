import Markdown from 'react-markdown'
import aboutContent from '@/Articles/about.md?raw'

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="prose prose-stone prose-lg dark:prose-invert p-2">

        <Markdown >{aboutContent}</Markdown>
      </div>
    </main>
  )
}