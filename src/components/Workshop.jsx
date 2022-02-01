import Footer from "./Footer";

function Workshop() {
  return (
    <div id="workshop" className="mt-5 text-center px-5 lh-1">
      <h1>סדנה קבוצתית</h1>
      <p className="comp-text">
        סדנה לאמהות ותינוקות להקניית כלים לצמיחה והתפתחות משותפת. <br />
        הקבוצה מתחילה ב 13.2.22 מספר המקומות מוגבל. <br /> <br />
        מה מחכה לך בסדנה: <br /> <br />
        <img
          className="page-img my-3"
          src={require("../images/workshopimg.png")}
          alt="baby"
        />
        <ul>
          <li className="py-1 display-8">
            מפגשים כל אחד של שעה וחצי בסטודיו "מאלה" בת"א שכונת נגה
          </li>
          <li className="py-1 display-8">קבוצת וואטספ לשיתופים, התייעצות ושאלות במהלך הסדנה</li>
          <li className="py-1 display-8">קפה ונשנושים מעשה ידיי בכל מפגש</li>
          <li className="py-1 display-8">שמיכת טטרה איכותית מעשה ידיי בשווי 99 ש"ח</li>
          <li className="py-1 display-8">מסמך מסכם להדפסהלאחר כל מפגש </li>
        </ul>
      </p>
      <Footer />
    </div>
  );
}
export default Workshop;
