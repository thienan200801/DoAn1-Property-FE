import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next-translate-routes/link";
import { useRouter } from "next-translate-routes/router";
import React from "react";

export default function Post({ post }) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-3 lg:col-span-1 rounded-md overflow-hidden">
        <Image
          src={post.thumbnail}
          alt=""
          width="100%"
          height={60}
          layout="responsive"
          objectFit="cover"
          priority="low"
        />
      </div>
      <div className="col-span-3 lg:col-span-2 flex flex-col ">
        <p className="uppercase text-[26px] text-[#1f4c74] font-medium line-clamp-1">
          {post.name}
        </p>
        <p className="text-base mt-2 line-clamp-3">{post.description}</p>

        <div className="flex flex-col items-start w-fit group mt-4">
          <Link
            href={{
              pathname: `${router.pathname}/[slug]`,
              query: { slug: post.slug },
            }}
          >
            <button className="text-lg font-medium text-slate-600">
              {t("common:tim-hieu-them")}
            </button>
          </Link>
          <div className="h-[1px] w-full bg-yellow group-hover:w-0 transition-all duration-200"></div>
        </div>
      </div>
    </div>
  );
}
