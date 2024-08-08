import styled from "styled-components";
import { RootBlock } from "./styled";
import React, { useState, useEffect } from "react";
import AppRoutes from "./routes";

function App() {

  return (
      <RootBlock className="App">
        <AppRoutes />
      </RootBlock>
  );
}

export default App;
