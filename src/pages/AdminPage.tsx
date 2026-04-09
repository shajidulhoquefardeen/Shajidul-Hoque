import { useState } from 'react';
import { Lock, PenLine, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminPage() {
  // This is a placeholder for actual authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6">
        <div className="bg-surface border border-white/10 p-8 rounded-2xl max-w-md w-full relative">
          <Link to="/" className="absolute top-4 left-4 text-muted hover:text-white text-sm">
            &larr; Back to site
          </Link>
          <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 mx-auto mt-4">
            <Lock className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Access</h1>
          <p className="text-muted text-center mb-8">Sign in to manage your blog posts.</p>
          
          <button 
            onClick={() => setIsAuthenticated(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl px-4 py-3 transition-colors"
          >
            Simulate Login
          </button>
          <p className="text-xs text-muted text-center mt-6">
            Note: This is currently a UI mockup. We need to connect a database (like Firebase) to make this secure and functional.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <PenLine className="w-8 h-8 text-indigo-400" />
            Blog Dashboard
          </h1>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-muted hover:text-white transition-colors text-sm">
              View Site
            </Link>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm bg-surface px-4 py-2 rounded-lg border border-white/10"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        <div className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Create New Post</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Post Title</label>
              <input 
                type="text" 
                placeholder="e.g., How I built my portfolio"
                className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
              <textarea 
                rows={12}
                placeholder="Write your blog post here..."
                className="w-full bg-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-y"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl px-6 py-3 transition-colors">
              Publish Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
