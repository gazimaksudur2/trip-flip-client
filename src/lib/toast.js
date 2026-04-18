import { toast as sonnerToast } from 'sonner';

export const toast = {
  success: (message) => sonnerToast.success(message),
  error: (message) => sonnerToast.error(message),
  warning: (message) => sonnerToast.warning(message),
  info: (message) => sonnerToast.info(message),
};
