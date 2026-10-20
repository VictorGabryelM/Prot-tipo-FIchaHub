
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

let celularAtual = null;

fetch("celulares.json")
  .then(resposta => resposta.json())
  .then(celulares => {

    const celular = celulares.find(c => c.id === id);

    if (celular) {
      celularAtual = celular;

      document.getElementById("name").textContent = celular.name;
      document.getElementById("generation").textContent = celular.generation;
      document.getElementById("mark").textContent = celular.mark;
      document.getElementById("premium").textContent = celular.premium;

      document.getElementById("ram").textContent = celular.ram;
      document.getElementById("about").textContent = celular.about;

      document.getElementById("screentype").textContent = celular.screentype;
      document.getElementById("resolution").textContent = celular.resolution;
      document.getElementById("refreshrate").textContent = celular.refreshrate;
      document.getElementById("inches").textContent = celular.inches;

      document.getElementById("processor").textContent = celular.processor;
      document.getElementById("gpu").textContent = celular.gpu;
      document.getElementById("cpu").textContent = celular.cpu;
      document.getElementById("rom").textContent = celular.rom;

      document.getElementById("battery").textContent = celular.battery;
      document.getElementById("usb").textContent = celular.usb;
      document.getElementById("wifi").textContent = celular.wifi;
      document.getElementById("bluetooth").textContent = celular.bluetooth;
      document.getElementById("screen").textContent = celular.screen;
      document.getElementById("antutu").textContent = celular.antutu;
      document.getElementById("certification").textContent = celular.certification;
      document.getElementById("nfc").textContent = celular.nfc;

      document.getElementById("cam_main").textContent = celular.cam_main;
      document.getElementById("ultrawide_cam").textContent = celular.ultrawide_cam;
      document.getElementById("opticalzoom_cam").textContent = celular.opticalzoom_cam;
      document.getElementById("cam_front").textContent = celular.cam_front;

      document.getElementById("record_main").textContent = celular.record_main;
      document.getElementById("zoom_record").textContent = celular.zoom_record;
      document.getElementById("record_front").textContent = celular.record_front;

      document.getElementById("cam--1").src = celular.cam__1;
      document.getElementById("cam--2").src = celular.cam__2;
      document.getElementById("cam--3").src = celular.cam__3;
      document.getElementById("cam--4").src = celular.cam__4;

      document.getElementById("text1-cam--1").textContent = celular.text1_cam__1;
      document.getElementById("text2-cam--1").textContent = celular.text2_cam__1;
      document.getElementById("text1-cam--2").textContent = celular.text1_cam__2;
      document.getElementById("text2-cam--2").textContent = celular.text2_cam__2;
      document.getElementById("text1-cam--3").textContent = celular.text1_cam__3;
      document.getElementById("text2-cam--3").textContent = celular.text2_cam__3;
      document.getElementById("text1-cam--4").textContent = celular.text1_cam__4;
      document.getElementById("text2-cam--4").textContent = celular.text2_cam__4;

      document.getElementById("img").src = celular.img;
      document.getElementById("cam-phone-img").src = celular.cam_phone_img;

      // Aplica a primeira cor do celular automaticamente
      mudarCor(0);
    }
  })
  .catch(erro => console.error("Erro ao carregar celulares.json:", erro));




function mudarCor(indice) {
    if (!celularAtual) return;

    const botoes = document.querySelectorAll(".box div button");

    botoes.forEach((botao, i) => {
        const corBotao = celularAtual.color?.[i];

        if (corBotao) {
            botao.style.setProperty("--cor-selecao", corBotao);
        }

        botao.classList.toggle("selecionado", i === indice);
    });

    const cor = celularAtual.color?.[indice];

    if (cor) {
        document.documentElement.style.setProperty("--color", cor);
    }

    if (Array.isArray(celularAtual.img) && celularAtual.img[indice]) {
        document.getElementById("img").src = celularAtual.img[indice];
    }
    if (Array.isArray(celularAtual.cam_phone_img) && celularAtual.cam_phone_img[indice]) {
        document.getElementById("cam-phone-img").src = celularAtual.cam_phone_img[indice];
    }
}



function alternar(botao) {
  const botoes = document.querySelectorAll(".back-button");
  const geral = document.getElementById("about1");
  const tela = document.getElementById("about2");
  const hardware = document.getElementById("about3");
  const camera = document.getElementById("about4");
  const record = document.getElementById("about5");
    

  botoes.forEach(btn => {
    btn.style.backgroundColor = "transparent";
    btn.style.boxShadow = "none";
  });

  botao.style.backgroundColor = "#2f445d";
  botao.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";

  if (botao.id === "back-button-general") {
    geral.style.display = "flex";
    hardware.style.display = "none";
    camera.style.display = "none";
    record.style.display = "none";
    tela.style.display = "none";
  }

  if (botao.id === "back-button-screen") {
    geral.style.display = "none";
    hardware.style.display = "none";
    camera.style.display = "none";
    record.style.display = "none";
    tela.style.display = "flex";
  }
  if (botao.id === "back-button-hardware") {
    geral.style.display = "none";
    tela.style.display = "none";
    camera.style.display = "none";
    record.style.display = "none";
    hardware.style.display = "flex";
  }
  if (botao.id === "back-button-camera") {
    geral.style.display = "none";
    tela.style.display = "none";
    hardware.style.display = "none";
    record.style.display = "none";
    camera.style.display = "flex";
  }
  if (botao.id === "back-button-record") {
    geral.style.display = "none";
    tela.style.display = "none";
    hardware.style.display = "none";
    camera.style.display = "none";
    record.style.display = "flex";
  }
}


// Animação dos elementos das câmeras
const elementos = document.querySelectorAll(
  ".box-cam > img, .box-cam .div-box"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach(elemento => {
  observer.observe(elemento);
});
