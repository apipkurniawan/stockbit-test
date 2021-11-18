import "./LoadingSpinner.scss";

interface Props {
  asOverlay: any;
}

const LoadingSpinner: React.FC<Props> = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay && "loading-spinner__overlay"}`}>
      <div className="load-ball">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
