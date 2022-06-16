import React from "react";
import { Alert } from "@mui/material";
function Notification({ type, message }) {
  return (
    <div>
      <Alert severity={type}>{message}</Alert>
    </div>
  );
}

export default Notification;
