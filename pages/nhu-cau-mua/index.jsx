import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import PropertyFilter from "~/components/BuyDemand/PropertyFilter";
import ContactForm from "~/components/ContactForm";
import Property from "~/components/Property";
import AdministrativeServices from "~/services/AdministrativeServices";
import PropertyServices from "~/services/PropertyServices";
import { STATUS_SUCCESS } from "~/services/urlAPI";
import PageHeading from "~/ui-components/PageHeading";
import { convertImageNameToImageUrl } from "~/utils/image-processing";

export const getServerSideProps = async (context) => {
  let provinces = [];
  let properties = [];

  try {
    let { data, status } = await AdministrativeServices.getProvinces();

    if (status === STATUS_SUCCESS) provinces = data;
  } catch (err) {}

  const { province } = context.query;
  if (province) {
    try {
      let { data, status } = await PropertyServices.getPropertiesWithFilter({
        province,
      });

      if (status === STATUS_SUCCESS) properties = [...data];
    } catch (err) {}
  } else {
    try {
      let { data, status } = await PropertyServices.getProperties();

      if (status === STATUS_SUCCESS) properties = [...data];
    } catch (err) {}
  }

  return {
    props: {
      provinces: provinces.map((province) => ({
        value: province.name,
        label: province.name,
      })),
      properties: properties.map((property) => ({
        ...property,
        thumbnail: convertImageNameToImageUrl(property.thumbnail),
      })),
    },
  };
};

export default function BuyDemand({ provinces, properties }) {
  const { t } = useTranslation();

  return (
    <div className="flex-1">
      <NextSeo
        title={t("common:nhu-cau-mua")}
        description={t("common:nhu-cau-mua")}
      />
      <div>
        <PageHeading content={t("common:nhu-cau-mua")} />
        <div className="container mx-auto py-12 px-4">
          <p className="text-primary text-2xl lg:text-[28px] font-medium uppercase mb-6">
            {t("common:lien-he-voi-chung-toi")}
          </p>
          <ContactForm />
          <p className="text-primary text-2xl lg:text-[28px] lg:leading-10 font-medium uppercase mt-10 mb-6">
            {t("buy-demand:ho-tro")}
            <br />
            {t("buy-demand:danh-sach-tai-san-gioi-thieu")}
          </p>
          <PropertyFilter provinces={provinces} />
          {properties.length > 0 ? (
            <div className="flex flex-col gap-12 pt-10">
              {properties.map((property) => (
                <Property key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="w-full min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-primary">
                {t("buy-demand:khong-co-tai-san")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
