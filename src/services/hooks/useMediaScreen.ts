import { Theme, useMediaQuery } from '@mui/material';

type IScreen = 'mobile' | 'tablet' | 'desktop';

export default function useMediaScreen(device: IScreen) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')); // sm, small: 425px
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md')); // md, medium: 768px

  switch (device) {
    case 'mobile':
      return isMobile;
    case 'tablet':
      return isTablet;
    case 'desktop':
      return isDesktop;
    default:
      return isDesktop;
  }
}
