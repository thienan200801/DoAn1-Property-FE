import { NextSeo } from "next-seo";
import Link from "next-translate-routes/link";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import image404 from "~/assets/images/404.svg";

export default function Custom404() {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <NextSeo
        title={t("common:khong-tim-thay-trang")}
        description={t("common:khong-tim-thay-trang")}
      />
      <div className="h-[calc(100vh-216px)] min-h-[400px] flex flex-col items-center justify-center">
        <div className="h-40 w-40 lg:h-60 lg:w-60">
          <Image
            src={image404}
            alt=""
            objectFit="contain"
            draggable={false}
            priority
          />
        </div>
        <p className="text-center text-lg font-medium">
          {t("common:khong-tim-thay-trang")}
        </p>
        <Link href="/">
          <button className="bg-primary px-10 py-3 mt-4 text-white font-medium uppercase rounded hover:shadow-md">
            {t("common:ve-trang-chu")}
          </button>
        </Link>
      </div>
    </div>
  );
}
