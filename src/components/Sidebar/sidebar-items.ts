import CodeIcon from '@mui/icons-material/Code';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type SidebarItem = {
  section: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, 'svg'>> & { muiName: string };
  link: string;
};

export const sidebarItems: SidebarItem[] = [
  {
    section: 'Developer',
    icon: CodeIcon,
    link: 'developer'
  },
  {
    section: 'Access',
    icon: LoginIcon,
    link: 'access'
  },
  {
    section: 'Manage',
    icon: ManageAccountsIcon,
    link: 'management'
  },
  {
    section: 'Preferences',
    icon: PsychologyIcon,
    link: 'preferences'
  }
];
