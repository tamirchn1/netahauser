import Footer from "./Footer";
function Tetra() {
  return (
    <div id="tetra" className="mt-5 text-center px-5 lh-1">
      <h1>טטרה</h1>
      <p className="comp-text">
        טטרה 120/120 ס"מ, משמשת לעיטוף, שמיכה קלה, כיסוי עגלה או משטחים. <br />{" "}
        100% כותנה, צביעה עבודת יד בטכניקת שיבורי.
        <img
          className="page-img my-4"
          src={require("../images/shibori2.jpg")}
          alt="tetra"
        />
        <img
          className="page-img my-4"
          src={require("../images/shibori.jpg")}
          alt="tetra"
        />
      </p>{" "}
      <Footer />
    </div>
  );
}
export default Tetra;
