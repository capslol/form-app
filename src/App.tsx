// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import PersonalInfoForm from './pages/PersonalInfoForm';
import AddressWorkForm from './pages/AddressWorkForm';
import LoanParamsForm from './pages/LoanForm';

const App: React.FC = () => {
  return (
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PersonalInfoForm />} />
            <Route path="/address" element={<AddressWorkForm />} />
            <Route path="/loan" element={<LoanParamsForm />} />
          </Routes>
        </Router>
      </ChakraProvider>
  );
};

export default App;
