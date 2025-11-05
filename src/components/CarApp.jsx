import { useDispatch, useSelector } from "react-redux";

export default function CarApp() {
  const cars = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Car Shop</h1>
      <ul style={{ display: "flex", gap: "20px" }}>
        {cars.map(({ make, quantity, id }) => (
          <div
            key={id}
            style={{
              border: "1px solid #aaa",
              borderRadius: "6px",
              padding: "15px",
              width: "100px",
            }}
          >
            <p>{make}</p>
            <p>{quantity}</p>
            <button onClick={() => dispatch({ type: "car/sell", payload: id })}>
              Sell
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
