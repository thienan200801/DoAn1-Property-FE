import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next-translate-routes/link";
import { Fade } from "react-awesome-reveal";
import buyImg from "~/assets/images/buy.svg";
import newImg from "~/assets/images/news.svg";
import projectImg from "~/assets/images/project.svg";
import sellImg from "~/assets/images/sell.svg";
import SectionHeading from "~/ui-components/SectionHeading";

export default function MainServices() {
  const { t } = useTranslation();

  return (
    <div className="bg-white pt-10">
      <SectionHeading content={t("home:dich-vu-chinh")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mt-2">
        <Fade>
          <div className="col-span-1 flex flex-col items-center">
            <Link href="/nhu-cau-ban">
              <div className="bg-blue-200 hover:shadow-md transition-all duration-200 rounded-3xl p-14 select-none max-w-[240px] lg:max-w-full cursor-pointer">
                <Image src={sellImg} alt="" draggable={false} />
              </div>
            </Link>
            <p className="text-center mt-4 text-lg font-semibold uppercase">
              {t("common:nhu-cau-ban")}
            </p>
          </div>
        </Fade>
        <Fade delay={100}>
          <div className="col-span-1 flex flex-col items-center">
            <Link href="/nhu-cau-mua">
              <div className="bg-blue-200 hover:shadow-md transition-all duration-200 rounded-3xl p-14 select-none max-w-[240px] lg:max-w-full cursor-pointer">
                <Image src={buyImg} alt="" draggable={false} />
              </div>
            </Link>
            <p className="text-center mt-4 text-lg font-semibold uppercase">
              {t("common:nhu-cau-mua")}
            </p>
          </div>
        </Fade>
        <Fade delay={200}>
          <div className="col-span-1 flex flex-col items-center">
            <Link href="/gioi-thieu-du-an">
              <div className="bg-blue-200 hover:shadow-md transition-all duration-200 rounded-3xl p-14 select-none max-w-[240px] lg:max-w-full cursor-pointer">
                <Image src={projectImg} alt="" draggable={false} />
              </div>
            </Link>
            <p className="text-center mt-4 text-lg font-semibold uppercase">
              {t("common:gioi-thieu-du-an")}
            </p>
          </div>
        </Fade>
        <Fade delay={300}>
          <div className="col-span-1 flex flex-col items-center">
            <Link href="/tin-tuc">
              <div className="bg-blue-200 hover:shadow-md transition-all duration-200 rounded-3xl p-14 select-none max-w-[240px] lg:max-w-full cursor-pointer">
                <Image src={newImg} alt="" draggable={false} />
              </div>
            </Link>
            <p className="text-center mt-4 text-lg font-semibold uppercase">
              {t("common:tin-tuc")}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
