import { myUseDispatch, myUseSelector } from "../store/store";

export default function CarApp() {
  const cars = myUseSelector((state) => state);
  const dispatch = myUseDispatch();

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
