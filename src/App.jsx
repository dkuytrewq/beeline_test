import { listOfSubdivisions } from "./store/listOfSubdivisions";
import SubdivisionList from "./components/SubdivisionList";

function App() {
    return (
        <>
            <SubdivisionList listOfSubdivisions={listOfSubdivisions} />
        </>
    );
}

export default App;
