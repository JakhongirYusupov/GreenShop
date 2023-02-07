import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../Pages';

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}
