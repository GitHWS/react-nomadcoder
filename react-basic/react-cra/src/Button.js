// 터미널에 npm i prop-types 명령어를 통해 설치 후 반드시 import 해줄 것
import PropTypes from "prop-types";

// 일반적인 CSS 파일 import하기
// 해당 CSS 파일은 전역으로 적용이 되어 같은 태그/클래스명/아이디/선택자 등으로 인해 다른 컴포넌트에서도 영향을 줄 수 있음
// import "./style.css";

// CSS Module 파일 import하기
// 해당 CSS.module 파일은 import한 컴포넌트에서만 영향을 줄 수 있음
// 일반 CSS 파일보다 겹치는 클래스명을 걱정하면서 사용할 필요가 없이 해당 컴포넌트에 사용될 클래스명만 생각하면 된다는 점이 장점

// 반드시 하나의 style 객체를 import하여 사용함
import styles from "./Button.module.css";

function Button({ text }) {
  // CSS module 파일에서 import한 객체(styles)와 CSS module에서 설정한 className(.btn)을 함께 사용함
  // 렌더링 시 랜덤한 className이 적용된다.
  // console.log(styles.btn);
  return <button className={styles.btn}>{text}</button>;
}

// {Component}.propsType = { {propsName} : PropTypes.type }
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
