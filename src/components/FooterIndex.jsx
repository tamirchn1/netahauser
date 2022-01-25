import React from "react";
import { FaWhatsapp, FaInstagram, FaGoogle } from "react-icons/fa";

function FooterIndex() {
  return (
    <footer className="mt-5">
      <div className="">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=+972545428382-נטע האוזר"
          role="button"
        >
          <FaWhatsapp className="logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/nettahauser/"
          role="button"
        >
          <FaInstagram className="logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
         
           href="mailto:nettahauser09@gmail.com"
          role="button"
        >
          <FaGoogle className="logo" />
         </a>
        <p className="copyright">
          Copyright &copy; - This website was built by -
          <a className="tamir" href="mailto:Tamirchn1@gmail.com">
            Tamir Chen
          </a>
          -<script>document.write(new Date().getFullYear());</script>
        </p>
      </div>
    </footer>
  );
}
export default FooterIndex;
