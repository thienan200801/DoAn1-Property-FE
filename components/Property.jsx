import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next-translate-routes/link";
import numberWithCommas from "~/utils/number-with-commas";

export default function Property({ property }) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-4 lg:gap-10">
      <div className="col-span-3 lg:col-span-1 rounded-md overflow-hidden">
        <Image
          src={property.thumbnail}
          alt=""
          width="100%"
          height={70}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
      <div className="col-span-3 lg:col-span-2 flex flex-col ">
        <p className="uppercase text-[26px] text-[#1f4c74] font-medium line-clamp-1">
          {property.name}
        </p>
        <p className="text-xl font-medium mt-1">{`${numberWithCommas(
          property.price
        )} VNĐ`}</p>
        <p className="text-base mt-2 line-clamp-3">{property.description}</p>
        <div className="grid grid-cols-2 gap-y-1 mt-4 text-base">
          <div className="col-span-2 md:col-span-1 flex gap-x-2">
            <p className="font-semibold">{t("buy-demand:dien-tich")}</p>
            <p>
              {numberWithCommas(property.area)} m<sup>2</sup>
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 flex gap-x-2">
            <p className="font-semibold">{t("buy-demand:gia-ban")}</p>
            <p>{numberWithCommas(property.price)} VNĐ</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex gap-x-2">
            <p className="font-semibold">{t("buy-demand:quan-huyen")}</p>
            <p>{property.district}</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex gap-x-2">
            <p className="font-semibold">{t("buy-demand:tinh-thanh-pho")}</p>
            <p className="">{property.province}</p>
          </div>
        </div>
        <div className="flex flex-col items-start w-fit group mt-4">
          <Link
            href={{
              pathname: "/nhu-cau-mua/tai-san/[slug]",
              query: { slug: property.slug },
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
