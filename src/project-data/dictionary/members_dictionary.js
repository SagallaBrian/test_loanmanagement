const dict_members_table_page = {
  en: {
    number: "NO",
    member_id: "Member ID",
    member_coop_name: "Member Name / Corporate Name",
    phone_no: "Phone Number (Mobile)",
    email_id: "Email ID",
    category: "Category",
    type: "Type",
    guid: "GUID",
    invest_loan_count: "Investment/Loan Count",
    repay_count: "Repayment Count",
    deli_count: "Delinquency Count",
    invest_type: "Investment Type Approval Status",
    dorman_status: "Dormant Status",
    blacklist_status: "Blacklist Status",
    reg_date_time: "Registration Date and Time.",
  },
  ko: {
    number: "NO",
    member_id: "회원번호",
    member_coop_name: "회원명/법인명",
    phone_no: "휴대폰 번호",
    email_id: "이메일ID",
    category: "구분",
    type: "유형",
    guid: "GUID",
    invest_loan_count: "투자/대출건수",
    repay_count: "상환건수",
    deli_count: "연체건수",
    invest_type: "투자유형승인여부",
    dorman_status: "휴면상태",
    blacklist_status: "블랙리스트상태",
    reg_date_time: "가입일시",
  },
};

const dict_members_dashboard = {
  en: {
    number: "NO",
    member_id: "Member ID",
    member_coop_name: "Member Name / Corporate Name",
    phone_no: "Phone Number (Mobile)",
    email_id: "Email ID",
    category: "Category",
    type: "Type",
    guid: "GUID",
  },
  ko: {
    number: "NO",
    member_id: "회원번호",
    member_coop_name: "회원명/법인명",
    phone_no: "휴대폰 번호",
    email_id: "이메일ID",
    category: "구분",
    type: "유형",
    guid: "GUID",
  },
};

const dict_member_detail_table = {
  en: {
    number: "NO",
    exist_type: "Existing Type",
    app_type: "Application Type",
    submit_doc: "Submitted Documents",
    date_time: "Application Date and Time",
    approval_status: "Approval Status",
    reason_reject: "Reason for Approval Rejection",
    approval_date: "Approval Date and Time",
    // admin: "Administrator",
  },
  ko: {
    number: "NO",
    exist_type: "기존유형",
    app_type: "신청유형",
    submit_doc: "제출서류",
    date_time: "신청일시",
    approval_status: "승인여부",
    reason_reject: "승인거부 사유",
    approval_date: "승인일시",
    // admin: "관리자",
  },
};

const dict_member_detail_tabs = {
  en: {
    basicinfo: "Basic Information Management",
    investtype: "Investment Type Management",
    transachist: "Transaction History",
    business_hist: "Business Transaction History",
    invest_hist: "Investment History",
    bond_hist: "Bond History",
    sms_manage: "SMS Management",
    consult_hist: "Consultation History",
    onetoonehist: "1:1 Inquiry History ",
  },
  ko: {
    basicinfo: "기본정보 관리",
    investtype: "투자유형 관리",
    transachist: "입출금내역 조회",
    business_hist: "영업내역 조회",
    invest_hist: "투자내역 조회",
    bond_hist: "채권내역 조회",
    sms_manage: "SMS 관리",
    consult_hist: "상담내역 관리",
    onetoonehist: "1:1문의내역 조회",
  },
};

export {
  dict_members_table_page,
  dict_member_detail_tabs,
  dict_member_detail_table,
  dict_members_dashboard,
};