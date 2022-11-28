import { DataList } from "@/components/molecules/DataList";
import { Typography } from "@/components/atoms";

type Data = {
  id: number;
  userId: number;
  title: string;
};

const fetchUsers: () => Promise<Data[]> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Page() {
  const data = await fetchUsers();

  return (
    <div className="wrapper">
      <div className="inner">
        <Typography variant="h1" className="border">
          Data fetching test😉
        </Typography>
        <DataList data={data} />
      </div>
    </div>
  );
}
