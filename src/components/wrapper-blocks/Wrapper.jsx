export function Wrapper({ objProps, children }) {
  return (
    <section className={`${objProps.secName} st-section`}>
      <div className={`${objProps.wrapName} st-wrapper`}>
        <h2 className="st-title">{objProps.titleValue}</h2>
        <div className={`${objProps.descName} st-desc`}>{objProps.descValue}</div>
        {children}
      </div>
    </section>
  );
}
