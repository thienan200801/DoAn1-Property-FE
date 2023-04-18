import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons";
import Link from "next-translate-routes/link";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next-translate-routes/router";
import { useSelector } from "react-redux";
import logo from "~/assets/images/logo-transparent.png";

const Footer = () => {
  const { menu } = useSelector((state) => state.MenuReducer);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="bg-dark-grey py-[18px]">
      <div className="container mx-auto px-4 flex justify-between flex-col lg:flex-row gap-y-6">
        <div className="flex items-center flex-col lg:flex-row">
          <Link href="/">
            <div className="h-full w-24 flex items-center cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-end ">
          <div className="text-white text-base font-normal mb-4 flex items-center flex-col lg:flex-row gap-4">
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/"
                className="h-10 w-10 p-2 border border-[#1093f4] rounded-full text-[#1093f4] flex items-center justify-center"
              >
                <IconBrandFacebook />
              </a>
              <a
                href="https://www.facebook.com/"
                className="h-10 w-10 p-2 border border-[#ff0000] rounded-full text-[#ff0000] flex items-center justify-center"
              >
                <IconBrandYoutube />
              </a>
              <a
                href="https://www.facebook.com/"
                className="h-10 w-10 p-2 border border-[#1da1f2] rounded-full text-[#1da1f2] flex items-center justify-center"
              >
                <IconBrandTwitter />
              </a>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-center">
              <a href="tel:0938661795">0946 666 791</a>
              <p>20520377@gm.uit.edu.vn</p>
            </div>
          </div>
          <ul className="hidden lg:flex items-center gap-5 text-center mx-auto font-normal h-full text-xs md:text-sm xl:text-base">
            {menu.map((item, i) => {
              return (
                <li
                  className={`transition-colors duration-300 uppercase ${
                    router.pathname === item.link
                      ? "text-slate-400 "
                      : "text-white hover:text-slate-400"
                  }`}
                  key={item.id}
                >
                  <Link href={item.link}>{t(`common:${item.name}`)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
