// src/components/ui/Toast.tsx

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = () => (
  <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
);

export const showToast = (message: string, type: 'success' | 'error') => {
  if (type === 'success') {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
