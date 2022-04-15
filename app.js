var num = 1;
var q = {
  1: { title: "Question 1", type: "EI", A: "E", B: "i" },
  2: { title: "Question 2", type: "EI", A: "E", B: "i" },
  3: { title: "Question 3", type: "EI", A: "E", B: "i" },
  4: { title: "Question 4", type: "SN", A: "S", B: "N" },
  5: { title: "Question 5", type: "SN", A: "S", B: "N" },
  6: { title: "Question 6", type: "SN", A: "S", B: "N" },
  7: { title: "Question 7", type: "TF", A: "T", B: "F" },
  8: { title: "Question 8", type: "TF", A: "T", B: "F" },
  9: { title: "Question 9", type: "TF", A: "T", B: "F" },
  10: { title: "Question 10", type: "JP", A: "J", B: "P" },
  11: { title: "Question 11", type: "JP", A: "J", B: "P" },
  12: { title: "Question 12", type: "JP", A: "J", B: "P" },
};

var result = {
  ESTJ: { animal: "하마", explain: "하마 설명", img: "lion.jpg" },
  ENFP: { animal: "사자", explain: "멋사 설명", img: "lion.jpg" },
  ENTP: { animal: "호랑", explain: "호랑 설명", img: "lion.jpg" },
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
    $("#animal").html(result[mbti]["animal"]);
    $("#explain").html(result[mbti]["explain"]);
  } else {
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}
