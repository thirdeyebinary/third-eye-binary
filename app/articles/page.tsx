export default function ArticlesPage() {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl mb-6">Sacred Articles</h1>
        <div>
          <a href="/articles/test-article" className="text-blue-400 hover:text-blue-300 underline">
            Test Article
          </a>
        </div>
      </div>
    )
  }