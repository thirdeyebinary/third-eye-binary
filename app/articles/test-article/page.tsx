import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'

export default async function TestArticlePage() {
  const filePath = path.join(process.cwd(), 'articles', 'test-article.mdx')
  const fileContent = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto">
      <MDXRemote source={fileContent} />
    </div>
  )
}