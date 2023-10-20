const Menu = () => {
  const backgroundImageURL = "https://i.blogs.es/fff4ca/pizzas/1366_521.jpg";
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          background: `url(${backgroundImageURL})`,
          backgroundSize: "auto",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="imagen">
          <h1>¡Pizzeria Mamma Mia!</h1>
          <h5>¡Tenemos las mejores pizzas!</h5>
        </div>
      </section>
    </>
  );
};

export default Menu;
