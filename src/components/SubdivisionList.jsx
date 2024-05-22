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
                <div key={subdivision.id} className="subdivision-container">
                    <div className="subdivision">
                        <div className="subdivision-code">{subdivision.code}</div>
                        <div className="subdivision-name">{subdivision.name}</div>
                        <div className="status-indicator">Статус</div>
                        <div className="arrow">*</div>
                    </div>
                    <div className="positions">
                        {subdivision.listOfPositions.map((position) => (
                            <div key={position.id} className="position">
                                <div className="position-name">{position.name}</div>
                                <div className="collaborator-fullname">{position.collaboratorFullname}</div>
                            </div>
                        ))}
                    </div>
                </div>

            ))}
        </div>
    );
};

export default SubdivisionList;
