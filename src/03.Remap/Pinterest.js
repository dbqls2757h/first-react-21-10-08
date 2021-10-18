import { menus } from "./PinterestApi";
import { todayImgs } from "./PinterestApi";

export const Pinterest = () => {
  const fontStyle = {
    fonsSize: "16px",
    color: "gray",
  };

  return (
    <div class="wrap">
      <header>
        <div class="in_header">
          <div class="logo">BRANDI</div>

          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>{menu.name}</li>
            ))}
          </ul>
        </div>
      </header>

      <section>
        <div class="sec_wrap">
          <h3 style={{ marginLeft: "30px" }}>오늘은 이 상품 어때요?</h3>

          <div class="today_wrap">
            {todayImgs.map((todayImg) => (
              <div class="today_con" key={todayImg.id}>
                <div
                  class="today_img"
                  style={{
                    width: "100%",
                    height: "400px",
                    background: `url(${todayImg.img}) no-repeat center/cover`,
                  }}
                ></div>
                <h6 style={fontStyle}>{todayImg.title}</h6>
                <h5 style={{ fontWeight: "400" }}>{todayImg.desc}</h5>
                <h5 style={{ fontWeight: "900" }}>{todayImg.price}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
