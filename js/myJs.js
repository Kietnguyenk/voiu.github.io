const textConfig = {
  text1: "Hello cục vàng",
  text2: "Có cái này vui nè",
  text3: "Làm vợ anh nha!!! Bé MY ú nu ._.",
  text4: "Nếu cậu ko trả lời mà thoát ra tức là muốn làm vợ tớ rùi đó nha :v",
  text5: "Ai thèm???",
  text6: "Tất Nhiên Là Có rùiii<3",
  text7: "",
  text8: "Gửi cho anh <3",
  text9: "Yêu anh",
  text10: "Anh biết mà ^^ Yêu em 300.000",
  text11:
    "Yêu quá đi",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/mon.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.tiktok.com/@kiet2112/video/7471203142055611666?_r=1&_d=secCgYIASAHKAESPgo8T%2FF1Ea9ebaVBsdwE0rNKWBVRzGmn1%2FqcOlQSkfCOzq3rYlyLvK%2FK4hR9aIm0GAc%2FFut%2B5PvPlHoFQU8TGgA%3D&_svg=1&checksum=b1094b528f63eca2c95c3c72d8993ff34f8e62efc92e2d29fb68e877984b224a&cover_exp=v1&link_reflow_popup_iteration_sharer=%7B%22follow_to_play_duration%22%3A-1%2C%22click_empty_to_play%22%3A1%2C%22profile_clickable%22%3A1%2C%22dynamic_cover%22%3A0%7D&mid=7471203200045959953&preview_pb=0&region=VN&sec_user_id=MS4wLjABAAAAGGxCwxmuEehToeCPt3LnqLhnW2arCRgbzQZq_HFJyvbnbTwjNhjo0N19_HwzkDhd&share_app_id=1180&share_item_id=7471203142055611666&share_link_id=CCF34E3B-FA85-4D2A-BA8B-A89B0DDDA77F&sharer_language=vi&social_share_type=0&source=h5_t&timestamp=1743938264&tt_from=copy&u_code=d08j2595183jc9&ug_btm=b8727%2Cb2878&user_id=6560886312203026433&utm_campaign=client_share&utm_medium=ios&utm_source=copy";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
