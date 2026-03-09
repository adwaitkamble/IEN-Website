/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";

// Lazy load pages
const Division = lazy(() => import("./pages/Division"));
const EnnovateX = lazy(() => import("./pages/EnnovateX"));
const RegisterEnnovateX = lazy(() => import("./pages/RegisterEnnovateX"));
const ExamsPortal = lazy(() => import("./pages/ExamsPortal"));
const Placeholder = lazy(() => import("./pages/Placeholder"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const IICPage = lazy(() => import("./pages/divisions/IICPage"));
const IPRPage = lazy(() => import("./pages/divisions/IPRPage"));
const CIILPage = lazy(() => import("./pages/divisions/CIILPage"));

const PageLoader = () => (
  <div className="min-h-screen bg-navy-950 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />

            {/* Division Pages */}
            <Route path="divisions/iic" element={<IICPage />} />
            <Route path="divisions/ipr" element={<IPRPage />} />
            <Route path="divisions/ciil" element={<CIILPage />} />
            <Route path="divisions/:id" element={<Division />} />

            {/* EnnovateX */}
            <Route path="ennovatex" element={<EnnovateX />} />
            <Route path="ennovatex/register" element={<RegisterEnnovateX />} />

            {/* Other Pages */}
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="projects" element={<Placeholder />} />
            <Route path="gallery" element={<Placeholder />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />

          </Route>

          {/* External Page */}
          <Route path="/exams" element={<ExamsPortal />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}