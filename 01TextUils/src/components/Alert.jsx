function Alert(props) {
    const capitalize = (word) => {
      const lower = word.toLowerCase(); // Fixed variable
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
  
    // Prevent rendering if alert is null
    if (!props.alert) return null;
  
    return (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
  }
  
  export default Alert;
  