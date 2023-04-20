import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next-translate-routes/router";
import PostServices from "~/services/PostServices";
import { STATUS_SUCCESS } from "~/services/urlAPI";
import {
  convertImageNameToImageUrl,
  replaceImageNameByImageUrl,
} from "~/utils/image-processing";

export const getServerSideProps = async (context) => {
  try {
    const { status, data } = await PostServices.getPostBySlug(
      context.query.slug
    );
    if (status === STATUS_SUCCESS) {
      return {
        props: {
          post: {
            ...data,
            thumbnail: convertImageNameToImageUrl(data.thumbnail),
            content: replaceImageNameByImageUrl(data.content),
          },
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default function PropertyPostDetail({ post }) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  return (
    <div className="flex-1">
      <NextSeo
        title={`${post ? post.name : ""}`}
        description={`${post ? post.description : ""}`}
        openGraph={{
          title: `${post ? post.name : ""}`,
          description: `${post ? post.description : ""}`,
          url: `${BASE_URL}${router.asPath}`,
          type: "article",
          article: {
            publishedTime: new Date().toISOString(),
            modifiedTime: new Date().toISOString(),
            authors: [`${post && post.name}`],
          },
          images: [
            {
              url: `${post && post.thumbnail}`,
              width: 1200,
              height: 630,
              alt: "Ảnh đại diện của bài viết",
            },
          ],
        }}
      />
      <div className="container mx-auto py-4 lg:py-10 px-4">
        <div>
          <div className="mb-10">
            <Image
              src={post ? post.thumbnail : ""}
              alt=""
              width="100%"
              height={30}
              layout="responsive"
              objectFit="cover"
              className="rounded"
              priority
            />
          </div>
          <p className="text-primary text-3xl lg:text-4xl leading-[46px] font-medium uppercase">
            {post ? post.name : ""}
          </p>
          <p className="text-slate-500 text-base mt-4">
            {post ? post.description : ""}
          </p>
          <article>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{
                __html: post ? post.content : "",
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
