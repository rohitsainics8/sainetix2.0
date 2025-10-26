import React, { useState, useEffect } from 'react';
import type { BlogPost } from '../types';
import AnimatedSection from './AnimatedSection';
import UserIcon from './icons/UserIcon';
import CalendarIcon from './icons/CalendarIcon';

// Custom CSS for styling the article content
const articleStyles = `
  .article-content h1, .article-content h2, .article-content h3 {
    font-weight: 700;
    color: #F9FAFB; /* gray-50 */
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  .article-content h1 { font-size: 2.25rem; }
  .article-content h2 { font-size: 1.875rem; }
  .article-content h3 { font-size: 1.5rem; }
  .article-content p {
    line-height: 1.75;
    margin-bottom: 1.25em;
  }
  .article-content a {
    color: #818CF8; /* indigo-400 */
    text-decoration: underline;
  }
  .article-content ul, .article-content ol {
    margin-left: 1.5rem;
    margin-bottom: 1.25em;
  }
  .article-content ul { list-style-type: disc; }
  .article-content ol { list-style-type: decimal; }
  .article-content li { margin-bottom: 0.5em; }
  .article-content blockquote {
    border-left: 4px solid #6366F1; /* indigo-500 */
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: #D1D5DB; /* gray-300 */
  }
`;

const BlogPostPage: React.FC<{ slug: string; setActiveRoute: (route: string) => void; }> = ({ slug, setActiveRoute }) => {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedPosts = localStorage.getItem('blogPosts');
            if (storedPosts) {
                const posts: BlogPost[] = JSON.parse(storedPosts);
                const foundPost = posts.find(p => p.slug === slug);
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    setError('Blog post not found.');
                }
            } else {
                setError('No blog posts available.');
            }
        } catch (err) {
            setError('Failed to load blog post.');
            console.error(err);
        }
    }, [slug]);

    if (error) {
        return (
            <div className="py-24 pt-36 min-h-screen flex items-center justify-center text-center">
                <div>
                    <h2 className="text-3xl font-bold text-red-400 mb-4">Error</h2>
                    <p className="text-zinc-400">{error}</p>
                    <button onClick={() => setActiveRoute('/blog')} className="mt-8 text-indigo-400 font-semibold hover:text-indigo-300">
                        &larr; Back to Blog
                    </button>
                </div>
            </div>
        );
    }
    
    if (!post) {
        return (
             <div className="py-24 pt-36 min-h-screen flex items-center justify-center">
                 <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="py-24 pt-36 bg-zinc-950">
            <style>{articleStyles}</style>
            <div className="container max-w-4xl mx-auto px-6">
                <AnimatedSection>
                     <button onClick={() => setActiveRoute('/blog')} className="mb-8 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors inline-flex items-center">
                        &larr; Back to All Posts
                     </button>
                    <p className="text-indigo-400 font-semibold">{post.category}</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 tracking-tight">{post.title}</h1>
                    <div className="flex items-center text-sm text-zinc-400 space-x-6 border-y border-white/10 py-4">
                        <span className="flex items-center"><UserIcon className="w-5 h-5 mr-2" />{post.author}</span>
                        <span className="flex items-center"><CalendarIcon className="w-5 h-5 mr-2" />{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection delay="delay-200">
                    <div className="aspect-video my-8 rounded-xl overflow-hidden shadow-lg">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                </AnimatedSection>

                <AnimatedSection delay="delay-400">
                    <div 
                        className="text-zinc-300 text-lg leading-relaxed article-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </AnimatedSection>
            </div>
        </div>
    );
};

export default BlogPostPage;