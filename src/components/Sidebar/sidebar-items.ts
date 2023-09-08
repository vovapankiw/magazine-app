import PsychologyIcon from '@mui/icons-material/Psychology';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export type SidebarItem = {
  section: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, 'svg'>> & { muiName: string };
  link: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    section: 'Dashboard',
    icon: QueryStatsIcon,
    link: 'dashboard'
  },
  {
    section: 'Magazines',
    icon: DashboardCustomizeIcon,
    link: 'magazine'
  },
  {
    section: 'Preferences',
    icon: PsychologyIcon,
    link: 'preferences'
  }
];
