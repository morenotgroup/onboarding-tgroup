// content.js
// Tudo no window para evitar problema de import/export no deploy.

window.DECK_SETTINGS = {
  // "60" = deck completo / "40" = deck mais direto (remove slides marcados como pace:"deep")
  mode: "60"
};

window.DECK = null;
window.DECK_READY = fetch("./content.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Falha ao carregar content.json");
    }
    return response.json();
  })
  .then((data) => {
    window.DECK = data;
    return data;
  })
  .catch((error) => {
    console.error("[Onboarding] Erro ao carregar content.json", error);
    return null;
  });
