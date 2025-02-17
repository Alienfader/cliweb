// src/pages/blog.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), '_posts');

    // Check if the _posts directory exists
    if (!fs.existsSync(postsDirectory)) {
        console.error('The _posts directory does not exist.');
        return { props: { posts: [] } };
    }

    // Get subdirectories in _posts
    const subdirs = fs
        .readdirSync(postsDirectory)
        .filter((name) => fs.statSync(path.join(postsDirectory, name)).isDirectory());

    const posts: Post[] = subdirs
        .map((dirname) => {
            const dirPath = path.join(postsDirectory, dirname);
            // Get markdown files in this directory
            const files = fs.readdirSync(dirPath).filter((filename) => filename.endsWith('.md'));

            if (files.length === 0) {
                console.warn(`No markdown files found in directory ${dirname}`);
                return null;
            }

            // Use the first Markdown file found in the subdirectory
            const filePath = path.join(dirPath, files[0]);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug: dirname, // use the directory name as slug
                title: data.title || 'Untitled',
                date: data.date || '',
                excerpt: data.excerpt || content.slice(0, 150) + '...',
            };
        })
        .filter((post): post is Post => post !== null);

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        props: {
            posts,
        },
    };
}

const BlogPage: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>My Blog Archive</title>
                <meta name="description" content="Archived posts from my blog" />
            </Head>
            <div className="min-h-screen bg-white/95 dark:bg-black/95 text-light-foreground dark:text-dark-foreground p-4">
                <h1 className="text-3xl font-bold mb-6 text-center">My Blog</h1>
                <div className="max-w-3xl mx-auto">
                    {posts.length === 0 ? (
                        <p>No posts found. Please check your _posts directory structure.</p>
                    ) : (
                        posts.map((post) => (
                            <div key={post.slug} className="mb-8 border-b border-gray-300 pb-4">
                                <h2 className="text-2xl font-semibold">
                                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <p className="mt-2">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-2 block">
                                    Read more &rarr;
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogPage;
