const Job = (props) => {
  return (
    <div className={props.jobStyle} style={props.jobStyling}>
      <h1>{props.title}</h1>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};
export default Job;
