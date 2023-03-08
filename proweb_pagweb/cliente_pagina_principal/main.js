// buscar
$("#buscar-btn").click(function (e) {
  if (!$("#buscar-field").val() == "") {
    console.log("buscando:", $("#buscar-field").val());
  }
  e.preventDefault();
});

// ----------------------------REACCIONES----------------------------
let likes = 0; // cambiar esto luego ;)
let liked = false;
let disliked = false;
// like
$(".like").click(function () {
  // liked
  if (!liked) {
    // si estaba en dislike, le agregas 2
    if (disliked) likes++;
    liked = true;
    disliked = false;
    likes++;
    console.log("liked!");
    $(this).siblings(".dislike").css("background-color", "rgba(0, 0, 0, 0)");
    $(this).css("background-color", "var(--like-color)");
  }
  // unliked
  else {
    console.log("unliked!");
    $(this).css("background-color", "rgba(0, 0, 0, 0)");
    liked = false;
    likes--;
  }
  $(this).siblings(".contador").text(likes);
});
// dislike
$(".dislike").click(function () {
  // disliked
  if (!disliked) {
    // si estaba en like, le quitas 2
    if (liked) likes--;
    disliked = true;
    liked = false;
    likes--;
    console.log("disliked!");
    $(this).siblings(".like").css("background-color", "rgba(0, 0, 0, 0)");
    $(this).css("background-color", "var(--dislike-color)");
  }
  // un-disliked
  else {
    console.log("un-disliked!");
    $(this).css("background-color", "rgba(0, 0, 0, 0)");
    disliked = false;
    likes++;
  }
  $(this).siblings(".contador").text(likes);
});
// comentar
let comentando = false;
$(".comentar").click(function () {
  if (!comentando) {
    comentando = true;
    $(this).parent().parent().closest("div").append(`
      <form id="comentar-div">
        <input type="text" class="comentario">
        <input type="submit" class="publicar btn btn-success" value="Publicar">
        <input type="submit" class="cancelar btn btn-outline-light" value="Cancelar">
      </form>
    `);
    $(".comentario").focus();
    // publicar comentario
    $(".publicar").click(function (e) {
      if ($(".comentario").val() === "") {
        console.log("nope'd");
      } else {
        comentando = false;
        let nombre = "Usuario"; // quitar esto cuando tengamos back-end ;)
        $(this).closest(".publicacion").children("p").append(`
        
          <div class="comentario-escrito">
            <h6>${nombre}<h6>
            <p>${$(".comentario").val()}<p>
          </div>
        
        `);
        $("#comentar-div").remove();
      }
      e.preventDefault();
    });
    // cancelar comentario
    $(".cancelar").click(function (e) {
      comentando = false;
      $("#comentar-div").remove();
      e.preventDefault();
    });
  }
});
