import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/* ***Layouts**** */
const FullLayout = lazy(() => import('../layouts/full-layout/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank-layout/BlankLayout'));
/* ***End Layouts**** */

const Error = lazy(() => import('../views/authentication/Error'));
const Login = lazy(() => import('../views/authentication/Login'));
const Register = lazy(() => import('../views/authentication/Register'));
const ResetPassword = lazy(() => import('../views/authentication/ResetPassword'));

/* ****Pages***** */
const Dashboard1 = lazy(() => import('../views/dashboards/Dashboard1'));
const Dashboard2 = lazy(() => import('../views/dashboards/Dashboard2'));
const Dashboard3 = lazy(() => import('../views/dashboards/Dashboard3'));

/* ****Apps***** */
const Chats = lazy(() => import('../views/apps/chats/Chats'));
const Notes = lazy(() => import('../views/apps/notes/Notes'));
const Email = lazy(() => import('../views/apps/email/Email'));
const Shop = lazy(() => import('../views/apps/shop/Shop'));
const QuillEditor = lazy(() => import('../views/quill-editor/QuillEditor'));
const Treeview = lazy(() => import('../views/treeview/Treeview'));
const Pricing = lazy(() => import('../views/pricing/Pricing'));
const CustomTimeline = lazy(() => import('../views/timeline/CustomTimeline'));
const CustomTypography = lazy(() => import('../views/typography/CustomTypography'));
const Calendar = lazy(() => import('../views/apps/calendar/ACalendar'));
const CustomerEdit = lazy(() => import('../views/apps/customers/CustomerEdit'));
const CustomerLists = lazy(() => import('../views/apps/customers/CustomerLists'));
/* ****Tables***** */
const BasicTable = lazy(() => import('../views/tables/BasicTable'));
const PaginationTable = lazy(() => import('../views/tables/PaginationTable'));
const EnhancedTable = lazy(() => import('../views/tables/EnhancedTable'));
const CollapsibleTable = lazy(() => import('../views/tables/CollapsibleTable'));
const FixedHeaderTable = lazy(() => import('../views/tables/FixedHeaderTable'));

// form elements
const ExAutoComplete = lazy(() => import('../views/form-elements/ExAutoComplete'));
const ExButton = lazy(() => import('../views/form-elements/ExButton'));
const ExCheckbox = lazy(() => import('../views/form-elements/ExCheckbox'));
const ExDateTime = lazy(() => import('../views/form-elements/ExDateTime'));
const ExRadio = lazy(() => import('../views/form-elements/ExRadio'));
const ExSlider = lazy(() => import('../views/form-elements/ExSlider'));
const ExSwitch = lazy(() => import('../views/form-elements/ExSwitch'));
const FormWizard = lazy(() => import('../views/form-layouts/FormWizard'));
// form layouts
const FormLayouts = lazy(() => import('../views/form-layouts/FormLayouts'));
const FormCustom = lazy(() => import('../views/form-layouts/FormCustom'));

// widgets
const WidgetFeed = lazy(() => import('../views/widgets/widget-feed/WidgetFeed'));
const WidgetApps = lazy(() => import('../views/widgets/widget-apps/WidgetApps'));

// userprofile
const UserProfile = lazy(() => import('../views/user-profile/UserProfile'));
const ShopDetail = lazy(() => import('../views/apps/shop-detail/ShopDetail'));

// chart
const LineChart = lazy(() => import('../views/charts/LineChart'));
const GredientChart = lazy(() => import('../views/charts/GredientChart'));
const DoughnutChart = lazy(() => import('../views/charts/DoughnutChart'));
const AreaChart = lazy(() => import('../views/charts/AreaChart'));
const ColumnChart = lazy(() => import('../views/charts/ColumnChart'));
const CandlestickChart = lazy(() => import('../views/charts/CandlestickChart'));
const RadialbarChart = lazy(() => import('../views/charts/RadialbarChart'));

// icons
const ReactIcons = lazy(() => import('../views/icons/ReactIcons'));

// Alert
const ExAlert = lazy(() => import('../views/alert/ExAlert'));

/* ****Routes***** */

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboards/dashboard1" /> },
      { path: '/dashboards/dashboard1', exact: true, element: <Dashboard1 /> },
      { path: '/dashboards/dashboard2', exact: true, element: <Dashboard2 /> },
      { path: '/dashboards/dashboard3', exact: true, element: <Dashboard3 /> },
      { path: '/customers/lists', exact: true, element: <CustomerLists /> },
      { path: '/chats', element: <Chats /> },
      { path: '/notes', element: <Notes /> },
      { path: '/email', element: <Email /> },
      { path: '/shop/lists', element: <Shop /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/customers/edit', element: <CustomerEdit /> },
      { path: '/tables/basic-table', element: <BasicTable /> },
      { path: '/tables/pagination-table', element: <PaginationTable /> },
      { path: '/tables/enhanced-table', element: <EnhancedTable /> },
      { path: '/tables/collapsible-table', element: <CollapsibleTable /> },
      { path: '/tables/fixed-header-table', element: <FixedHeaderTable /> },
      { path: '/form-layouts/form-layouts', element: <FormLayouts /> },
      { path: '/form-elements/autocomplete', element: <ExAutoComplete /> },
      { path: '/form-elements/button', element: <ExButton /> },
      { path: '/form-elements/checkbox', element: <ExCheckbox /> },
      { path: '/form-elements/date-time', element: <ExDateTime /> },
      { path: '/form-elements/radio', element: <ExRadio /> },
      { path: '/form-elements/slider', element: <ExSlider /> },
      { path: '/form-elements/switch', element: <ExSwitch /> },
      { path: '/form-layouts/form-wizard', element: <FormWizard /> },
      { path: '/widgets/widget-feed', element: <WidgetFeed /> },
      { path: '/widgets/widget-apps', element: <WidgetApps /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/shop/shop-detail', element: <ShopDetail /> },
      { path: '/charts/line-chart', element: <LineChart /> },
      { path: '/charts/gredient-chart', element: <GredientChart /> },
      { path: '/charts/doughnut-pie-chart', element: <DoughnutChart /> },
      { path: '/charts/area-chart', element: <AreaChart /> },
      { path: '/charts/column-chart', element: <ColumnChart /> },
      { path: '/charts/candlestick-chart', element: <CandlestickChart /> },
      { path: '/charts/radialbar-chart', element: <RadialbarChart /> },
      { path: '/react-icons', element: <ReactIcons /> },
      { path: '/form-layouts/form-custom', element: <FormCustom /> },
      { path: '/quill-editor', element: <QuillEditor /> },
      { path: '/treeview', element: <Treeview /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/timeline', element: <CustomTimeline /> },
      { path: '/typography', element: <CustomTypography /> },
      { path: '/alert', element: <ExAlert /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: 'auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
