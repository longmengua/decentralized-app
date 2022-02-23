import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { WalletConnect } from "./listeners/wallet-connect";

import './index.scss'

export enum RouterEnum {
    Dashboard = '/dashboard',
}

/***
 * {
 *     IS_PRODUCTION: ['prod', 'stage'].includes(process.env.MODE),
 *     API_END_POINT: process.env.REACT_APP_API_END_POINT,
 *     SWAP_END_POINT: process.env.REACT_APP_SWAP_END_POINT,
 *     LANDING_END_POINT: process.env.REACT_APP_LANDING_END_POINT,
 *     DASHBOARD_END_POINT: process.env.REACT_APP_DASHBOARD_END_POINT,
 *     ETH_INFURA_KEY: process.env.ETH_INFURA_KEY,
 *     GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
 *     SENTRY_DSN: process.env.SENTRY_DSN,
 * }
 */
export const EnvVariable = {
    IS_PRODUCTION: true,
    API_END_POINT: 'https://api.cexiswap.io',
    SWAP_END_POINT: 'https://app.cexiswap.io/#/swap',
    LANDING_END_POINT: 'https://www.cexiswap.io/',
    DASHBOARD_END_POINT: '',
    ETH_INFURA_KEY: '',
    GOOGLE_ANALYTICS_ID: '',
    SENTRY_DSN: '',
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WalletConnect />
      <BrowserRouter>
        <Routes>
          <Route path={RouterEnum.Dashboard} element={<Home />} />
          <Route path="*" element={<Navigate to={RouterEnum.Dashboard} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);