
const RecipeOptions = (props) => {

    return <div className='metadata'>
        <div className="metadataElement">
            Number of diners
        </div>
        <div className="metadataElement right">
            <button className="metaMinus" onClick={() => props.setNumberOfDiners(props.numberOfDiners - 1)}>-</button>
            <span className="metaNumber">{props.numberOfDiners}</span>
            <button onClick={() => props.setNumberOfDiners(props.numberOfDiners + 1)}>+</button>
        </div>
        <div className="metadataElement">
            Number of days
        </div>
        <div className="metadataElement right">
            <button className="metaMinus" onClick={() => props.setNumberOfDays(props.numberOfDays - 1)}>-</button>
            <span className="metaNumber">{props.numberOfDays}</span>
            <button onClick={() => props.setNumberOfDays(props.numberOfDays + 1)}>+</button>
        </div>
        <div className="metadataElement">
            Portions per day
        </div>
        <div className="metadataElement right">
            <button className="metaMinus" onClick={() => props.setPortionsPerDay(props.portionsPerDay - 1)}>-</button>
            <span className="metaNumber">{props.portionsPerDay}</span>
            <button onClick={() => props.setPortionsPerDay(props.portionsPerDay +    1)}>+</button>
        </div>
        <div className="metadataElement">
            Allergies
        </div>
        <div className="metadataElement right">
            
        </div>
    </div>

}

export default RecipeOptions