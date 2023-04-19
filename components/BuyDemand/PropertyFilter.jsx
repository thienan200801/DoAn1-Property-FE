import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next-translate-routes/router";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function PropertyFilter({ provinces }) {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  const handleChange = (selectedProvince) => {
    setSelectedProvince(selectedProvince);
    if (selectedProvince.value === "Tất cả")
      router.push({ pathname: "/nhu-cau-mua" });
    else
      router.push({
        pathname: "/nhu-cau-mua/[province]",
        query: { province: selectedProvince.value },
      });
  };

  useEffect(() => {
    if (
      (provinces[0] && provinces[0].value !== "Tất cả") ||
      provinces.length === 0
    )
      provinces.unshift({ value: "Tất cả", label: t("buy-demand:tat-ca") });
    if (provinces.length > 0) setSelectedProvince(provinces[0]);
  }, [provinces]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { province } = router.query;
      if (decodeURI(province) !== "Tất cả")
        setSelectedProvince({
          value: decodeURI(province),
          label: decodeURI(province),
        });
    }
  }, [router.query]);

  return (
    <div className="flex items-center gap-4">
      <p className="col-span-2 lg:col-span-4 text-lg font-medium my-auto">
        {t("buy-demand:khu-vuc")}
      </p>
      <Select
        instanceId="province-select-buy-demand"
        value={selectedProvince}
        onChange={handleChange}
        options={provinces}
        placeholder="Tỉnh thành"
        className="flex-1 max-w-[400px]"
        styles={{
          control: () => ({
            backgroundColor: "#fff",
            display: "flex",
            border: "1px solid #e8eaed",
            padding: "4px",
            borderRadius: "4px",
          }),
        }}
      />
    </div>
  );
}
