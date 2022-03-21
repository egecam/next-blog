import { getAllNodes } from "next-mdx/server";
import Link from "next/link";

function BlogPage({ posts }) {
  return (
    <div className="site-container">
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <article key={post.url}>
              <h2 className="text-xl font-bold">
                <Link href={post.url}>
                  <a>{post.frontMatter.title}</a>
                </Link>
              </h2>
              <p>{post.frontMatter.excerpt}</p>
              <div className="text-gray-400">
                <h3>{post.frontMatter.date}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}

export default BlogPage;
