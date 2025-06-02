import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TooltipProvider delayDuration={0}>
			<App />
			<Toaster />
		</TooltipProvider>
	</React.StrictMode>,
);
