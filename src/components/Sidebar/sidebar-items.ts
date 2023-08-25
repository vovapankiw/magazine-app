import PsychologyIcon from '@mui/icons-material/Psychology';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type SidebarItem = {
  section: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, 'svg'>> & { muiName: string };
  link: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    section: 'Dashboard',
    icon: DashboardCustomizeIcon,
    link: 'dashboard'
  },
  {
    section: 'Magazines',
    icon: NewspaperIcon,
    link: 'magazine'
  },
  {
    section: 'Preferences',
    icon: PsychologyIcon,
    link: 'preferences'
  }
];
