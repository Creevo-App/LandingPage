import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Landing } from './pages/landing';
import { Invest } from './pages/invest';
import { NotFound } from './pages/error/404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="invest" element={<Invest />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="about" element={<About />} />
          <Route path="waitlist" element={<Waitlist />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
