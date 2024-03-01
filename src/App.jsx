import React from 'react';
import MainNavigation from './components/MainNavigaton';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import AddData from './pages/AddData';
import IdentityForm from './components/IdentityForm';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <main className="ml-20">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/add" element={<AddData />}>
          <Route index element={<Navigate to="identity" replace />} />
          <Route path="identity" element={<IdentityForm />} />
          <Route path="employer" element={<IdentityForm />} />
          <Route path="school" element={<IdentityForm />} />
          <Route path="currentSpouse" element={<IdentityForm />} />
          <Route path="currentSpousePrior" element={<IdentityForm />} />
          <Route path="priorSpouse" element={<IdentityForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
