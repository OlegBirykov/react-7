function Popular(props) {
  const { children } = props;
  
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  )
};

export default Popular;