const LoadingElevaty = ({
  width = "60px",
  height = "60px",
  duration = "durDefault",
  color = "#FFB32C" 
}) => {
  const durDefault = "3.0058062130189507s";
  const durFast = "1.0058062130189507s";

  const animationDuration = duration === "durFast" ? durFast : durDefault;

  return (
    <svg
      id="Vector"
      width="576"
      height="576"
      viewBox="0 0 576 576"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: width, maxHeight: height }}
    >
      <path
        d="M224 32H480C515.346 32 544 60.6538 544 96V352M224 32H32L32 96C32 166.692 89.3075 224 160 224H416C486.692 224 544 281.308 544 352M224 32C294.692 32 352 89.3076 352 160V416C352 486.692 409.308 544 480 544H544V352"
        stroke={color} // Usando a prop color
        strokeWidth="64"
        strokeDasharray="0,0,1849.9958995333159,590.9101063260592"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount="indefinite"
          dur={animationDuration}
          values="0,0,1849.9958995333159,590.9101063260592;
            0,590.9101063260592,1849.9958995333159,0;
            1849.9958995333159,590.9101063260592,0,0"
          keyTimes="0; 0.24208638305104102; 1"
          begin="0.6464283864267399s"
        />
      </path>
    </svg>
  );
};


export default LoadingElevaty;
