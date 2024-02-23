import React from "react";
import { StyledButton } from "./ClearStorage.styles";

export default function ClearStorage() {
  return (
    <div>
      <StyledButton
        onClick={() => {
          localStorage.clear();
          window.location.reload(false);
        }}
      >
        Clear Local Storage
      </StyledButton>
    </div>
  );
}
