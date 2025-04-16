import PropTypes from "prop-types";
export function HomeOne({ title, content, extraContent, name }) {
  return (
    <div className="group1">
      <PoolIcon name={name}/>
      <h4>{title}</h4>
      <p>{content}</p>
      {extraContent && <p>{extraContent}</p>}
    </div>
  );
}
function PoolIcon({name}) {
  return (
    <span className="material-symbols-outlined"
    style={{ fontSize: '4rem', color: 'green' }}>
      {name}
    </span>
  );
};

export function HomeTwo({ title, content, stylez, goal }) {
  return (
    <div className="group2">
      <span></span>
      <div style={stylez}>
        <span></span>
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{goal}</p>
    </div>
  );
}

export function HomeThree({ src, size, title, content, alt }) {
  return (
    <div className="group3">
      <figure>
        <img src={src} height={size} alt={alt} />
        <figcaption>{alt}</figcaption>
      </figure>

      <div className="group3-info">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

HomeOne.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  extraContent: PropTypes.string,
};
HomeTwo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  stylez: PropTypes.object.isRequired,
  goal: PropTypes.string.isRequired,
};
HomeThree.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
