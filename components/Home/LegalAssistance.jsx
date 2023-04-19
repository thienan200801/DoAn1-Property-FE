import { IconChevronRight } from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "~/ui-components/SectionHeading";

const legalAssistanceServices = [
  "tu-van-soan-thao",
  "hop-thuc-hoa",
  "xin-giay-phep",
  "xin-chuyen-muc-dich-su-dung-dat",
  "xin-cap-giay-chung-nhan",
  "xin-cap-doi-tu-giay-to-cu-sang-giay-to-moi",
];

export default function LegalAssistance() {
  const { t } = useTranslation();

  return (
    <div className="bg-white pt-10">
      <SectionHeading content={t("home:ho-tro-phap-ly")} />
      <ul>
        {legalAssistanceServices.map((service) => {
          return (
            <li key={service}>
              <Fade>
                <div className="flex items-start gap-4 py-4 lg:p-4">
                  <IconChevronRight className="flex-shrink-0" />
                  <p className="text-base">{t(`home:${service}`)}</p>
                </div>
              </Fade>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
