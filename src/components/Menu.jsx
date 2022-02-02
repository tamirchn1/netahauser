function Menu() {
  return (
    <div className="">
      <div className="menu">
        <a href="/privatelesson" className="nav-link">
          להתמסר לרגע - שיעור פרטי
        </a>
        <a href="/privateworkshop" className="nav-link ">
          התמסרות מלאה - סדנה פרטית
        </a>
        <a href="/workshop" className="nav-link">
          סדנה קבוצתית
        </a>
        <a href="/tetra" className="nav-link">
          טטרה עבודת יד
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+972545428382 - נטע האוזר"
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
