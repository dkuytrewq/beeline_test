import React, { useState } from 'react';
import "../style.css";

const SubdivisionList = ({ listOfSubdivisions }) => {
    // Сортировка подразделений по коду
    const sortedSubdivisions = listOfSubdivisions.sort((a, b) =>
        a.code.localeCompare(b.code)
    );

    const [arrOpenedSubs, setArrOpenedSubs] = useState([]);

    const toggleSubdivision = (id) => {
        if (arrOpenedSubs.includes(id)) {
            // Если id уже есть в arrOpenedSubs, удаляем его из массива
            setArrOpenedSubs(arrOpenedSubs.filter((subId) => subId !== id));
        } else {
            // Если id нет в arrOpenedSubs, добавляем его в массив
            setArrOpenedSubs([...arrOpenedSubs, id]);
        }
    };

    const isOpen = (id) => arrOpenedSubs.includes(id);

    return (
        <div className="subdivision-list">
            {sortedSubdivisions.map((subdivision) => (
                <div key={subdivision.id} className="subdivision-container">
                    <div
                        className="subdivision"
                        onClick={() => toggleSubdivision(subdivision.id)}
                    >
                        <div className="subdivision-code">{subdivision.code}</div>
                        <div className="subdivision-name">{subdivision.name}</div>
                        <div className="status-indicator">{isOpen(subdivision.id) ? "Открыто" : "Закрыто"}</div>
                        <div className="arrow">{isOpen(subdivision.id) ? "▼" : "▲"}</div>
                    </div>
                    {isOpen(subdivision.id) && (
                        <div className="positions">
                            {subdivision.listOfPositions.map((position) => (
                                <div key={position.id} className="position">
                                    <div className="position-name">{position.name}</div>
                                    <div className="collaborator-fullname">{position.collaboratorFullname}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SubdivisionList;
