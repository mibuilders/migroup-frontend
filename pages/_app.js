
import "@/styles/globals.css";
import "@/styles/gaurav.css";
import MainLayout from "@/components/layouts/MainLayout";
import SmoothScroll from "@/components/common/SmoothScroll";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SmoothScroll>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SmoothScroll>
    </Provider>
  );
};

export default MyApp;
