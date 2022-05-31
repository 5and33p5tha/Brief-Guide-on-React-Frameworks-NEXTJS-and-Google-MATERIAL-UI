// In Next JSON, we cannot use react router dom as for router, route and routes. So we have to give individual page name for each.
// What we can do is put them in another folder and use folder name/page name in url

// Hence, by default index.js is opened. To display Firstpage.js in index.html, copy all the codes and paste it there and remove unneeded codes of index.js



//In NextJS, Use SFC instead of rafce , SFC is Stateless Function Component For NextJS
import Head from "next/head";

//As in Head, we need to import Image to use Image Tag
import style from "../styles/Firstpage.module.css";

const Firstpage = () => {
  return (
    <>
      <Head>
        <title>My Next App</title>
      </Head>

      <h1 className={style.h1}>This is my first page.</h1>
      {/* In NextJS, we cannot styly ttml elements by just h1, each elements also need . like .h1 to style them */}
      {/* All styles are in styles folder and all styles must be named stylename/modules.css like Firstpage.modules.css
      Does not need to have the page name as its beginning point */}
    </>
  );
};

export default Firstpage;
