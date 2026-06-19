import Accountpage from "../components/Accountpage";
import Navbar from "../components/Navbar";
import "../components/Hero.css";

const AccountPage = () => {
  return (
    <div style={{ animation: "fadeIn 0.5s ease-in" }}>
      <Navbar />
      <Accountpage />
    </div>
  );
};

export default AccountPage;
