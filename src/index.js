import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './client/components/Home';
import AboutUs from './client/components/aboutus';
import Login from './client/components/login';
import ServiceOne from './client/components/serviceOne';
import CommmunitySupport from './client/components/communitySupport';
import CommmunityNursing from './client/components/communityNursing';
import GroupBasedActivities from './client/components/groupBasedActivities';
import Contact from './client/components/contact';
import Donation from './client/components/donation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/serviceOne" element={<ServiceOne />}>
        </Route>
        <Route path="/communitySupport" element={<CommmunitySupport />}>
        </Route>
        <Route path="/communityNursing" element={<CommmunityNursing />}>
        </Route>
        <Route path="/groupBasedActivities" element={<GroupBasedActivities />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/aboutus" element={<AboutUs />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/donation" element={<Donation />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

