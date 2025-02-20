function Gello({ person }) {
  return (
    <>
      <h1>
        hello :- Name:-{person.name} Address:-{person.add}
      </h1>
      <h2>
        mob-{person.phone} seatno-{person.seatNumber}
      </h2>
    </>
  );
}
export default Gello;
