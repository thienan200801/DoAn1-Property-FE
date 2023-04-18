import { IconMenu2 } from "@tabler/icons";
import Link from "next-translate-routes/link";
import { useRouter } from "next-translate-routes/router";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "~/assets/images/logo.jpg";
import LanguageToggle from "./LanguageToggle";
import SideBar from "../SideBar";

export default function Header() {
  const { menu } = useSelector((state) => state.MenuReducer);
  const router = useRouter();
  const { t } = useTranslation();
  const [displaySideBar, setDisplaySideBar] = useState(false);

  const changeDisplaySideBar = () => {
    setDisplaySideBar((prev) => !prev);
  };

  useEffect(() => {
    setDisplaySideBar(false);
  }, [router]);

  return (
    <div className="shadow">
      <div className={`py-0 w-full z-10`}>
        <div className="bg-white">
          <div className="container px-4 mx-auto flex justify-between items-center">
            <Link href="/">
              <div className="h-[84px] flex items-center cursor-pointer">
                <Image
                  src={logo}
                  alt=""
                  height="84px"
                  width="116px"
                  objectFit="fill"
                  draggable={false}
                />
              </div>
            </Link>

            <div className="hidden lg:flex lg:items-center">
              <ul className="flex items-center justify-end text-center mx-auto font-semibold h-full">
                {menu.map((item, i) => {
                  return (
                    <Link href={item.link} key={item.id}>
                      <li
                        className={`transition-colors duration-300 p-2 cursor-pointer uppercase ${
                          router.pathname === item.link
                            ? "text-primary"
                            : "text-gray-500 hover:text-primary "
                        }`}
                      >
                        {t(`common:${item.name}`)}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center gap-x-4">
              <LanguageToggle displaySideBar={displaySideBar} />
              <IconMenu2
                className="lg:hidden text-4xl cursor-pointer text-gray-500 hover:text-primary"
                onClick={changeDisplaySideBar}
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-end absolute w-full z-50">
          <div
            className={`w-full bg-white bg-opacity-90 overflow-hidden transition-all ease-in-out duration-500 ${
              displaySideBar ? "h-[240px] " : "h-0"
            }`}
          >
            <SideBar />
            <div className="w-full h-max" onClick={changeDisplaySideBar} />
          </div>
        </div>
      </div>
    </div>
  );
}
