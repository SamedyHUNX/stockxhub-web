import { toast } from "sonner";

export const showSuccess = (message: string) => {
  toast.success(message, {
    style: {
      background: "green",
      color: "white",
    },
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    style: {
      background: "red",
      color: "white",
    },
  });
};
