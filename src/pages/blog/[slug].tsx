// src/pages/blog/[slug].tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface PostProps {
    title: string;
    date: string;
    content: string;
}

export async function getStaticPaths() {
    const postsDirectory = path.join(process.cwd(), '_posts');

    // Log the posts directory path for debugging
    console.log('Reading posts from:', postsDirectory);

    let subdirs: string[] = [];
    try {
        subdirs = fs
            .readdirSync(postsDirectory)
            .filter((name) => {
                const fullPath = path.join(postsDirectory, name);
                return fs.statSync(fullPath).isDirectory();
            });
    } catch (error) {
        console.error('Error reading _posts folder:', error);
    }

    // Log the discovered subdirectories
    console.log('Subdirectories found:', subdirs);

    const paths = subdirs.map((dirname) => ({
        params: { slug: dirname },
    }));

    console.log('Dynamic paths generated:', paths);

    return {
        paths,
        fallback: false, // Change to false for easier debugging
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const postsDirectory = path.join(process.cwd(), '_posts');
    const dirPath = path.join(postsDirectory, slug);

    // Verify that the directory exists
    if (!fs.existsSync(dirPath)) {
        console.error(`Directory not found for slug: ${slug}`);
        return { notFound: true };
    }

    // Get Markdown files in the directory
    const files = fs
        .readdirSync(dirPath)
        .filter((filename) => filename.endsWith('.md'));

    if (files.length === 0) {
        console.error(`No markdown files found in directory: ${slug}`);
        return { notFound: true };
    }

    // Use the first markdown file found
    const filePath = path.join(dirPath, files[0]);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        props: {
            title: data.title || 'Untitled',
            date: data.date || '',
            content,
        },
    };
}

const PostPage: React.FC<PostProps> = ({ title, date, content }) => {
    return (
        <>
            <Head>
                <title>{title} - My Blog</title>
                <meta name="description" content={title} />
            </Head>
            <div className="min-h-screen bg-white/95 dark:bg-black/95 text-light-foreground dark:text-dark-foreground p-4">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
                        &larr; Back to Blog
                    </Link>
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-sm text-gray-500 mb-6">{date}</p>
                    <div className="prose dark:prose-dark">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostPage;
