import { GetServerSideProps } from "next";

const page = () => {
  return <div>project</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default page;
