import Footer from "./Footer";
function PrivateLesson() {
  return (
    <div id="privatelesson" className="mt-5 text-center px-5 lh-1">
      <h1>להתמסר לרגע - שיעור פרטי</h1>
      <p className="comp-text pb-4">
        {" "}
        .התמסרות מלאה: סדנת פרטית, תהליך הכולל שלושה שיעורים מותאמים אישית עבורך
        ועבור התינוק.ת שלך. <br /> <br /> מתאים לגילאי לידה ועד חצי שנה. כל אורך
        60 דקות, בביתך או אצלי בסטודיו בשכונת נגה בתל אביב. השיעור כולל הערכה
        התפתחותית ותרגול:הערכת ההתפתחות הסנסו-מוטורית, הערכת הסביבה ההתפתחותית,
        ותרגול עם דגש על תהליכים מותאמים אישית לתינוק.ת שלך, לפי הקצב שמתאים
        לה.לו. <br /> <br />{" "}
        <img
          className="page-img my-4"
          src={require("../images/privatelessonimg.png")}
          alt="baby"
        />
        ממפגש למפגש נבחן את השינויים שעובר התינוק ונמשיך לשכלל ביחד את המענה
        שניתן לו. תלמדי גישה כוללת על היחס והטיפול בתינוק ובעצמך, שתלך איתך
        קדימה עם האימהות, הקשבה לאינטואיציה שלך, ביטחון בעצמך, ביטחון לחפש את
        תפיסת העולם האימהית האישית שלך שתואמת לערכים שלך. <br /> <br />
        תדעי איך לזהות מה עובר עליו ולתת לו את המענה הכי טוב שאת יכולה. הכל נעשה
        ברכות, בנועם, חשוב לי שנהיה קשובות לתינוק ונתייחס אליו כמו בנאדם לכל דבר
      </p>

      <Footer />
    </div>
  );
}
export default PrivateLesson;
