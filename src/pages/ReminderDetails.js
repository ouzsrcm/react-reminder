import {useParams} from 'react-router-dom';

function ReminderDetails(id){
    const {id: reminderId} = useParams();
    return(
        <>
            <h4>
                {reminderId}
            </h4>
        </>
    )
}

export default ReminderDetails