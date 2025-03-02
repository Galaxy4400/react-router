import "../app/assets/index.css";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")!).render(
	<StyledEngineProvider injectFirst>
		<CssBaseline />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StyledEngineProvider>
);
