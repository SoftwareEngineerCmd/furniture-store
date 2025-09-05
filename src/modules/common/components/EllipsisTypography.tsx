import { Tooltip, Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

export const EllipsisTypography: FC<Omit<TypographyProps, 'sx'>> = props => {
  return (
    <Tooltip title={props.children} arrow>
      <Typography
        sx={{
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
        variant="body2"
        {...props}
      />
    </Tooltip>
  );
};
