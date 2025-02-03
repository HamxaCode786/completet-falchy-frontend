import React, { useEffect, useState } from "react";


const Splash = ({ onFinish, duration }) => {
  const [startExit, setStartExit] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controls DOM rendering

  useEffect(() => {
    // Scroll to top when Splash loads
    window.scrollTo(0, 0);

    // Timer to start the exit animation
    const timer = setTimeout(() => {
      setStartExit(true);

      // Timer to remove component from DOM after animation
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        if (onFinish) onFinish(); // Notify parent component
      }, 500); // Match CSS fade-out animation duration

      return () => clearTimeout(exitTimer); // Cleanup exitTimer
    }, duration);

    return () => clearTimeout(timer); // Cleanup the main timer
  }, [onFinish, duration]);

  if (!isVisible) {
    return null; // Remove Splash from DOM
  }

  return (
    <section className={`splash ${startExit ? "splash--exit" : ""}`} style={{backgroundColor: '#1e1e1e'}}>
      <svg
        className={`splash__image ${startExit ? "splash__image--exit" : ""}`}
          viewBox="0 0 286 318" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M282.91 8.00922C281.937 7.94643 186.11 0.3481 143.566 0.253906H142.781C100.268 0.3481 4.44125 7.94643 3.46792 8.00922L0.64209 8.22901V146.569C6.07395 199.883 28.1468 237.435 53.3594 263.495C53.7048 263.872 54.0502 264.217 54.3955 264.563C91.194 302.02 134.241 315.302 141.933 317.437L143.346 317.845L144.194 317.468H144.351C157.381 313.795 272.267 278.158 285.642 146.569V8.22901L282.848 8.00922H282.91ZM144.696 311C145.261 312.476 145.607 313.324 145.638 313.387L139.955 315.647C139.83 315.302 138.95 313.167 137.695 309.744C123.22 304.878 88.9962 291 59.0424 260.544C57.0016 250.277 50.4394 214.263 50.2196 175.392C57.033 176.24 72.3866 177.088 89.7811 170.808C111.414 162.99 148.998 119.943 154.555 113.475C165.105 110.838 174.053 110.618 181.401 111.717C180.835 116.646 180.427 126.191 183.536 136.396C185.639 143.303 194.682 154.764 210.35 170.494C211.574 178.344 212.893 197.465 206.174 205.346C204.07 207.826 201.307 208.957 197.728 208.925C186.55 208.737 179.328 206.665 172.923 204.844C166.235 202.96 159.924 201.139 151.039 201.986C143.378 202.677 136.25 206.727 130.944 213.352C123.283 222.96 119.986 237.246 121.996 252.537C124.664 273.071 133.487 298.41 137.695 309.744C140.112 310.561 141.965 311.126 143.189 311.471C143.629 311.346 144.131 311.189 144.728 311.032C141.525 302.648 130.944 273.825 128.087 251.784C126.297 238.125 129.091 225.503 135.748 217.214C139.987 211.908 145.638 208.643 151.635 208.109C159.391 207.387 164.634 208.863 171.259 210.778C178.01 212.693 185.671 214.891 197.633 215.079C203.065 215.205 207.524 213.258 210.852 209.333C217.634 201.358 217.917 186.695 217.257 177.276C217.634 177.653 218.011 177.998 218.388 178.375C222.406 182.206 226.739 185.597 231.324 188.548C246.238 198.124 257.101 206.759 261.403 212.505C227.556 282.648 160.05 306.479 144.79 311.095L144.696 311ZM195.09 72.124C195.09 72.124 208.686 79.3456 212.924 93.2549C215.279 100.947 214.4 109.362 210.35 118.311C203.411 112.094 185.263 99.9741 154.43 107.196C152.954 103.962 150.725 97.3053 153.927 91.8106C155.309 89.4557 158.229 87.0695 161.086 84.746C165.859 80.8841 170.819 76.8651 170.16 71.3391C169.155 62.7988 153.394 51.1815 131.07 52.4374C130.661 52.4374 121.022 52.9712 111.414 61.2917C102.968 68.6702 87.8972 70.8995 72.1668 71.3391C76.7823 62.736 82.6224 54.4469 89.7811 49.0151C104.632 37.7432 128.526 26.6911 157.883 38.2141C188.842 50.3652 191.417 54.6039 193.081 57.4297C194.274 59.4078 193.991 65.4362 193.457 68.89L193.112 71.0565L195.059 72.0926L195.09 72.124ZM154.241 62.893C152.546 66.9747 147.459 76.7709 137.883 77.5559C129.154 78.2466 123.503 67.4771 121.211 61.8883C126.768 58.8427 131.289 58.5601 131.352 58.5287C140.709 57.9949 148.558 60.0986 154.241 62.893ZM115.433 65.9072C115.653 65.7188 115.873 65.5304 116.061 65.3734C119.075 72.2182 125.826 83.7099 137.035 83.7099C137.475 83.7099 137.914 83.7099 138.385 83.6471C150.662 82.6738 157.036 71.7473 159.516 66.1584C162.311 68.3249 163.881 70.4913 164.069 72.0612C164.32 74.2277 160.552 77.3047 157.224 80.0049C153.959 82.6424 150.599 85.374 148.621 88.7336C143.786 97.0227 147.177 106.316 149.123 110.335C141.839 118.719 106.83 158.123 87.6461 165.062C70.9109 171.122 55.9026 169.992 50.2196 169.207C50.5022 144.873 53.3908 123.962 58.7913 107.039L58.8541 106.787C58.8855 106.536 62.1823 92.47 69.1212 77.5245C87.1437 77.2419 105.041 74.9498 115.465 65.9072H115.433ZM279.614 146.129C277.259 169.081 271.733 188.988 264.197 206.256C256.85 198.124 242.941 188.674 234.589 183.304C230.35 180.573 226.3 177.402 222.595 173.854C220.114 171.499 217.697 169.144 215.373 166.821C200.428 151.906 191.197 140.446 189.376 134.575C186.707 125.815 186.958 117.463 187.429 112.941C201.527 116.678 208.372 124.841 208.811 125.407L211.7 128.986L213.898 124.936C220.334 113.067 221.967 101.795 218.764 91.371C214.714 78.2466 204.164 70.4913 199.831 67.7597C200.208 64.2745 200.522 57.8693 198.387 54.2585C195.467 49.4232 190.6 44.4623 160.176 32.4997C128.181 19.9405 102.246 31.9031 86.139 44.117C78.4464 49.957 72.1982 58.5915 67.3001 67.5085C65.8244 70.2087 63.2812 72.1868 60.267 72.9404C57.2528 73.6939 54.113 74.3219 54.113 74.3219C55.2433 75.044 60.7065 77.4931 62.3706 77.5245C56.2794 91.2768 53.328 103.585 52.9198 105.249C47.174 123.334 44.1912 145.69 44.0656 171.719C43.94 204.31 48.3671 235.425 51.2557 252.098C29.6853 227.293 11.6 192.975 6.79611 146.098V13.8807C22.9661 12.6247 104.632 6.43932 142.812 6.37652H143.597C181.777 6.43932 263.444 12.6247 279.614 13.8807V146.129Z" fill="#ededed"/>
        <path d="M145.638 313.388L139.955 315.649C139.83 315.304 138.951 313.168 137.695 309.746C140.112 310.562 141.965 311.128 143.189 311.473C143.629 311.347 144.131 311.19 144.728 311.033C145.293 312.509 145.638 313.357 145.67 313.42L145.638 313.388Z" fill="#ededed"/>
        <path d="M145.638 313.388L139.955 315.649C139.83 315.304 138.951 313.168 137.695 309.746C140.112 310.562 141.965 311.128 143.189 311.473C143.629 311.347 144.131 311.19 144.728 311.033C145.293 312.509 145.638 313.357 145.67 313.42L145.638 313.388Z" fill="#ededed"/>

      </svg>
    </section>
  );
};

export default Splash;