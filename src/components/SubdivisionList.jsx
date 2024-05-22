import "../style.css";

const SubdivisionList = ({ listOfSubdivisions }) => {
    // Сортировка подразделений по коду
    const sortedSubdivisions = listOfSubdivisions.sort((a, b) =>
        a.code.localeCompare(b.code)
    );
    //console.log(sortedSubdivisions)

    return (
        <div className="subdivision-list">
            {sortedSubdivisions.map((subdivision) => (
                <div className="subdivision">
                    <div className="subdivision-code">{subdivision.code}</div>
                    <div className="subdivision-name">{subdivision.name}</div>
                    <div className="status-indicator">Статус</div>
                    <div className="arrow">*</div>
                </div>
            ))}
        </div>
    );
};

export default SubdivisionList;
