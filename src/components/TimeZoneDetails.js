function TimeZoneDetails({ props }) {
  if (props)
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item">{props.text}</li>
          <li className="list-group-item">abbr: {props.abbr}</li>
          <li className="list-group-item">offset:{props.offset}</li>
          <li className="list-group-item">isdst: {props.isdst}</li>
          <li className="list-group-item">
            utc:{" "}
            {props.utc.map((u, index) => {
              return (
                <span key={index} className="badge bg-secondary m-2">
                  {u}
                </span>
              );
            })}
          </li>
        </ul>
      </>
    );
}
export default TimeZoneDetails;
