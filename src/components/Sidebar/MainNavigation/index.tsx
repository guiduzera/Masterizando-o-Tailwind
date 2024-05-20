import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem spanText="Home" mainIcon={Home} path="/" />
      <NavItem spanText="Dashboard" mainIcon={BarChart} path="/" />
      <NavItem spanText="Projects" mainIcon={SquareStack} path="/" />
      <NavItem spanText="Tasks" mainIcon={CheckSquare} path="/" />
      <NavItem spanText="Reporting" mainIcon={Flag} path="/" />
      <NavItem spanText="Users" mainIcon={Users} path="/" />
    </nav>
  )
}
