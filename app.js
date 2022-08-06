var num = 1;
var q = {
  1: {
    title: "Question 1",
    sub: "친한 친구랑 놀던 중, 친구가 내가 모르는 다른 친구를 부르려고 한다. 당신은?",
    type: "EI",
    A: "그래! 어차피 노는거 셋이서 노는게 더 재밌지~ 걔는 뭐하는애야?",
    B: "아 그건 좀...",
  },
  2: {
    title: "Question 2",
    sub: "친한 친구와 등산 다녀오고 난 후 차 한잔 후 집에 가려고 한다. 당신의 컨디션은?",
    type: "EI",
    A: "오늘 너무 재밌었어~ ㅎㅎ에너지가 완전 풀 충전 되는 기분이야 힘난다!",
    B: "하,, 피곤해.. 좋은 승부였다. 배터리 방전,, 언능 집가서 충전해야지",
  },
  3: {
    title: "Question 3",
    sub: "친구가 요즘 뭔가 고민이 많아 보인다. 나는 친구에게 어떻게 할까?",
    type: "EI",
    A: "뭐가 문제인지, 어떤 고민인지 바로 물어본다",
    B: "1주든 한 달이든 생각이 충분히 정리되면 연락한다.",
  },
  4: {
    title: "Question 4",
    sub: "집 근처 길을 나서는데 지나가는 모르는 사람이 내게 길을 물어본다. 당신의 반응은?",
    type: "SN",
    A: "아 슈퍼 앞 300m 직진 하시고 길 건너시면 우측에 있어요! ",
    B: "저기서 오른쪽으로 쪼금 가신다음에 이쪽으로 가시면 있어요!",
  },
  5: {
    title: "Question 5",
    sub: "다음중 어려운것은? 포대자루타고 대관령 내려오기 VS 트월킹 추면서 한라산 등반",
    type: "SN",
    A: "헛소리하지마",
    B: "포대자루타고 대관령에서 내려오는게 더 쉽지 않나?",
  },
  6: {
    title: "Question 6",
    sub: "아무 생각 하지마! 라는 말을 들었을때, 당신은?",
    type: "SN",
    A: "생각을 그만해야겠다는 생각 자체가 없다. 생각은 필요할 때만 깊게 생각하는거지",
    B: "어떻게 아무 생각 안하지? 일어나지도 않을 일들 끝까지 다 상상하고나서야 아차차 멍을 때렸군하고 돌아옴 ",
  },
  7: {
    title: "Question 7",
    sub: "지하철 입구에서 할머니가 전단지를 나눠줄 때 당신의 반응은?",
    type: "TF",
    A: "어차피 버릴꺼 왜받음? 그리고 앞에서 길막는거 보면 더 받기 싫어짐.",
    B: "전단지 받는게 힘든일도 아니고 내가 받으면 빨리 퇴근 하시니까.. 지난번엔 지나첬는데 마음에 걸리더라",
  },
  8: {
    title: "Question 8",
    sub: "친구가 우울해서 머리를 잘랐다고 연락이 왔다. 당신의 반응은?",
    type: "TF",
    A: "그래? 머리 얼마나 잘랐어? 사진 보내봐. 마음에 들어? 잘 짤랐네~ 근데 무슨일이야?",
    B: "왜 우울했어?ㅠㅠ 머리하러 갈 만큼 스트레스 받았어? 기분 전환 하려고 머리 하러 갔어? ",
  },
  9: {
    title: "Question 9",
    sub: "친구와 함께 있는데 친구 아버지가 갑자기 교통사고가 났다고 전화가 왔다. 당신의 반응은?",
    type: "TF",
    A: "아버지 몸은 어떠셔? 보험은 있으셔? 아 그거 실비는 이렇게 처리하고,, 다행이다 그래도 보험있으셔서 치료비 부담 없으시겠다 ",
    B: "어떻게 많이 다치셨데? 어쩌다 나셨데? 병원 가봐야 하는거 아니야? 내가 같이 가줄께ㅠㅠ 어떻게 걱정되겠다ㅠㅠ",
  },
  10: {
    title: "Question 8",
    sub: "이번 달, 이상하게 예상 밖의 지출이 많아 돈을 아껴야 한다. 당신은?",
    type: "JP",
    A: "다음 월급까지 얼마 남았지? 지금 잔액 확인 해보자. 대충 나누면 하루에 만원 정도 쓰면 되겠는데?",
    B: "대충 아껴쓰면 되겠지? 어차피 즐기려고 돈버는 거잖아 ㅎㅎ",
  },
  11: {
    title: "Question 11",
    sub: "친구와 함께 유럽 여행을 떠나게 되었다. 함께 계획을 세우기로 하는데 당신은?",
    type: "JP",
    A: "일단 구글 스프레드 시트 켜서 일정 짜보자! 오늘부터 2주정도 있으니까 1시간씩 조사해서 최고의 계획을 짜보자!",
    B: "와 재밌겠다! 비행기랑 숙소 예매했지? 준비 끝! 신난다~",
  },
  12: {
    title: "Question 12",
    sub: "카카오톡의 알림과 이메일, 문자들이 오고 있는데 내 핸드폰의 알림 상태는?",
    type: "JP",
    A: "어? 이건 중요한 연락이니까 체크해 두고, 스펨 메일은 정리하고,,, 빨리 숫자 1을 지워야해 다 읽어 버리자.",
    B: "뭐가 이렇게 많아 메일함은 999+ 기본, 매일 보는거만 보면 되지 상관없어~",
  },
};

var result = {
  ISTJ: {
    type: "ISTJ",
    explain: "청렴결백한 논리주의자, 세상의 소금형 - ISTJ",
    detail: "청렴결백한 논리주의자, 세상의 소금형 - ISTJ",
    img: "lion.jpg",
  },
  ISTP: {
    type: "ISTP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ISFJ: {
    type: "ISFJ",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ISFP: {
    type: "ISFP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  INTJ: {
    type: "INTJ",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  INTP: {
    type: "INTP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  INFJ: {
    type: "INFJ",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  INFP: {
    type: "INFP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ESTJ: {
    type: "ESTJ",
    explain: "ESTJ",
    detail: "ESTJ",
    img: "lion.jpg",
  },
  ESTP: {
    type: "ESTP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ESFJ: {
    type: "ESFJ",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ESFP: {
    type: "ESFP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ENTJ: {
    type: "ENTJ",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ENTP: {
    type: "ENTP",
    explain: "ENTP",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ENFJ: {
    type: "ENFJ",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
  ENFP: {
    type: "ENFP",
    explain: "하마 설명",
    detail: "디테일 설명",
    img: "lion.jpg",
  },
};

function start() {
  $(".start").hide();
  $(".question").show();
  next();
}

$("#A").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});
$("#B").click(function () {
  next();
});

function next() {
  if (num == 13) {
    $(".question").hide();
    $(".result").show();
    var mbti = "";
    $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
    $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
    $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
    $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");
    $("#img").attr("src", result[mbti]["img"]);
    $("#typembti").html(result[mbti]["type"]);
    $("#type_explain").html(result[mbti]["explain"]);
    $("#detail_explain").html(result[mbti]["detail"]);
  } else {
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%");
    $("#title").html(q[num]["title"]);
    $("#sub-title").html(q[num]["sub"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}
