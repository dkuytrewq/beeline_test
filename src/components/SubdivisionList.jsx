import React, { useState } from 'react';
import "../style.css";

const SubdivisionList = ({ listOfSubdivisions }) => {
    // Сортировка подразделений по коду
    const arrSortedSubdivisions = listOfSubdivisions.sort((a, b) =>
        a.code.localeCompare(b.code)
    );

    const [arrOpenedSubs, setArrOpenedSubs] = useState([]);
    const [objViewedStatus, setObjViewedStatus] = useState({});

    const toggleSubdivision = (id) => {
        if (arrOpenedSubs.includes(id)) {
            // Если id уже есть в arrOpenedSubs, удаляем его из массива
            setArrOpenedSubs(arrOpenedSubs.filter((subId) => subId !== id));
        } else {
            // Если id нет в arrOpenedSubs, добавляем его в массив
            setArrOpenedSubs([...arrOpenedSubs, id]);

            // Помечаем, что подразделение было просмотрено
            if (!objViewedStatus[id]) {
                setObjViewedStatus({ ...objViewedStatus, [id]: true });
            }
        }
    };

    const isOpen = (id) => arrOpenedSubs.includes(id);
    const isViewed = (id) => objViewedStatus[id];

    return (
        <div className="subdivision-list">
            {arrSortedSubdivisions.map((subdivision) => (
                <div key={subdivision.id} className="subdivision-container">
                    <div
                        className="subdivision"
                        onClick={() => toggleSubdivision(subdivision.id)}
                    >
                        <div className="subdivision-code">{subdivision.code}</div>
                        <div className="subdivision-name">{subdivision.name}</div>
                        <div
                            className={`status-indicator ${
                                isViewed(subdivision.id) ? "green" : "red"
                            }`}
                        ></div>
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
