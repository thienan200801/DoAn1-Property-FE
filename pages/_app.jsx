import { withTranslateRoutes } from "next-translate-routes";
import NextNProgress from "nextjs-progressbar";
import "react-quill/dist/quill.snow.css";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "~/layout/Layout";
import { store } from "~/redux";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress color="#003366" />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default withTranslateRoutes(App);
