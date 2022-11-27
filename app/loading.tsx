import LoadingIcon from "@/components/atoms/Loading";

export default function Loading() {
  return (
    <div className="wrapper">
      <div
        className="inner"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LoadingIcon loading={true} width="50px" height="50px" />
      </div>
    </div>
  );
}
