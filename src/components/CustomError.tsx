import { Alert, AlertTitle, Stack, styled, Typography } from '@mui/material';
import { CustomButton } from './Atomic/CustomButton';

export interface CustomErrorProps {
  errorMsg: string;
  errorDetails?: string;
  onRetry?: () => void;
}

const ErrContainer = styled(Stack)(() => ({
  width: '100%',
  minHeight: '300px',
  marginTop: '16px',
}));

export function CustomError(props: CustomErrorProps) {
  return (
    <ErrContainer>
      <Alert severity="error">
        <AlertTitle>
          <b>{props.errorMsg}</b>
        </AlertTitle>
        <Stack direction="row" justifyContent="space-between">
          {props.errorDetails && <Typography>{props.errorDetails}</Typography>}
          {props.onRetry && <CustomButton variant="text">Retry</CustomButton>}
        </Stack>
      </Alert>
    </ErrContainer>
  );
}
