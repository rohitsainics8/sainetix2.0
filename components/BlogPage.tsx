import React, { useState, useEffect } from 'react';
import type { BlogPost } from '../types';
import AnimatedSection from './AnimatedSection';
import UserIcon from './icons/UserIcon';
import CalendarIcon from './icons/CalendarIcon';
import { useAuth } from '../contexts/AuthContext';

// Seed data for the blog if it's empty
const seedBlogPosts: Omit<BlogPost, 'id' | 'slug' | 'createdAt'>[] = [
    {
        title: 'The Future of Web Development with AI',
        content: '<h2>The AI Revolution in Code</h2><p>AI is no longer a futuristic concept; it\'s a present-day reality transforming industries, and web development is no exception. AI-powered tools are now capable of writing code, designing layouts, and even optimizing for performance. At Sainetix, we are at the forefront of this revolution, integrating AI to deliver projects faster, smarter, and more efficiently.</p><h3>How AI Accelerates Development</h3><ul><li><strong>Rapid Prototyping:</strong> Generate functional website concepts from a simple text prompt.</li><li><strong>Code Assistance:</strong> AI tools can suggest code snippets, debug errors, and optimize algorithms.</li><li><strong>Automated Testing:</strong> AI can write and execute tests, ensuring robust and error-free applications.</li></ul><p>Embracing AI allows our team to focus on the strategic and creative aspects of a project, while AI handles the repetitive and time-consuming tasks. The future is collaborative, with human creativity guided by AI precision.</p>',
        author: 'Sainetix Team',
        category: 'AI & Tech',
        coverImage: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
        excerpt: 'Explore how Artificial Intelligence is revolutionizing the web development landscape, from automated coding to intelligent design systems.'
    },
    {
        title: '5 UI/UX Design Trends to Watch in 2024',
        content: '<h2>Designing for Tomorrow</h2><p>User experience is paramount. A visually appealing website is great, but an intuitive and engaging one is what truly converts visitors into customers. Here are five UI/UX trends that are shaping the digital landscape in 2024.</p><h3>Key Trends</h3><ol><li><strong>Immersive 3D Elements:</strong> Bringing depth and interactivity to the user interface.</li><li><strong>Bento Grids:</strong> A modular, visually interesting way to display content, popularized by Apple.</li><li><strong>Kinetic Typography:</strong> Animated text that captures attention and tells a story.</li><li><strong>AI-Powered Personalization:</strong> Interfaces that adapt to individual user behavior and preferences.</li><li><strong>Glassmorphism & Aurora UI:</strong> Continuing the trend of soft, blurred backgrounds and layered elements for a sense of depth.</li></ol><p>By staying on top of these trends, we ensure that the websites we build are not just modern, but also future-proof and highly effective at engaging users.</p>',
        author: 'Jane Doe, Lead Designer',
        category: 'Design',
        coverImage: 'https://solguruz.com/_next/image/?url=https%3A%2F%2Fblog.solguruz.com%2Fwp-content%2Fuploads%2F2024%2F12%2Fuiux-design-trends.png&w=1200&q=75',
        excerpt: 'From bento grids to kinetic typography, we dive into the top design trends that are shaping user experiences this year.'
    }
];

const BlogPage: React.FC<{ setActiveRoute: (route: string) => void; }> = ({ setActiveRoute }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        let savedPosts: BlogPost[] = [];
        try {
            const storedPosts = localStorage.getItem('blogPosts');
            if (storedPosts) {
                savedPosts = JSON.parse(storedPosts);
            } else {
                 // Seed the blog if it's the first visit
                const initialPosts: BlogPost[] = seedBlogPosts.map(p => ({
                    ...p,
                    id: crypto.randomUUID(),
                    slug: p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
                    createdAt: Date.now()
                }));
                localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
                savedPosts = initialPosts;
            }
        } catch (error) {
            console.error("Failed to parse blog posts from localStorage", error);
        }
        // Sort posts by newest first
        setPosts(savedPosts.sort((a, b) => b.createdAt - a.createdAt));
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setActiveRoute(href.slice(1));
    };

    return (
        <div className="py-24 pt-36 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black">
            <div className="container max-w-7xl mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Sainetix Insights</h2>
                        <p className="text-lg text-zinc-400 mb-12">
                            Exploring the intersection of AI, design, and modern web development.
                        </p>
                        {isAuthenticated && (
                            <a href="#/blog/new" onClick={(e) => handleNavClick(e, '#/blog/new')} className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105">
                                Create New Post
                            </a>
                        )}
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {posts.map((post, index) => (
                        <AnimatedSection key={post.id} delay={`delay-${index * 150}`}>
                            <a href={`#/blog/${post.slug}`} onClick={(e) => handleNavClick(e, `#/blog/${post.slug}`)} className="group block bg-white/5 rounded-xl shadow-lg border border-white/10 overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2 h-full">
                                <div className="aspect-video overflow-hidden">
                                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 flex flex-col h-full">
                                    <p className="text-sm text-indigo-400 font-semibold">{post.category}</p>
                                    <h3 className="text-xl font-bold text-white mt-2 mb-3 flex-grow">{post.title}</h3>
                                    <p className="text-zinc-400 text-sm mb-4">{post.excerpt}</p>
                                    <div className="flex items-center text-xs text-zinc-500 space-x-4 mt-auto border-t border-white/10 pt-4">
                                        <span className="flex items-center"><UserIcon className="w-4 h-4 mr-1.5" />{post.author}</span>
                                        <span className="flex items-center"><CalendarIcon className="w-4 h-4 mr-1.5" />{new Date(post.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
