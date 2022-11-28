import { Input, Button, Select, Typography } from "@/components/atoms";

export default function Page() {
  const options = [
    { id: 1, value: "test", label: "test" },
    { id: 2, value: "test2", label: "test2" },
    { id: 3, value: "test3", label: "test3" },
  ];
  return (
    <div className="wrapper">
      <div className="inner">
        <Typography variant="h2" className="border">
          MUI Components + react-select
        </Typography>
        <div style={{ display: "flex", gap: "20px" }}>
          <Select width="200px" options={options} placeholder="single select" />
          <Select
            width="350px"
            options={options}
            placeholder="multi select"
            isMulti
          />
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Input variant="filled" label="お名前" />
          <Input variant="outlined" label="住所" />
          <Input variant="standard" label="電話番号" />
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Input variant="filled" placeholder="お名前" />
          <Input variant="outlined" placeholder="住所" />
          <Input variant="standard" placeholder="電話番号" />
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Button>button</Button>
          <Button variant="outlined">button</Button>
          <Button variant="text">button</Button>
        </div>
      </div>
    </div>
  );
}
