function Menu() {
  return (
    <div className="container">
      <div className="menu">
        <a href="/privateworkshop" className="nav-link col-lg-4">
          התמסרות מלאה - סדנה פרטית
        </a>
        <a href="/privatelesson" className="nav-link col-lg-4">
          להתמסר לרגע - שיעור פרטי
        </a>
        <a href="/workshop" className="nav-link col-lg-4">
          סדנה קבוצתית
        </a>
        <a href="/tetra" className="nav-link col-lg-4">
          טטרה עבודת יד
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+972545428382-נטע האוזר"
          className="nav-link col-lg-4"
          target="_blank"
          rel="noreferrer"
        >
          שיחה או התכתבות בוואטספ להתייעצות חינם
        </a>
      </div>
    </div>
  );
}
export default Menu;
