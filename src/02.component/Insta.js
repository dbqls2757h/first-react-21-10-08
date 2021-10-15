export const Insta = ({ allUser }) => {
  return (
    <>
      <div class="wrap">
        <div class="profile_wrap">
          <div class="avatar"></div>
          <div class="user_name">{allUser[1].userId}</div>
        </div>
        <section></section>
      </div>
    </>
  );
};
