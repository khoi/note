import "./index.css";
import MinimalTiptapOne from "./Editor";
import { cn } from "./lib/utils";
import { MinimalTiptapEditor } from "./components/minimal-tiptap";

function App() {
	return (
		<div className="h-screen w-screen">
			<MinimalTiptapEditor
				throttleDelay={2000}
				className={cn("h-full min-h-56 w-full rounded-xl")}
				editorContentClassName="overflow-auto h-full"
				output="html"
				placeholder="Type your description here..."
				editable={true}
				editorClassName="focus:outline-hidden px-5 py-4 h-full"
			/>
		</div>
	);
}

export default App;
