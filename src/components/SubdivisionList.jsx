import "../style.css";

const SubdivisionList = ({ listOfSubdivisions }) => {

    const sortedSubdivisions = listOfSubdivisions.sort((a, b) =>
        a.code.localeCompare(b.code)
    );
    console.log(sortedSubdivisions)
};

export default SubdivisionList;
