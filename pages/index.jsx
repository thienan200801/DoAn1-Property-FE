import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next-translate-routes/router";
import { Carousel } from "react-responsive-carousel";
import carousel2 from "~/assets/images/carousel2.jpg";
import carousel3 from "~/assets/images/carousel3.jpg";
import About from "~/components/Home/About";
import HomeContactForm from "~/components/Home/HomeContactForm";
import LegalAssistance from "~/components/Home/LegalAssistance";
import MainServices from "~/components/Home/MainServices";

export default function Home() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="flex-1 overflow-hidden">
      <NextSeo
        title="Katana"
        description="Chúng tôi ý thức được cơ hội đầu tư là rất quan trọng trong bối cảnh kinh tế hiện nay tại Việt Nam. Chúng tôi cũng ý thức được rằng cung cấp thông tin chính xác cho nhà đầu tư là cách tốt nhất để nhà đầu tư có những quyết định về sự đầu tư hợp lý. Chúng tôi đã xác định được con đường đi của mình là trở thành cố vấn đáng tin cậy nhất cho nhà đầu tư và mọi người đang tìm kiếm tài sản."
        openGraph={{
          title: "Katana",
          description:
            "Chúng tôi ý thức được cơ hội đầu tư là rất quan trọng trong bối cảnh kinh tế hiện nay tại Việt Nam. Chúng tôi cũng ý thức được rằng cung cấp thông tin chính xác cho nhà đầu tư là cách tốt nhất để nhà đầu tư có những quyết định về sự đầu tư hợp lý. Chúng tôi đã xác định được con đường đi của mình là trở thành cố vấn đáng tin cậy nhất cho nhà đầu tư và mọi người đang tìm kiếm tài sản.",
          url: `${BASE_URL}${router.asPath}`,
          type: "article",
          article: {
            publishedTime: new Date().toISOString(),
            modifiedTime: new Date().toISOString(),
            authors: ["Taisanvn.com"],
          },
          images: [
            {
              url: `https://nova-file.taisanvn.com/sonthuyrealestate/logo-1664898212727.jpg`,
              width: 1200,
              height: 630,
              alt: "Logo Katana",
            },
          ],
        }}
      />

      <div className="w-full flex">
        <div className="flex-1 animate-marquee-mobile lg:animate-marquee-pc whitespace-nowrap py-2">
          <span className="text-primary">{t("home:tao-niem-tin-dau-tu")}</span>
        </div>
      </div>
      <Carousel
        infiniteLoop
        autoPlay
        showIndicators={false}
        showThumbs={false}
        swipeable={false}
        showStatus={false}
      >
        <div className="w-full h-96 lg:h-[600px]">
          <Image src={carousel2} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="w-full h-96 lg:h-[600px]">
          <Image src={carousel3} alt="" layout="fill" objectFit="cover" />
        </div>
      </Carousel>

      <div className="container mx-auto px-4">
        <MainServices />
        <LegalAssistance />
        <About />
        <HomeContactForm />
      </div>
    </div>
  );
}
