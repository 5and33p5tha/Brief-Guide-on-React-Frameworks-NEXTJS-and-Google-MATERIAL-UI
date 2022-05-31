//Unlike React where we use rafce or rfce, in Next js, we use sfc for function
//sfc- stateless function component

//In Next Js, We need The Head Component of Html aswell in index.js so as to give links, title for documents etc

// const FirstPage = () => {
//     return (  );
// }

// export default FirstPage;

//In NextJS, The Pages are written in small letters but capital is also allowed unlike React JS where it was small to avoid errors.

import Header2 from "../component/Header2";

const first = () => {
  return (
    <>
      <Header2></Header2>

      {/* <h1 className={style.h1}>This Is My First Page</h1>
    //If we were to give style,
In Next JS, We Cannot give direct css to the elements. Hence We Have to Use it Likewise */}
    </>
  );
};

export default first;
