import Link from "next-translate-routes/link";
import { useRouter } from "next-translate-routes/router";
import Image from "next/image";
import americaImg from "~/assets/images/america.png";
import vietNamImg from "~/assets/images/vietnam.png";

export default function LanguageToggle({ displaySideBar }) {
  const router = useRouter();

  return (
    <div className="flex items-center relative">
      <div className="group cursor-pointer">
        <div className="flex items-center gap-x-1 p-2">
          <div className="w-5">
            <Image
              src={router.locale === "vi" ? vietNamImg : americaImg}
              layout="responsive"
              draggable={false}
              alt=""
              className="my-auto"
            />
          </div>
          <p className="font-semibold uppercase text-gray-500">
            {router.locale === "vi" ? "VN" : "EN"}
          </p>
        </div>

        <div
          className={`hidden ${
            !displaySideBar && "group-hover:flex"
          } bg-white p-2 absolute right-0 shadow z-10 rounded flex-col min-w-[160px]`}
        >
          <Link
            href={{ pathname: router.pathname, query: router.query }}
            replace
            locale="vi"
          >
            <div
              className={`flex items-center gap-2 hover:bg-slate-100 active:bg-slate-200 p-2 rounded ${
                router.locale === "vi" && "bg-slate-100"
              }`}
            >
              <div className="w-5">
                <Image
                  src={vietNamImg}
                  layout="responsive"
                  draggable={false}
                  alt="Cờ Việt Nam"
                />
              </div>
              <p className="min-w-min font-semibold uppercase text-gray-500 rounded">
                Tiếng Việt
              </p>
            </div>
          </Link>
          <Link
            href={{ pathname: router.pathname, query: router.query }}
            replace
            locale="en"
          >
            <div
              className={`flex items-center gap-2 hover:bg-slate-100 active:bg-slate-200 p-2 rounded ${
                router.locale === "en" && "bg-slate-100"
              }`}
            >
              <div className="w-5">
                <Image
                  src={americaImg}
                  layout="responsive"
                  draggable={false}
                  alt="Cờ Việt Nam"
                />
              </div>
              <p className="min-w-min font-semibold uppercase text-gray-500 rounded">
                ENGLISH
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
