import { useState } from "react";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  setLoading(true);
  try {
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

export default useLogout;
