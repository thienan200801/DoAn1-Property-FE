import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import logo from "~/assets/images/logo-transparent.png";

export default function JoinUs() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex">
      <NextSeo
        title={t("join-us:tham-gia-cung-chung-toi")}
        description={t("join-us:tham-gia-cung-chung-toi")}
      />
      <div className="flex-1 bg-recruit bg-cover bg-center flex items-center">
        <div className="container mx-auto px-4 py-10 lg:py-12 grid grid-cols-12 lg:gap-0">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center gap-4 lg:gap-10">
            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-medium">
              {t("join-us:tham-gia-cung-chung-toi")}
            </h1>
            <p className="text-slate-200">
              {t("join-us:noi-dung-tham-gia-cung-chung-toi-1")}
              <br />
              {t("join-us:noi-dung-tham-gia-cung-chung-toi-2")}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0 flex justify-center items-center">
            <div className="w-40 lg:w-56">
              <Image src={logo} alt="logo" draggable={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
