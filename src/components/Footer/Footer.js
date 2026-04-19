import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      
      {/* колонки */}
      <div className="col col1">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>

      <div className="col col2">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>

      <div className="col col3">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>

      <div className="col col4">
        <h4>Заголовок підрозділу</h4>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
        <p>Зміст підтеми</p>
      </div>

      {/* соцсети */}
      <div className="socials">
        <span>📷</span>
        <span>✖</span>
        <span>🐦</span>
        <span>✈</span>
      </div>

      {/* платежи */}
      <div className="payments">
        <span>VISA</span>
        <span>MC</span>
        <span>PayPal</span>
        <span>МИР</span>
      </div>

      {/* кнопка */}
      <button className="scroll-top">↑</button>

      {/* низ */}
      <div className="bottom">
        <span>Заголовок підрозділу</span>
        <span>Заголовок підрозділу</span>
        <span>Заголовок підрозділу</span>
        <span>Заголовок підрозділу</span>
      </div>

    </div>
  );
};

export default Footer;