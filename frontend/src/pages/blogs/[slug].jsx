import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import BlogData from "../../data/blog1.json";
import { useRouter } from 'next/router';

const Post = (post) => {
    React.useEffect(() => {
        document.querySelector('body').classList.add('index3')
    }, [])
    return (
        <MainLayout>
            <PageHeader
                title="post details"
                fullPath={[
                    { id: 1, name: "home", url: "/" },
                    { id: 2, name: "blogs", url: "/blogs" },
                    { id: 3, name: "post details", url: `/blogs/${post.slug}` },
                ]}
            />
            <PostDetails {...post} />
        </MainLayout>
    );
};

export default Post;

export async function getStaticPaths() {
    const paths = BlogData.map(post => ({
        params: { slug: post.slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = BlogData.find(post => post.slug === slug);

    return {
        props: {
            post
        }
    };
}