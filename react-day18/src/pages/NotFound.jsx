import notFoundImg from "../assets/images/404.png";

function NotFound() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        marginTop: "100px",
        color: "white"
      }}
    >
      <img src={notFoundImg} width="400" />
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

export default NotFound;