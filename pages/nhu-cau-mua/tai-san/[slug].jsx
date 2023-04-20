import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next-translate-routes/router";
import { Carousel } from "react-responsive-carousel";
import ContactForm from "~/components/ContactForm";
import PropertyServices from "~/services/PropertyServices";
import { STATUS_SUCCESS } from "~/services/urlAPI";
import { convertImageNameToImageUrl } from "~/utils/image-processing";
import numberWithCommas from "~/utils/number-with-commas";

export const getServerSideProps = async (context) => {
  try {
    const { status, data } = await PropertyServices.getPropertyBySlug(
      context.query.slug
    );

    if (status === STATUS_SUCCESS) {
      return {
        props: {
          property: {
            ...data,
            thumbnail: convertImageNameToImageUrl(data.thumbnail),
            gallery: data.gallery.map((imageName) =>
              convertImageNameToImageUrl(imageName)
            ),
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

export default function PropertyForSaleDetail({ property }) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <NextSeo
        title={`${property ? property.name : ""}`}
        description={`${property ? property.description : ""}`}
        openGraph={{
          title: `${property ? property.name : ""}`,
          description: `${property ? property.description : ""}`,
          url: `${BASE_URL}${router.asPath}`,
          type: "article",
          article: {
            publishedTime: new Date().toISOString(),
            modifiedTime: new Date().toISOString(),
            authors: [`${property && property.name}`],
          },
          images: [
            {
              url: `${property && property.thumbnail}`,
              width: 1200,
              height: 630,
              alt: "Ảnh của bất động sản",
            },
          ],
        }}
      />
      <div className="pb-10">
        <div className="container mx-auto pt-10 px-4">
          <p className="text-primary text-3xl lg:text-4xl leading-[46px] font-medium uppercase mb-10">
            {property ? property.name : ""}
          </p>
          {property && property.gallery.length > 0 && (
            <div className="mb-10 border border-slate-300 rounded">
              <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                // renderThumbs={() =>
                //   property.gallery.map((img) => (
                //     <div key={img} className="w-full h-10 relative">
                //       <Image
                //         src={img}
                //         layout="fill"
                //         objectFit="contain"
                //         alt="logo"
                //         priority
                //       ></Image>
                //     </div>
                //   ))
                // }
                renderArrowPrev={(clickHandler) => (
                  <button
                    onClick={clickHandler}
                    className="absolute left-0 top-0 bottom-0 z-10 px-1 text-primary bg-opacity-5 bg-primary hover:bg-opacity-20 transition-all duration-200"
                  >
                    <IconChevronLeft />
                  </button>
                )}
                renderArrowNext={(clickHandler) => (
                  <button
                    onClick={clickHandler}
                    className="absolute right-0 top-0 bottom-0 z-10 px-1 text-primary bg-opacity-5 bg-primary hover:bg-opacity-20 transition-all duration-200"
                  >
                    <IconChevronRight />
                  </button>
                )}
              >
                {property.gallery.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt=""
                    width="100%"
                    height={50}
                    layout="responsive"
                    objectFit="contain"
                    className="rounded"
                    priority
                  />
                ))}
              </Carousel>
            </div>
          )}

          <p className="text-primary text-2xl lg:text-[28px] font-medium uppercase mb-2 lg:mb-4">
            {t("buy-demand:chi-tiet-tai-san")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-base lg:text-lg mb-6 lg:mb-10 gap-y-2">
            <p className="col-span-1">
              <span className="font-semibold w-40">
                {t("buy-demand:gia-ban")}{" "}
              </span>
              {property ? numberWithCommas(property.price) : ""} VNĐ
            </p>
            <p className="col-span-1">
              <span className="font-semibold">
                {t("buy-demand:dien-tich")}{" "}
              </span>
              {property ? numberWithCommas(property.area) : ""} m<sup>2</sup>
            </p>
            <p className="col-span-1">
              <span className="font-semibold">
                {t("buy-demand:chuyen-muc")}{" "}
              </span>
              {property ? property.estateCategory : ""}
            </p>
            <p className="col-span-1">
              <span className="font-semibold">
                {t("buy-demand:tinh-thanh-pho")}{" "}
              </span>
              {property ? property.province : ""}
            </p>
            <p className="col-span-1">
              <span className="font-semibold">
                {t("buy-demand:quan-huyen")}{" "}
              </span>
              {property ? property.district : ""}
            </p>
            <p className="col-span-1">
              <span className="font-semibold">{t("buy-demand:dia-chi")} </span>
              {property ? property.address : ""}
            </p>
          </div>
          <p className="text-primary text-2xl lg:text-[28px] font-medium uppercase mb-2 lg:mb-4">
            {t("buy-demand:mo-ta")}
          </p>
          <p className="text-base mb-6 lg:mb-10">
            {property ? property.description : ""}
          </p>

          {property && property.iframe && (
            <>
              <p className="text-primary text-2xl lg:text-[28px] font-medium uppercase mb-2 lg:mb-4">
                {t("buy-demand:vi-tri")}
              </p>
              <iframe
                src={property.iframe}
                width="100%"
                height="500"
                className="mb-6 lg:mb-10"
              ></iframe>
            </>
          )}
          <p className="text-primary text-2xl lg:text-[28px] font-medium uppercase mb-4 lg:mb-6">
            {t("common:lien-he-voi-chung-toi")}
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
