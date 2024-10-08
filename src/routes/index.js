
import Menu from "../pages/Product/Menu";
import MenuDetails from "../pages/Product/Menudetails";
import RentNow from "../pages/Product/RentNow";
import Test from "../pages/Test";
import Account from "../pages/account/Account";
import AddBankDetails from "../pages/account/Component/AddBankDetails";
import AddedBankDetailList from "../pages/account/Component/AddedBankDetailList";
import BatHistorys from "../pages/account/Component/BatHistory";
import Feedback from "../pages/account/Component/Feedback";
import Fund from "../pages/account/Component/Fund";
import FundTransfer from "../pages/account/Component/FundTransfer";
import FundTransferHistory from "../pages/account/Component/FundTransferHistory";
import GameNotification from "../pages/account/Component/GameNotification";
import Gamestaticks from "../pages/account/Component/Gamestaticks";
import Income from "../pages/account/AccountSubSection/Income/IncomeSubParts/Income";
import Languages from "../pages/account/Component/Language";
import LoginPassword from "../pages/account/Component/LoginPassword";
import Mail from "../pages/account/Component/Mail";
import Notification from "../pages/account/Component/Notification";
import SettingCenter from "../pages/account/Component/SettingCenter";
import Register from "../pages/auth/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import FundRequest from "../pages/dashboard/FundRequest";
import Withdrawl from "../pages/dashboard/Withdrawl";
import MainPageOFIncome from "../pages/income/MainPageOFIncome";
import Promotion from "../pages/promotion/Promotion";
import CustomerLine from "../pages/promotion/component/CustomerLine";
import CustomerQueryHistory from "../pages/promotion/component/CustomerQueryHistory";
import Invitaton from "../pages/promotion/component/Invitaton";
import PromotionRule from "../pages/promotion/component/PromotionRule";
import RobateRetio from "../pages/promotion/component/RebateRatio";
import Services from "../pages/promotion/component/Services";
import Subordinate from "../pages/promotion/component/Subordinate";
import TeamData from "../pages/promotion/component/TeamData";
import TeamReports from "../pages/promotion/component/TeamReport";
import Wallet from "../pages/wallet/Wallet";
import DepositeHistory from "../pages/wallet/component/DepositeHistory";
import QRScreen from "../pages/wallet/component/QRScreen";
import WalletRecharge from "../pages/wallet/component/WalletRecharge";
import WithdravalHistory from "../pages/wallet/component/WithdravalHistory";
import WinLossPopup from "../pages/win/component/WinOneMin/WinLossPopup";
import Win from "../pages/win/win";
import Cashback from "../pages/account/AccountSubSection/Income/IncomeSubParts/Cashback";
import ROI from "../pages/account/AccountSubSection/Income/IncomeSubParts/RoiIncome";
import Level from "../pages/account/AccountSubSection/Income/IncomeSubParts/LevelBonus";
import Bonus from "../pages/Bonus/Bonus";
import CreditReport from "../pages/wallet/component/CreditReport";

export const routes = [
    {
        path: "/win-los",
        component: <WinLossPopup />
    },
    {
        path: "/account",
        component: <Account />
    },
    {
        path: "/account/income-main/income",
        component: <Income />
    },
    {
        path: "/account/income-main/cashback",
        component: <Cashback />
    },
    {
        path: "/account/income-main/roi-income",
        component: <ROI />
    },
    {
        path: "/income",
        component: <Bonus />
    },
    {
        path: "/account/income-main/level-income",
        component: <Level />
    },

    {
        path: "/menu",
        component: <Menu />
    },
    {
        path: "/rent",
        component: <RentNow />
    },
    // {
    //     path: "/menu/menu-details/:m_pack_id",
    //     component: <MenuDetails />
    // },
    {
        path: "/menu/menu-details/:m_pack_id",
        component: <MenuDetails />
    },
    {
        path: "/withdravalHistory",
        component: <WithdravalHistory />
    },
    {
        path: "/Withdrawal",
        component: <Withdrawl />
    },
    {
        path: "/depositHistory",
        component: <DepositeHistory />
    },
    {
        path: "/wallet/Recharge",
        component: <WalletRecharge />
    },

    {
        path: "/wallet",
        component: <Wallet />
    },
    {
        path: "/bathistory",
        component: <BatHistorys />
    },
    {
        path: "/notification",
        component: <Notification />
    },
    {
        path: "/gamestaticks",
        component: <Gamestaticks />
    },
    {
        path: "/Language",
        component: <Languages />
    },
    {
        path: "/SettingCenter",
        component: <SettingCenter />
    },
    {
        path: "/fund",
        component: <Fund />
    },
    {
        path: "/fund/fundtransfer",
        component: <FundTransfer />
    },
    {
        path: "/fund/fundhistory",
        component: <FundTransferHistory />
    },
    {
        path: "/SettingCenter/LoginPassword",
        component: <LoginPassword />
    },
    {
        path: "/SettingCenter/mail",
        component: <Mail />
    },
    {
        path: "/feedback",
        component: <Feedback />
    },
    {
        path: "/gameNotification",
        component: <GameNotification />
    },
    {
        path: "/services",
        component: <Services />
    },
    {
        path: "/queries",
        component: <CustomerQueryHistory />
    },
    {
        path: "/test",
        component: <Test />
    },
    {
        path: "/register",
        component: <Register />
    },
    {
        path: "/dashboard",
        component: <Dashboard />
    },

    {
        path: "/win",
        component: <Win />
    },
    {
        path: "/credit",
        component: <CreditReport />
    },
    {
        path: "/promotion",
        component: <Promotion />
    },
    {
        path: "/promotion/Subordinate",
        component: <Subordinate />
    },
    {
        path: "/promotion/PromotionShare",
        component: <Invitaton />
    },
    {
        path: "/promotion/TeamReport/",
        component: <TeamReports />
    },
    {
        path: "/promotion/TeamReport/data",
        component: <TeamData />
    },
    {
        path: "/promotion/PromotionRule/",
        component: <PromotionRule />
    },
    {
        path: "/promotion/RebateRatio/",
        component: <RobateRetio />
    },
    {
        path: "/promotion/customerLine/",
        component: <CustomerLine />
    },
    {
        path: "/view_fund_request",
        component: <FundRequest />
    },
    {
        path: "/account/income-main",
        component: <MainPageOFIncome />
    },
   
    {
        path: "/add-bank-details",
        component: <AddBankDetails />
    },
    {
        path: "/add-bank-details/pre-added-bank-details",
        component: <AddedBankDetailList />
    },
    {
        path: "/deposit/qr-screen",
        component: <QRScreen />
    },

]