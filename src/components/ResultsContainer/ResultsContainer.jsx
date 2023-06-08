import React from 'react'
import './ResultContainer.css'
import NameCard from '../NameCard/NameCard'
const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    })
    return (
        <>
            <div className="results-container">{suggestedNamesJsx}</div>
        </>
    )
}

export default ResultsContainer
