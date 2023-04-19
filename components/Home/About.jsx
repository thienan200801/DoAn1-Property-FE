import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next-translate-routes/router";
import { useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import image from "~/assets/images/about.jpg";
import SectionHeading from "~/ui-components/SectionHeading";
import ReadMoreText from "./ReadMoreText";

export default function About() {
  const router = useRouter();
  const aboutRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (router.asPath === "/gioi-thieu" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router, aboutRef]);

  return (
    <div ref={aboutRef} className="bg-white py-10">
      <SectionHeading content={t("home:ve-chung-toi")} />
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Slide>
            <p className="text-base leading-7 text-justify">
              <span className="font-medium text-primary text-lg">
                {t("home:ve-chung-toi")}
              </span>{" "}
              {t("home:noi-dung-ve-chung-toi")}
            </p>
            <ReadMoreText
              baseText={t("home:cach-chung-toi-lam")}
              moreText={t("home:noi-dung-cach-chung-toi-lam")}
            />
            <ReadMoreText
              baseText={t("home:dich-vu-chung-toi-cung-cap")}
              moreText={t("home:noi-dung-dich-vu-chung-toi-cung-cap")}
            />
            <ReadMoreText
              baseText={t("home:lanh-dao-chung-toi")}
              moreText={t("home:noi-dung-lanh-dao-chung-toi")}
            />
            <ReadMoreText
              baseText={t("home:tham-gia-voi-chung-toi")}
              moreText={t("home:noi-dung-tham-gia-voi-chung-toi")}
            />
          </Slide>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Slide direction="right">
            <Image src={image} alt="" className="w-full rounded" />
          </Slide>
        </div>
      </div>
    </div>
  );
}
