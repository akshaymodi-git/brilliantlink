import { useRouter } from "next/router";

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return <div>This is item {id}</div>;
};

export default ItemPage;
