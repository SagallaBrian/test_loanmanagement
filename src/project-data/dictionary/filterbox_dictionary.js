const dict_filterbox = {
  en: {
    regdate: {
      name: "Registration Date",
      options: {
        all: "All",
        today: "Today",
        yesterday: "Yesterday",
        oneweek: "1 Week",
        onemonth: "1 Month",
        threemonths: " 3 Months",
      },

      placeholder: ["Start Date", "End Date"],
    },
    dormant_status: {
      name: " Dormant Status",
      options: {
        all: "All",
        active: "Active",
        dormant: "Dormant",
      },
    },
    blacklist_status: {
      name: " Blacklist Status",
      options: {
        all: "Whole",
        active: "Active",
        blacklist: "Blacklist",
      },
    },
    investortype: {
      name: " Investor Type",
      options: {
        all: "All",
        general: "General",
        income_elig: "Income Eligible",
        indivi_speciaty: "Individual Specialty",
        coop: " Corporation",
        credit: "Credit Finance",
        ptwop: "P2P On/Offline",
      },
    },
    invest_status: {
      name: " Investment Status",
      options: {
        all: "All",
        investing: "Investing",
        not_investing: "Not Investing",
      },
    },
    borrow_type: {
      name: " Borrower Type",
      options: {
        all: "All",
        individual: "Individual",
        sole_prop: " Sole Proprietorship",
        coop: " Corporation",
      },
    },
    loan_status: {
      name: "Loan Status",
      options: {
        all: "All",
        has_loan: "Has Loan",
        no_loan: "No Loan",
      },
    },
    invt_type_status: {
      name: "investment type approval status",
      options: {
        all: "All",
        pending: "Pending",
        approved: "Approved",
        denied: "Denied",
      },
    },
    loaninveststatus: {
      name: "investment/loan status",
      options: {
        all: "all",
        repaying: "undergoing repayment",
        repaid: "fully repaid",
        overdue: "overdue",
        early_payment: "early repayment completed",
        maturity_payment: "maturity repayment completed",
        impending_loss: "expected to lose time-limited benefits",
        lost_time: "loss of time-limited benefits",
        reconcilation: "Reconciliation",
      },
    },
    search: {
      name: "Search",
      placeholder: "Please enter a search term.",
      initialize: "Initialize",
    },
    channel: {
      name: "Channel",
      options: {
        all: "All",
        pc: "PC",
        mobile: "Mobile App",
        mob_wep: "Mobile Web",
      },
    },
  },
  ko: {
    regdate: {
      name: "가입일",
      options: {
        all: "전체",
        today: "오늘",
        yesterday: "어제",
        oneweek: "1주일",
        onemonth: "1개월",
        threemonths: "3개월",
      },
      placeholder: ["시작일", "종료일"],
    },
    dormant_status: {
      name: "휴면상태",
      options: {
        all: "전체",
        active: "정상",
        dormant: "휴면",
      },
    },
    blacklist_status: {
      name: "블랙리스트 상태",
      options: {
        all: "전체", // translates to all
        active: "정상",
        blacklist: "블랙리스트",
      },
    },
    investortype: {
      name: "투자자유형",
      options: {
        all: "전체",
        general: "일반개인",
        income_elig: "소득적격",
        indivi_speciaty: "개인전문 ",
        coop: " 법인",
        credit: "여신금융",
        ptwop: "P2P온투",
      },
    },
    invest_status: {
      name: " 투자여부",
      options: { all: "전체", investing: "투자중", not_investing: "없음" },
    },
    borrow_type: {
      name: " 대출자유형",
      options: {
        all: "전체",
        individual: "개인",
        sole_prop: " 개인사업자",
        coop: " 법인",
      },
    },
    loan_status: {
      name: "대출여부",
      options: { all: "전체", has_loan: "대출중", no_loan: "없음" },
    },
    invt_type_status: {
      name: "투자유형승인여부",
      options: {
        all: "전체",
        pending: "승인대기",
        approved: "승인완료",
        denied: "승인거부",
      },
    },

    loaninveststatus: {
      name: "투자/대출상태",
      options: {
        all: "전체",
        repaying: "상환중",
        repaid: "상환완료",
        overdue: "연체중",
        early_payment: "중도상환완료",
        maturity_payment: "만기상환완료",
        impending_loss: "기한이익상실 예정",
        lost_time: "기한이익상실",
        reconcilation: "화해",
      },
    },
    search: {
      name: "검색",
      placeholder: "검색어를 입력해주세요",
      initialize: "초기화",
    },
    channel: {
      name: "채널",
      options: {
        all: "전체",
        pc: "PC",
        mobile: "Mobile App",
        mob_wep: "Mobile Web",
      },
    },
  },
};

export { dict_filterbox };
