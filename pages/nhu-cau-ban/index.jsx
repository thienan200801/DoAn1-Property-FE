import { Formik } from "formik";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import * as ActionTypesSaga from "~/redux/constants/constantSaga";
import PageHeading from "~/ui-components/PageHeading";

const ErrorText = (content) => {
  return <div className="text-xs text-red-500 mt-1">{content}</div>;
};

export default function SellDemand() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div className="flex-1">
      <NextSeo
        title={t("common:nhu-cau-ban")}
        description={t("common:nhu-cau-ban")}
      />
      <div>
        <PageHeading content={t("sell-demand:nhu-cau-ban-tai-san")} />
        <div className="container mx-auto py-12 px-4">
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              phoneNumber: "",
              message: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              dispatch({
                type: ActionTypesSaga.POST_CONTACT_SAGA,
                contact: { ...values, demandType: "SELL" },
                handleResetForm: resetForm,
              });
            }}
            validationSchema={Yup.object().shape({
              fullname: Yup.string().required(t("common:vui-long-nhap-ho-ten")),
              email: Yup.string()
                .email(t("common:email-khong-hop-le"))
                .required(t("common:vui-long-nhap-email")),
              phoneNumber: Yup.string()
                .required(t("common:vui-long-nhap-so-dien-thoai"))
                .matches(phoneRegExp, t("common:so-dien-thoai-khong-hop-le")),
              message: Yup.string().required(
                t("common:vui-long-nhap-thong-diep")
              ),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <input
                        id="fullname"
                        type="text"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`appearance-none border rounded w-full p-4 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline ${
                          touched.fullname && errors.fullname
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder={t("common:ho-va-ten")}
                      />
                      {errors.fullname &&
                        touched.fullname &&
                        ErrorText(errors.fullname)}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <input
                        id="phoneNumber"
                        type="text"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`appearance-none border rounded w-full p-4 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline ${
                          touched.phoneNumber && errors.phoneNumber
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder={t("common:dien-thoai")}
                      />
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        ErrorText(errors.phoneNumber)}
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <input
                        id="email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`appearance-none border rounded w-full p-4 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline ${
                          touched.email && errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="Email"
                      />
                      {errors.email && touched.email && ErrorText(errors.email)}
                    </div>
                    <div className="col-span-2">
                      <textarea
                        id="message"
                        type="text"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`flex-1 appearance-none border rounded w-full p-4 text-base font-public-sans text-gray-700 focus:outline-none focus:shadow-outline ${
                          touched.message && errors.message
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder={t("common:thong-diep")}
                      />
                      {errors.message &&
                        touched.message &&
                        ErrorText(errors.message)}
                    </div>
                  </div>
                  <div className="w-full flex justify-end mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary text-white uppercase text-lg py-2 px-10 rounded active:shadow-lg w-full lg:w-fit"
                    >
                      {t("common:gui")}
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
