import Head from "next/head";
import Link from "next/link";
//This entie page is dedicated to fetch the data and sort it out from json.placeholder

//Here, these codes fetches the data from jsonplaceholder.typicode.com/users

export const getStaticPaths = async () => {
  // This is the way to define and export out functions in NextJS
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userdata = await response.json(); //Here, json() makes the result in json format.
  //We do json as if we dont,  the results arrive in string format which is harder to access.
  //json() makes it earies to access

  const paths = userdata.map((data) => {
    return {
      params: { id: data.id.toString() },
      //The Get The Valariables In URL
    };
  });
  return {
    paths,
    fallback: false, //Only For Custom Error 404 Message
  };
};

//The Following codes works on the url path provided from above and works to unravel the datas
export const getStaticProps = async (context) => {
  //Can Also Do:- As The Above paths Values are stored in this context
  //export const getStaticProps=async(paths)=>{
  // const id=context.params.id
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const userdata = await response.json();

  return {
    props: { userinfo: userdata },
  };
};

const userDetails = ({ userinfo }) => {
  return (
    <>
      <h1>{userinfo.name}</h1>
      <h2>{userinfo.username}</h2>
      <h2>{userinfo.email}</h2>
      {/* <h3>{userinfo.address.city}</h3> */}
      <p>
        {userinfo.phone}, {userinfo.website}
      </p>
    </>
  );
};

export default userDetails;
