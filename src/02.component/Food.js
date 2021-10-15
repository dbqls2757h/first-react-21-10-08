export const Food = ({ menu }) => {
  //   console.log(menu);

  return (
    <>
      <ul>
        <li>
          오늘의 메뉴는 <b>{menu[0].name}</b> 사이드 메뉴는{" "}
          <b>{menu[0].side}</b>
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[1].name}</b> 사이드 메뉴는{" "}
          <b>{menu[1].side}</b>
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[2].name}</b> 사이드 메뉴는{" "}
          <b>{menu[2].side}</b>
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[3].name}</b> 사이드 메뉴는{" "}
          <b>{menu[3].side}</b>
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[4].name}</b> 사이드 메뉴는{" "}
          <b>{menu[4].side}</b>
        </li>
      </ul>
    </>
  );
};
