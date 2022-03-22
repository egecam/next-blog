import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdx-component";
import Form from "../../components/form";
import Comments from "../../components/comments";
import useComment from "../../hooks/useComment";

export default function PostPage({ post }) {
  const [comments, onSubmit, text, textSet] = useComment();

  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
        <p className="mt-2 text-gray-600">{post.frontMatter.excerpt}</p>
        <hr className="my-4" />
        <div className="prose">{content}</div>
      </article>

      <Form onSubmit={onSubmit} text={text} textSet={textSet} />

      <Comments comments={comments} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
