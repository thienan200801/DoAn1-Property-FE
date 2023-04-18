import Link from "next-translate-routes/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next-translate-routes/router";
import { useSelector } from "react-redux";

const SideBar = () => {
  const router = useRouter();
  const { menu } = useSelector((state) => state.MenuReducer);
  const { t } = useTranslation();

  return (
    <div className="overflow-auto z-40">
      <ul className="font-semibold p-[14px] bg-transparent">
        {menu.map((item, i) => {
          return (
            <li
              className={`bg-transparent text-lg w-full text-center py-1 transition-colors duration-300 uppercase ${
                router.pathname === item.link
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary "
              }`}
              key={item.id}
            >
              <Link href={item.link} className="w-full">
                {t(`common:${item.name}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
