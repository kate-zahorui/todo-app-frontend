import { Theme, useMediaQuery } from '@mui/material';

type IScreen = 'mobile' | 'tablet' | 'desktop';

export default function useMediaScreen(device: IScreen) {
  switch (device) {
    case 'mobile':
      return useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')); // sm, small: 425px
    case 'tablet':
      return useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));
    case 'desktop':
      return useMediaQuery((theme: Theme) => theme.breakpoints.up('md')); // md, medium: 768px
    default:
      return useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  }
}
