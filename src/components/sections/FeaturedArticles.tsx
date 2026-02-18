import { motion } from 'framer-motion';

const articles = [
    {
        title: "Understanding React Server Components",
        excerpt: "A deep dive into how RSCs change the paradigm of data fetching and rendering in React applications.",
        date: "Jan 15, 2026",
        link: "#"
    },
    {
        title: "Optimizing 3D Scenes in WebGL",
        excerpt: "Techniques for maintaining 60fps when rendering complex Three.js scenes in the browser.",
        date: "Dec 20, 2025",
        link: "#"
    },
    {
        title: "State Management: Zustand vs Redux",
        excerpt: "Comparing modern state management libraries for scalability and developer experience.",
        date: "Nov 10, 2025",
        link: "#"
    }
];

const FeaturedArticles = () => {
    return (
        <section id="articles" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FEATURED ARTICLES</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-panel p-6 relative overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl text-white">✍️</span>
                            </div>

                            <span className="text-sm text-cyan-400 mb-2 block">{article.date}</span>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 mb-6 text-sm">
                                {article.excerpt}
                            </p>
                            
                            <a href={article.link} className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                                Read Article &rarr;
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticles;
