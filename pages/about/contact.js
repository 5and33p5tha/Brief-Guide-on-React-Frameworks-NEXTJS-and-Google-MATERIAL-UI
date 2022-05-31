import Image from "next/image";
import Footer from "../../component/Footer";
//Removed as we later changed it to wrap component by layout, so not necessary to import headder, footer and individual bootstrap for them
import Header from "../../component/Header";

const firstpage_about = () => {
  return (
    <>
      <h1>This is contact page.</h1>
      <Image
        //img will not work in NextJS, so we use Image in place of img
        src="/img1.jpg"
        width="600px"
        height="300px"
        layout="fill"
        alt="image"
      ></Image>
    </>
  );
};

export default firstpage_about;
