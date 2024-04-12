import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/auth-layout/AuthLayout";
import MainLayout from "./layout/main-layout/MainLayout";

// Lazy load pages

const BasicInfo = lazy(() =>
  import("./components/member-details/basicinfo/BasicInfo.jsx")
);
const BondHist = lazy(() => import("./components/member-details/BondHist"));
const BusinessHist = lazy(() =>
  import("./components/member-details/BusinessHist")
);
const ConsultHist = lazy(() =>
  import("./components/member-details/ConsultHist")
);
const InvestDetail = lazy(() =>
  import("./components/member-details/InvestDetail")
);
const InvestHist = lazy(() => import("./components/member-details/InvestHist"));
const OnetoneHist = lazy(() =>
  import("./components/member-details/OnetoneHist")
);
const SmsManage = lazy(() => import("./components/member-details/SmsManage"));
const TransactionHist = lazy(() =>
  import("./components/member-details/TransactionHist")
);

const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("./pages/auth/RegisterPage"));
const DashboardPage = lazy(() => import("./pages/dashboard/DashboardPage"));
const MembersPage = lazy(() => import("./pages/member-management/MembersPage"));
const MembersDetailsPage = lazy(() =>
  import("./pages/member-management/MembersDetailsPage")
);
const BusinessPage = lazy(() =>
  import("./pages/business-managment/BusinessPage")
);
const FundingPage = lazy(() =>
  import("./pages/funding-management/FundingPage")
);
const InvestmentPage = lazy(() =>
  import("./pages/investment-managment/InvestmentPage")
);
const BondPage = lazy(() => import("./pages/bond-management/BondPage"));
const PaymentPage = lazy(() =>
  import("./pages/payment-management/PaymentPage")
);
const TaxPage = lazy(() => import("./pages/tax-management/TaxPage"));
const HistoryPage = lazy(() =>
  import("./pages/history-management/HistoryPage")
);
const ExhibitionPage = lazy(() =>
  import("./pages/exhibition-management/ExhibitionPage")
);
const SystemPage = lazy(() => import("./pages/system-management/SystemPage"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

const myroutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/auth" element={<AuthLayout />}>
        <Route
          path="login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route path="" element={<Navigate to="login" replace={true} />} />
      </Route>
      <Route path="" element={<MainLayout />}>
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path="members"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MembersPage />
            </Suspense>
          }
        />
        <Route
          path="members/details/:memberId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MembersDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="basicinfo"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BasicInfo />
              </Suspense>
            }
          />
          <Route
            path="investtype"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <InvestDetail />
              </Suspense>
            }
          />
          <Route
            path="transachist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TransactionHist />
              </Suspense>
            }
          />

          <Route
            path="business_hist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BusinessHist />
              </Suspense>
            }
          />
          <Route
            path="invest_hist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <InvestHist />
              </Suspense>
            }
          />
          <Route
            path="bond_hist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BondHist />
              </Suspense>
            }
          />
          <Route
            path="sms_manage"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SmsManage />
              </Suspense>
            }
          />
          <Route
            path="consult_hist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ConsultHist />
              </Suspense>
            }
          />

          <Route
            path="onetoonehist"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OnetoneHist />
              </Suspense>
            }
          />
          <Route path="" element={<Navigate to="basicinfo" replace={true} />} />
        </Route>

        <Route
          path="business"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BusinessPage />
            </Suspense>
          }
        />
        <Route
          path="fundings"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FundingPage />
            </Suspense>
          }
        />
        <Route
          path="investments"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <InvestmentPage />
            </Suspense>
          }
        />

        <Route
          path="debts"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BondPage />
            </Suspense>
          }
        />
        <Route
          path="payments"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PaymentPage />
            </Suspense>
          }
        />

        <Route
          path="taxes"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TaxPage />
            </Suspense>
          }
        />
        <Route
          path="history"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HistoryPage />
            </Suspense>
          }
        />
        <Route
          path="exhibitions"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ExhibitionPage />
            </Suspense>
          }
        />
        <Route
          path="system"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SystemPage />
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="dashboard" replace={true} />} />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Route>
  )
);

export default myroutes;
