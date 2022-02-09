import { Client } from "../utils/prismicHelpers";
import SliceZone from "next-slicezone";

import * as Slices from "../slices";
const resolver = ({ sliceName }) => Slices[sliceName];

const Page = (props) => <SliceZone slices={props.slices} resolver={resolver} />;

// Fetch content from prismic
export async function getStaticProps() {

  const doc = await Client().getByUID("page", "home") || {}
  console.log(doc.data)
  return {
    props: {
     slices: doc.data.slices
    }
  }
}

export default Page;
