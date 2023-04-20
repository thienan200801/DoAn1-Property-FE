import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Post from "~/components/Post";
import PostServices from "~/services/PostServices";
import { STATUS_SUCCESS } from "~/services/urlAPI";
import PageHeading from "~/ui-components/PageHeading";
import { convertImageNameToImageUrl } from "~/utils/image-processing";

export const getServerSideProps = async () => {
  let posts = [];

  try {
    const { status, data } = await PostServices.getPosts("PROJECT");
    if (status === STATUS_SUCCESS) {
      posts = data.map((post) => ({
        ...post,
        thumbnail: convertImageNameToImageUrl(post.thumbnail),
      }));
    }
  } catch (err) {}

  return {
    props: {
      posts: posts,
    },
  };
};

export default function ProjectIntroduction({ posts }) {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <NextSeo
        title={t("common:gioi-thieu-du-an")}
        description={t("common:gioi-thieu-du-an")}
      />
      <div>
        <PageHeading content={t("project:danh-sach-du-an-cua-cong-ty")} />
        <div className="container mx-auto py-12 px-4 flex flex-col gap-12">
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <div className="w-full h-full min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-primary">
                {t("post:khong-co-bai-viet")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
