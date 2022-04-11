import Home from "../containers/home";
import { RouteProps } from "react-router-dom";
import Sobre from "../containers/sobre";
import Combustivel from "../containers/combustivel";
import StarWarsDetails from "../containers/star-wars-details";
import Cache from "../containers/cache";
import Eleicoes from "../containers/eleicoes";


const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, component: Home, exact: true },
  { path: `${publicUrl}/home`, name: 'Home', component: Home, exact: true },
  { path: `${publicUrl}/combustivel`, name: 'Combustível', component: Combustivel, exact: true },
  { path: `${publicUrl}/sobre`, name: 'Sobre', component: Sobre, exact: true },
  { path: `${publicUrl}/star-wars/:id`, name: 'Star Wars', component: StarWarsDetails, exact: true },
  { path: `${publicUrl}/cache`, name: 'Cache', component: Cache, exact: true },
  { path: `${publicUrl}/eleicoes`, name: 'Eleições', component: Eleicoes, exact: true },
  
];