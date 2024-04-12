import { Outlet } from "react-router-dom";
import MemberDetailsTabs from "../../components/member-details/MemberDetailsTabs";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function MembersDetailsPage() {
  const { language } = useContext(LanguageContext);

  const dict_heading = {
    en: {
      heading: "Member Details",
    },
    ko: {
      heading: "회원상세",
    },
  };
  return (
    <div>
      <h4>{dict_heading[language].heading}</h4>
      <MemberDetailsTabs />
      <Outlet />
    </div>
  );
}

export default MembersDetailsPage;
