import "./index.css";
import MinimalTiptapOne from "./Editor";
import { cn } from "./lib/utils";

function App() {
	return (
		<div className="h-screen w-screen">
			<MinimalTiptapOne
				throttleDelay={1000}
				className={cn("h-full w-full rounded-xl")}
				editorContentClassName="overflow-auto h-full"
				output="html"
				placeholder="Comment here..."
				editable={true}
				editorClassName="focus:outline-hidden px-5 py-4 h-full"
			/>
		</div>
	);
}

export default App;
