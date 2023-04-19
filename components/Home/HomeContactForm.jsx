import useTranslation from "next-translate/useTranslation";
import SectionHeading from "~/ui-components/SectionHeading";
import ContactForm from "../ContactForm";

export default function HomeContactForm() {
  const { t } = useTranslation();

  return (
    <div className="pb-10">
      <SectionHeading content={t("common:lien-he-voi-chung-toi")} />
      <ContactForm />
    </div>
  );
}
