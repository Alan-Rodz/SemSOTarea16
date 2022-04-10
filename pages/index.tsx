import type { NextPage } from 'next';
import { NavBar } from '../component/NavBar';
import { PaginaPrincipal } from '../component/PaginaPrincipal';

// ********************************************************************************
export const GLOBAL_COLOR = '#caf0f8';
export const GLOBAL_SECONDARY_COLOR = '#00b4d8';
export const GLOBAL_BORDER_RADIUS = 10;
export const GLOBAL_PADDING = 5;

// === Component ================================================================== 
const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <PaginaPrincipal />
    </>
  )
}

export default Home
