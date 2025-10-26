import React, { useState } from 'react';
import type { BlogPost } from '../types';
import AnimatedSection from './AnimatedSection';

const CreatePostPage: React.FC<{ setActiveRoute: (route: string) => void; }> = ({ setActiveRoute }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Sainetix Team');
    const [category, setCategory] = useState('AI & Tech');
    const [coverImage, setCoverImage] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w-]+/g, '') // Remove all non-word chars
            .replace(/--+/g, '-'); // Replace multiple - with single -
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!title || !content || !author || !category || !coverImage || !excerpt) {
            setError('All fields are required.');
            return;
        }

        setIsLoading(true);

        try {
            const newPost: BlogPost = {
                id: crypto.randomUUID(),
                slug: createSlug(title),
                title,
                content,
                author,
                category,
                coverImage,
                excerpt,
                createdAt: Date.now(),
            };

            const storedPosts = localStorage.getItem('blogPosts');
            const posts: BlogPost[] = storedPosts ? JSON.parse(storedPosts) : [];
            
            // Check for duplicate slugs
            if (posts.some(p => p.slug === newPost.slug)) {
                 newPost.slug = `${newPost.slug}-${Math.floor(Math.random() * 1000)}`;
            }
            
            posts.push(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(posts));

            // Redirect to the new post after a short delay
            setTimeout(() => {
                setIsLoading(false);
                setActiveRoute(`/blog/${newPost.slug}`);
            }, 1000);

        } catch (err) {
            setError('Failed to save post. Please try again.');
            setIsLoading(false);
            console.error(err);
        }
    };

    return (
        <div className="py-24 pt-36 min-h-screen flex items-center">
            <div className="container max-w-4xl mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Create a New Post</h2>
                        <p className="text-lg text-zinc-400">
                            Share your insights and expertise with the world.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay="delay-200">
                    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-2">Post Title</label>
                            <input type="text" name="title" id="title" required value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                        </div>
                         <div>
                            <label htmlFor="excerpt" className="block text-sm font-medium text-zinc-300 mb-2">Excerpt</label>
                            <input type="text" name="excerpt" id="excerpt" required placeholder="A short summary of the article..." value={excerpt} onChange={e => setExcerpt(e.target.value)} className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-zinc-300 mb-2">Content</label>
                            <textarea name="content" id="content" rows={10} required placeholder="Write your article content here. You can use basic HTML tags like <h2>, <p>, <ul>, etc." value={content} onChange={e => setContent(e.target.value)} className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"></textarea>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="author" className="block text-sm font-medium text-zinc-300 mb-2">Author</label>
                                <input type="text" name="author" id="author" required value={author} onChange={e => setAuthor(e.target.value)} className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-zinc-300 mb-2">Category</label>
                                <input type="text" name="category" id="category" required value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="coverImage" className="block text-sm font-medium text-zinc-300 mb-2">Cover Image URL</label>
                            <input type="url" name="coverImage" id="coverImage" required placeholder="https://images.unsplash.com/..." value={coverImage} onChange={e => setCoverImage(e.target.value)} className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
                        </div>
                        {error && <p className="text-red-400 text-center">{error}</p>}
                        <div className="text-center pt-2">
                            <button type="submit" disabled={isLoading} className="inline-flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 disabled:bg-zinc-600 disabled:cursor-not-allowed min-w-[150px]">
                                {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Publish Post'}
                            </button>
                        </div>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default CreatePostPage;