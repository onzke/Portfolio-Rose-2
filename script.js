var imgPolaroid = "Moi.jpg";

$(".clicCamera").mouseenter(function () {
  $("#ejectionPolaroid").fadeIn();
  $("#ejectionPolaroid").css({
    background: "url(" + imgPolaroid + ")",
    position: "absolute",
    top: "220px",
    right: "75px",
    height: "80%",
    width: "60%",
    borderBottom: "20px solid white",
    borderTop: "10px white solid",
    borderLeft: "10px white solid",
    borderRight: "10px white solid",
  });
  $(".mesures").css({ boxShadow: "0.5px 2px 2px 1px wheat" });
});

$(".clicCamera").mouseleave(function () {
  $("#ejectionPolaroid").css({
    display: "none",
  });
  $(".mesures").css({ boxShadow: "0px 0px 0px 0px black" });
});
