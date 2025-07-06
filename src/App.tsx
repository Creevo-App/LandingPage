import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Landing } from './pages/landing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          {/* <Route path="about" element={<About />} />
          <Route path="waitlist" element={<Waitlist />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
